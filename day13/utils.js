// export a function
export function getElement(selector) {
  return document.querySelector(selector);
}

function changeColor(el, color) {
  let element = document.querySelector(el);
  element.style.color = color;
}

function capitalize(text) {
  return text.toUpperCase();
}

// export

export { changeColor, capitalize };
