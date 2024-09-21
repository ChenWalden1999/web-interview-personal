// 函数防抖是指在事件被触发n秒后再执行回调，如果在这n秒内事件又被触发，则重新计时。
// 这可以使用在一些点击请求的事件上，避免因为用户的多次点击向后端发送多次请求。
const debounce = (fn, interval) => {
  let timer = null;  // 通过闭包缓存一个定时器id 

  return (...args) => {
    // 判断是否设定定时器
    // 如果已经设定过定时器就清空上一次的定时器 
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    // 开始设定一个新的定时器，定时器结束后执行传入的函数fn 
    timer = setTimeout(() => {
      fn(...args);
    }, interval);
  };
};

// 函数节流是指规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行。
// 节流可以使用在scroll函数的事件监听上，通过事件节流来降低事件调用的频率。
const throttle = (fn, interval) => {
  let timer = null;

  return (...args) => {
    // 判断是否设定定时器
    // 如果已经设定过定时器就返回false
    if (timer) {
      return false;
    }
    console.log(args)

    // 开始设定一个新的定时器，定时器结束后执行传入的函数fn 
    timer = setTimeout(() => {
      fn(...args);
      clearTimeout(timer);
      timer = null
    }, interval);
  };
};