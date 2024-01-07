function createDom(root) {
 if (typeof root === 'string') {
    return document.createTextNode(root);
  }

  const { type, children, attributes } = root;
  const element = document.createElement(type);

  if (attributes) {
    for (const [key, value] of Object.entries(attributes)) {
      element.setAttribute(key, value);
    }
  }

  if (children) {
    for (const child of children) {
      const childElement = createDom(child);
      element.appendChild(childElement);
    }
  }

  return element;
}

module.exports=createDom
