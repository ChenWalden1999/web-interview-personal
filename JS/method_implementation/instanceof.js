const myInstanceof = (left, right) => {
  let proto = Object.getPrototypeOf(left);  // 获取对象的原型
  let prototype = right.prototype;  // 获取构造函数的prototype对象  
 
  // 判断构造函数的prototype对象是否在对象的原型链上
  while (true) {
    if (!proto) {
      return false;
    }
    if (proto === prototype) 
    {
      return true;
    }
    proto = Object.getPrototypeOf(proto);  // 如果没有找到，就继续从其原型上找，通过Object.getPrototypeOf方法用来获取指定对象的原型
  }
};