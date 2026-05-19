import { defineConfig } from "astro/config";

function stripDuplicateFrontmatter() {
  return (tree) => {
    const children = tree.children ?? [];
    if (children[0]?.type !== "thematicBreak") return;

    const end = children.findIndex((node, index) => index > 0 && node.type === "thematicBreak");
    if (end > 0) {
      children.splice(0, end + 1);
    }
  };
}

export default defineConfig({
  site: "https://metagamer-github.pages.dev",
  output: "static",
  markdown: {
    remarkPlugins: [stripDuplicateFrontmatter]
  }
});
