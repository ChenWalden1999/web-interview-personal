function myNew(fn, ...args){
  const newObj = Object.create(fn.prototype);  // 基于fn的原型创建一个新的对象
  const result = fn.apply(newObj, args);  // 将被构造调用的函数的this指向新对象
  return typeof result === 'object' ? result : newObj;  // 如果执行结果有返回值并且是一个对象, 返回执行的结果, 否则, 返回新创建的对象
};