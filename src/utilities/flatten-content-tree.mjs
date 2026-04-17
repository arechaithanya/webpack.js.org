export default (tree) => {
  const paths = [];

  const crawl = (node) => {
    if ("url" in node) {
      paths.push(node.url);
    }

    if ("children" in node) {
      for (const child of node.children) {
        crawl(child);
      }
    }
  };

  for (const child of tree.children) {
    crawl(child);
  }

  return paths;
};
