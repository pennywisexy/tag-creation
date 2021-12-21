export default class TagCreator {
  static tagOldPrototype: any;

  constructor(tagName: string) {
    return TagCreator.#createTag(tagName);
  }

  static #createTag(tagName: string): TagCreator {
    const tag: any = document.createElement(tagName, { is: tagName });
    this.tagOldPrototype = tag.__proto__;

    tag.__proto__ = TagCreator.prototype;

    return tag;
  }
}
