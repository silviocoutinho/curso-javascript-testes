export default class Cart {
  items = [];

  add(item) {
    this.items.push(item);
  }

  getTotal() {
    return 0;
  }
}
