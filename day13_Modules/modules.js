export function add(a, b) {
  return a + b;
}

export const person = {
  age: 12,
  greeting: function () {
    return `he's ${this.age} yrs old`;
  },
};
