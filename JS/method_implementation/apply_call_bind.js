// 使用普通函数而非箭头函数，因为箭头函数没有this

Function.prototype.myApply = function(context, args) {
  // 判断被调用的对象是否为函数
  if (typeof this !== 'function') {
    throw new TypeError('not a function');
  }

  const key = Symbol('key');  // 生成唯一标识符key
  context[key] = this;  // this指向所被调用的函数
  const result = context[key](...args);  // 执行函数并保存结果
  delete context[key];  // 删除唯一标识符key
  return result;
};

Function.prototype.myCall = function(context, ...args) {
  // 判断被调用的对象是否为函数
  if (typeof this !== 'function') {
    throw new TypeError('not a function');
  }

  const key = Symbol('key');  // 生成唯一标识符key
  context[key] = this;  // this指向所被调用的函数
  const result = context[key](...args);  // 执行函数并保存结果
  delete context[key];  // 删除唯一标识符key
  return result;
};

Function.prototype.myBind = function(context, ...preArgs) {
  // 判断被调用的对象是否为函数
  if (typeof this !== 'function') {
    throw new TypeError('not a function');
  }

  const fn = this;  // 保存被调用的函数
  let boundFn = function(...args) {
    // 判断函数是否被new操作符进行构造调用
    // 如是，则直接new操作符构造调用被调用的函数
    if (this instanceof boundFn) {
      return new fn(...preArgs, ...args);
    } else {
      return fn.call(context, ...preArgs, ...args);
    }
  }
  // bind返回的新函数的prototype指向原函数的prototype
  boundFn.prototype = Object.create(fn.prototype);
  return boundFn;
};