const deepClone = (obj) => {
  console.log(obj)
  // 判断被传入的参数是否为对象
  // 若不是则直接将原值返回
  if (typeof obj !== 'object' || obj === null) {
    return obj; 
  }

  let result;
  // 判断被传入的参数是否为数组
  // 如是则将结果定义为数组
  // 反之则定义为对象
  if (obj instanceof Array) {
    result = [];
  } else {
    result = {}
  }

  // 通过key对对象进行遍历
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key]);
    }
  }

  return result;
};