function nouveau(Constructor, ...args) {
  if (typeof Reflect !== 'undefined') {
    return Reflect.construct(Constructor, args)
  }

  const instance = Object.create(Constructor.prototype);
  const result = Constructor.apply(instance, args);

  return result === Object(result) ? result : instance;
}
