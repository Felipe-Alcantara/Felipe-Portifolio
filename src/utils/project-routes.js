function slugifySegment(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s_-]/g, " ")
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-");
}

function getSlugSource(project) {
  if (typeof project?.repoKey === "string" && project.repoKey.trim()) {
    const segments = project.repoKey.trim().split("/");
    return segments[segments.length - 1];
  }

  if (typeof project?.repoFolder === "string" && project.repoFolder.trim()) {
    const folder = project.repoFolder.trim();
    return folder.includes("__") ? folder.split("__").pop() : folder;
  }

  return project?.title || "projeto";
}

export function getProjectSlug(project) {
  const slug = slugifySegment(getSlugSource(project));
  return slug || "projeto";
}

export function getProjectRoute(project) {
  return `/projetos/${getProjectSlug(project)}`;
}

export function normalizePathname(pathname) {
  if (typeof pathname !== "string" || !pathname.trim()) {
    return "/";
  }

  const normalized = pathname.trim().replace(/\/+$/, "");
  return normalized || "/";
}

export function getProjectSlugFromPath(pathname) {
  const normalizedPathname = normalizePathname(pathname);
  const match = normalizedPathname.match(/^\/projetos\/([^/]+)$/);

  if (!match) {
    return null;
  }

  try {
    return decodeURIComponent(match[1]);
  } catch {
    return match[1];
  }
}

export function findProjectByPath(projects, pathname) {
  const slug = getProjectSlugFromPath(pathname);

  if (!slug) {
    return null;
  }

  return (
    (Array.isArray(projects) ? projects : []).find(
      (project) => getProjectSlug(project) === slug
    ) || null
  );
}

export function readSpaRedirectPath(locationLike) {
  const search = locationLike?.search;

  if (typeof search !== "string" || !search) {
    return null;
  }

  const params = new URLSearchParams(search);
  const encodedPath = params.get("p");

  if (!encodedPath) {
    return null;
  }

  try {
    const decodedPath = decodeURIComponent(encodedPath);
    return decodedPath.startsWith("/") ? decodedPath : "/";
  } catch {
    return "/";
  }
}

export function hasOwnProjectSite(project) {
  return Boolean(
    typeof project?.links?.site === "string" &&
      project.links.site.trim() &&
      project.links.site.trim() !== "#"
  );
}

export function getPrimaryProjectUrl(project) {
  return hasOwnProjectSite(project) ? project.links.site.trim() : getProjectRoute(project);
}

export function getPrimaryProjectLabel(project) {
  return hasOwnProjectSite(project) ? "Ver Site Online" : "Ver Página do Projeto";
}

export function isExternalUrl(url) {
  return /^(https?:|mailto:|tel:)/i.test(String(url || ""));
}
