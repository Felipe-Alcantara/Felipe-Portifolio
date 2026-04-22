import React from "react";
import GithubSlugger from "github-slugger";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const IMPORTED_REPO_METADATA = import.meta.glob(
  "../../data/github-import/repos/*/metadata.json",
  {
    import: "default",
    eager: true,
  }
);

function normalizeReadme(content) {
  return content
    .replace(/^\s*<div[^>]*>\s*$/gim, "")
    .replace(/^\s*<\/div>\s*$/gim, "");
}

function extractText(children) {
  return React.Children.toArray(children)
    .map((child) => {
      if (typeof child === "string" || typeof child === "number") {
        return String(child);
      }

      if (React.isValidElement(child)) {
        return extractText(child.props.children);
      }

      return "";
    })
    .join("");
}

function normalizeGitHubRepoUrl(value) {
  if (typeof value !== "string" || !value.trim()) {
    return null;
  }

  const match = value.trim().match(/^https?:\/\/github\.com\/([^/]+)\/([^/#?]+)/i);

  if (!match) {
    return null;
  }

  return {
    owner: match[1],
    repo: match[2].replace(/\.git$/i, ""),
  };
}

function resolveRepoContext(project) {
  if (!project || typeof project !== "object") {
    return null;
  }

  const metadataPath =
    typeof project.repoFolder === "string" && project.repoFolder.trim()
      ? `../../data/github-import/repos/${project.repoFolder.trim()}/metadata.json`
      : "";
  const importedMetadata = metadataPath ? IMPORTED_REPO_METADATA[metadataPath] : null;
  const fallbackRepo =
    normalizeGitHubRepoUrl(project?.links?.github) || normalizeGitHubRepoUrl(project?.link);

  const owner = importedMetadata?.owner || fallbackRepo?.owner;
  const repo = importedMetadata?.name || fallbackRepo?.repo;
  const branch =
    typeof importedMetadata?.defaultBranch === "string" && importedMetadata.defaultBranch.trim()
      ? importedMetadata.defaultBranch.trim()
      : "main";

  if (!owner || !repo) {
    return null;
  }

  return {
    owner,
    repo,
    branch,
    repoUrl: importedMetadata?.repoUrl || `https://github.com/${owner}/${repo}`,
  };
}

function splitUrlParts(url) {
  const hashIndex = url.indexOf("#");
  const queryIndex = url.indexOf("?");
  let pathEnd = url.length;

  if (queryIndex >= 0) {
    pathEnd = Math.min(pathEnd, queryIndex);
  }

  if (hashIndex >= 0) {
    pathEnd = Math.min(pathEnd, hashIndex);
  }

  return {
    pathname: url.slice(0, pathEnd),
    search: queryIndex >= 0 ? url.slice(queryIndex, hashIndex >= 0 ? hashIndex : undefined) : "",
    hash: hashIndex >= 0 ? url.slice(hashIndex) : "",
  };
}

function isSafeAbsoluteUrl(url) {
  return /^(https?:|mailto:|tel:)/i.test(url);
}

function isRelativeRepoUrl(url) {
  return Boolean(url) && !isSafeAbsoluteUrl(url) && !url.startsWith("#") && !url.startsWith("/");
}

function isImagePath(pathname) {
  return /\.(avif|bmp|gif|jpe?g|png|svg|webp)$/i.test(pathname);
}

function resolveMarkdownUrl(url, key, project) {
  if (typeof url !== "string") {
    return url;
  }

  if (!isRelativeRepoUrl(url)) {
    return url;
  }

  const repoContext = resolveRepoContext(project);

  if (!repoContext) {
    return url;
  }

  const { pathname, search, hash } = splitUrlParts(url);
  const normalizedPath = pathname.replace(/^\.\/+/, "");

  if (!normalizedPath) {
    return url;
  }

  if (key === "src" || isImagePath(normalizedPath)) {
    return `https://raw.githubusercontent.com/${repoContext.owner}/${repoContext.repo}/${repoContext.branch}/${normalizedPath}${search}${hash}`;
  }

  return `${repoContext.repoUrl}/blob/${repoContext.branch}/${normalizedPath}${search}${hash}`;
}

function createHeadingRenderer(Tag, className, slugger) {
  return function Heading({ children }) {
    const headingText = extractText(children).trim();
    const id = headingText ? slugger.slug(headingText) : undefined;

    return (
      <Tag id={id} className={className}>
        {id ? (
          <a
            href={`#${id}`}
            className="group inline-flex items-start gap-2 no-underline hover:text-inherit"
          >
            <span className="opacity-0 transition-opacity group-hover:opacity-100 text-zinc-500">#</span>
            <span>{children}</span>
          </a>
        ) : (
          children
        )}
      </Tag>
    );
  };
}

export function ProjectReadmeContent({ content, project }) {
  if (!content) {
    return null;
  }

  const normalizedContent = normalizeReadme(content);
  const slugger = new GithubSlugger();

  return (
    <div className="text-zinc-300 leading-relaxed break-words">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        urlTransform={(url, key) => resolveMarkdownUrl(url, key, project)}
        components={{
          h1: createHeadingRenderer(
            "h1",
            "scroll-mt-6 text-xl font-bold text-purple-400 mb-3 break-words",
            slugger
          ),
          h2: createHeadingRenderer(
            "h2",
            "scroll-mt-6 text-lg font-semibold text-purple-300 mb-2 break-words",
            slugger
          ),
          h3: createHeadingRenderer(
            "h3",
            "scroll-mt-6 text-base font-medium text-purple-200 mb-2 break-words",
            slugger
          ),
          h4: createHeadingRenderer(
            "h4",
            "scroll-mt-6 text-sm font-semibold text-purple-100 mb-2 break-words",
            slugger
          ),
          p: ({ children }) => (
            <p className="text-zinc-300 mb-3 leading-relaxed break-words">{children}</p>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-purple-500 pl-4 italic text-zinc-400 mb-3 break-words">
              {children}
            </blockquote>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside mb-3 space-y-1 break-words">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside mb-3 space-y-1 break-words">{children}</ol>
          ),
          li: ({ children }) => <li className="text-zinc-300 break-words">{children}</li>,
          input: ({ type, checked, disabled }) => {
            if (type === "checkbox") {
              return (
                <input
                  type="checkbox"
                  checked={Boolean(checked)}
                  disabled={disabled ?? true}
                  readOnly
                  className="mr-2 h-4 w-4 rounded border-white/20 bg-zinc-900 accent-purple-400 align-middle"
                />
              );
            }

            return <input type={type} disabled={disabled} readOnly />;
          },
          a: ({ href, children }) => {
            const isAnchorLink = typeof href === "string" && href.startsWith("#");

            return (
              <a
                href={href}
                onClick={(event) => {
                  if (!isAnchorLink || typeof href !== "string") {
                    return;
                  }

                  const targetId = decodeURIComponent(href.slice(1));
                  const targetElement = document.getElementById(targetId);

                  if (!targetElement) {
                    return;
                  }

                  event.preventDefault();
                  targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                target={isAnchorLink ? undefined : "_blank"}
                rel={isAnchorLink ? undefined : "noopener noreferrer"}
                className="text-purple-300 underline hover:text-purple-200 transition-colors break-all"
              >
                {children}
              </a>
            );
          },
          code: ({ className, children }) => {
            const value = String(children).replace(/\n$/, "");
            const isBlock = Boolean(className) || value.includes("\n");

            if (!isBlock) {
              return (
                <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-purple-300 font-mono text-sm break-all">
                  {value}
                </code>
              );
            }

            return (
              <pre className="bg-zinc-900 border border-white/10 rounded-lg p-3 mb-3 overflow-x-auto max-w-full">
                <code className="text-zinc-200 font-mono text-sm">{value}</code>
              </pre>
            );
          },
          hr: () => <hr className="border-white/10 my-4" />,
          img: ({ src, alt }) => (
            <img
              src={src}
              alt={alt || ""}
              className="max-w-full rounded-lg border border-white/10 my-3"
              loading="lazy"
            />
          ),
          table: ({ children }) => (
            <div className="mb-4 overflow-x-auto rounded-xl border border-white/10">
              <table className="min-w-full border-collapse text-sm">{children}</table>
            </div>
          ),
          thead: ({ children }) => <thead className="bg-zinc-900/80">{children}</thead>,
          tbody: ({ children }) => <tbody className="divide-y divide-white/10">{children}</tbody>,
          tr: ({ children }) => <tr className="border-b border-white/10 last:border-b-0">{children}</tr>,
          th: ({ children }) => (
            <th className="px-3 py-2 text-left font-semibold text-purple-200">{children}</th>
          ),
          td: ({ children }) => <td className="px-3 py-2 align-top text-zinc-300">{children}</td>,
          details: ({ children, ...props }) => (
            <details
              {...props}
              className="group mb-4 overflow-hidden rounded-xl border border-white/10 bg-zinc-900/60"
            >
              {children}
            </details>
          ),
          summary: ({ children, ...props }) => (
            <summary
              {...props}
              className="cursor-pointer list-none select-none px-4 py-3 font-medium text-purple-200 transition-colors hover:bg-white/5 hover:text-purple-100 [&::-webkit-details-marker]:hidden"
            >
              {children}
            </summary>
          ),
        }}
      >
        {normalizedContent}
      </ReactMarkdown>
    </div>
  );
}
