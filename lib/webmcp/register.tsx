'use client';

/**
 * Registers this site's WebMCP tools with a browser agent, when the browser supports it.
 *
 * Chrome 149+ / Edge 150+ expose `document.modelContext` behind the WebMCP origin trial.
 * Everywhere else this component renders nothing, imports nothing and downloads nothing —
 * `./tools` (and the project/post data it reads) is only fetched after the feature check
 * passes, so a visitor on a browser without WebMCP pays zero extra bytes.
 *
 * NOTE: the API moved from `navigator.modelContext` to `document.modelContext`. Playwright's
 * docs and most blog posts still show `navigator`; using it silently does nothing.
 */
import { useEffect } from 'react';

type RegisterOptions = { signal?: AbortSignal };

type ModelContext = {
  registerTool: (tool: Record<string, unknown>, options?: RegisterOptions) => Promise<unknown>;
};

export default function WebMcpTools() {
  useEffect(() => {
    const mc = (document as unknown as { modelContext?: ModelContext }).modelContext;
    if (!mc || typeof mc.registerTool !== 'function') return;

    const ctrl = new AbortController();
    let disposed = false;

    import('./tools')
      .then(async ({ buildTools }) => {
        if (disposed) return;
        for (const tool of buildTools()) {
          await mc.registerTool(tool, { signal: ctrl.signal });
        }
      })
      .catch(() => {
        /* A failed tool registration must never break the page for a human. */
      });

    return () => {
      disposed = true;
      ctrl.abort();
    };
  }, []);

  return null;
}
