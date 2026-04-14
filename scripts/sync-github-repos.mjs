#!/usr/bin/env node

import { runGitHubImport } from "../src/utils/github-import/index.js";
import {
  GitHubImportConfigError,
  GitHubImportError,
} from "../src/utils/github-import/errors.js";

function formatCliError(error) {
  if (error instanceof GitHubImportConfigError) {
    return error.message;
  }

  if (error instanceof GitHubImportError) {
    const statusPart =
      Number.isInteger(error.status) && error.status > 0
        ? ` (status ${error.status})`
        : "";
    return `${error.message}${statusPart}`;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Erro desconhecido ao executar a sincronização.";
}

async function main() {
  try {
    const result = await runGitHubImport({
      env: process.env,
      cwd: process.cwd(),
      logger: console,
    });

    console.log(
      `[github-import] Sincronização finalizada: ${result.totals.active} ativo(s), ${result.totals.stale} stale, ${result.totals.errors} erro(s).`
    );
  } catch (error) {
    console.error(`[github-import] Falha: ${formatCliError(error)}`);
    process.exitCode = 1;
  }
}

await main();
