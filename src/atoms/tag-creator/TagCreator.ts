export default class TagCreator {
  constructor(tagName: string) {
    return TagCreator.#createTag(tagName);
  }

  static #createTag(tagName: string): HTMLElement {
    return document.createElement(tagName, { is: tagName });
  }
}
