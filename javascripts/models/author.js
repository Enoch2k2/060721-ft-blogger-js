class Author {
  static all = []

  constructor(name) {
    this.name = name;
    Author.all.push(this);
  }
}