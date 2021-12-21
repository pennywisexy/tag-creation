export default class TagCreator {
  constructor(tagName: string) {
    const tag: any = document.createElement(tagName, { is: tagName });
    tag.__proto__ = this;

    return tag;
  }
}
