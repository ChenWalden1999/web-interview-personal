// join()方法用于把数组中的所有元素转换一个字符串，元素是通过指定的分隔符进行分隔的,默认使用逗号作为分隔符。返回改变后的字符串，不改变原数组。
let arr1 = [8, 2, 3, 5, 7];
console.log("-----join()-----");
console.log(arr1.join("|"));  // 8|2|3|5|7
console.log(arr1);  // [ 8, 2, 3, 5, 7 ]

// push()方法从数组末尾向数组添加元素，可以添加一个或多个元素。返回添加后的长度，改变原数组。
// pop()方法用于删除数组的最后一个元素。返回删除的元素，改变原数组。
let arr2 = [8, 2, 3, 5, 7];
console.log("-----push(), pop()-----");
console.log(arr2.push(1)); // 6
console.log(arr2);  // [ 8, 2, 3, 5, 7, 1 ]
console.log(arr2.pop());  // 1
console.log(arr2);  // [ 8, 2, 3, 5, 7 ]

// shift()方法用于删除数组的第一个元素。返回删除的元素，改变原数组。
// unshift()方法从数组开头向数组添加元素，可以添加一个或多个元素。返回添加后的长度，改变原数组。
let arr3 = [8, 2, 3, 5, 7];
console.log("-----shift(), unshift()-----");
console.log(arr3.shift());  // 8
console.log(arr3);  // [ 2, 3, 5, 7 ]
console.log(arr3.unshift(9,2));  // 6
console.log(arr3);  // [ 9, 2, 2, 3, 5, 7 ]

// sort()方法可以接收一个比较函数作为参数，用于对数组进行排序。返回改变后的数组，改变原数组。
// 比较函数接收两个参数，如果第一个参数应该位于第二个之前则返回一个负数，如果两个参数相等则返回0，如果第一个参数应该位于第二个之后则返回一个正数。
// 排序顺序可以是字母或数字，并按升序或降序排序。
let arr4 = [8, 2, 3, 5, 7];
console.log("-----sort()-----");
console.log(arr4.sort((val1, val2) => {
    if (val1 < val2) {
        return 1;
    } else if (val1 > val2) {
        return -1;
    } else {
        return 0;
    }
}));  // [ 8, 7, 5, 3, 2 ]
console.log(arr4);  // [ 8, 7, 5, 3, 2 ]

// reverse()方法用于颠倒数组中元素的顺序。返回改变后的数组，改变原数组。
let arr5 = [8, 2, 3, 5, 7];
console.log("-----reverse()-----");
console.log(arr5.reverse());  // [ 7, 5, 3, 2, 8 ]
console.log(arr5);  // [ 7, 5, 3, 2, 8 ]

// concat()方法用于连接两个或多个数组。返回连接后的新数组，不改变原数组。
let arr6 = [8, 2, 3, 5, 7];
let arr7 = [9, 5, 6];
console.log("-----concat()-----");
console.log(arr6.concat(arr7));  // [8, 2, 3, 5, 7, 9, 5, 6]

// slice()方法可以接受一或两个参数，即要返回项的起始和结束位置，用于的数组进行切割。返回改变后的数组，不改变原数组。
// 在只有一个参数的情况下，该方法返回从该参数指定位置开始到当前数组末尾的所有项。
// 如果有两个参数，该方法返回起始和结束位置之间的项，但不包括结束位置的项。
// 当出现负数时，将负数加上数组长度的值来替换该位置的数。
let arr8 = [8, 2, 3, 5, 7];
console.log("-----slice()-----");
console.log(arr8.slice(2));  // [ 3, 5, 7 ]
console.log(arr8.slice(2, 4));  // [ 3, 5 ]
console.log(arr8.slice(-2, -1));  // [ 5 ]
console.log(arr8);  // [ 8, 2, 3, 5, 7 ]

// splice()方法有很多种用法，可以实现删除、插入和替换。返回删除元素的数组，改变原数组。
// 可以删除任意数量的项，只需指定2个参数：要删除的第一项的位置和要删除的项数。例如，splice(0,2)会删除数组中的前两项。
console.log("-----splice()-----");
let arr9 = [8, 2, 3, 5, 7];  // [ 8, 2 ]
console.log(arr9.splice(0, 2));  // [ 3, 5, 7 ]
console.log(arr9);
// 可以向指定位置插入任意数量的项，只需提供3个参数：起始位置、0（要删除的项数）和要插入的项。
// 例如，splice(0,0,4,6)会从当前数组的位置0开始插入4和6。
console.log(arr9.splice(0, 0, 4, 6));  // []
console.log(arr9);  // [ 4, 6, 3, 5, 7 ]
// 可以向指定位置插入任意数量的项，且同时删除任意数量的项，只需指定3个参数：起始位置、要删除的项数和要插入的任意数量的项。插入的项数不必与删除的项数相等。
// 例如，splice(2,1,4,6)会删除当前数组位置2的项，然后再从位置2开始插入4和6。
console.log(arr9.splice(2, 1, 4, 6));  // [ 3 ]
console.log(arr9);  // [ 4, 6, 4, 6, 5, 7 ]

// indexof()方法和lastIndexof()方法用于查找元素在数组中的索引位置。indexOf()从数组的开头（位置 0）开始向后查找，lastIndexOf从数组的末尾开始向前查找。（遇到的第一个）
// 接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。
let arr10 = [8, 2, 3, 8, 7];
console.log("-----indexOf(), lastIndexOf()-----");
console.log(arr10.indexOf(8));  // 0
console.log(arr10.lastIndexOf(8));  // 3

// map()方法按照原始数组元素顺序依次处理元素。返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值，不改变原数组。
let arr12 = [8, 2, 3, 8, 7];
console.log("-----map()-----");
console.log(arr12.map((item) => {
    return item += "ok";
})); // [ '8ok', '2ok', '3ok', '8ok', '7ok' ]

// filter()方法对数组中的每一项元素进行过滤。返回满足过滤条件组成的数组，不改变原数组。
let arr13 = [8, 2, 3, 8, 7];
console.log("-----filter()-----");
console.log(arr13.filter((item, index) => {
    return item == index + 1; 
}));  // [ 2, 3 ]

// fill()方法能使用特定值填充数组中的一个或多个元素。返回填充后的数组，改变原数组。
// 当只是用一个参数时，该方法会用该参数的值填充整个数组。
// 如果不想改变数组中的所有元素，而只是想改变其中一部分，那么可以使用可选的起始位置参数与结束位置参数（第二个和第三个参数）（不包括结束位置的那个元素）
let arr14 = [8, 2, 3, 8, 7];
console.log("-----fill()-----");
console.log(arr14.fill(1));  // [ 1, 1, 1, 1, 1 ]
console.log(arr14.fill(2, 2));  // [ 1, 1, 2, 2, 2 ]
console.log(arr14.fill(3, 2, 3));  // [ 1, 1, 3, 2, 2 ]

// every()方法判断数组中每一项都是否满足条件，只有所有项都满足条件，才会返回true。
// some()方法判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回true。
let arr15 = [8, 2, 3, 8, 7];
console.log("-----every(), some()-----");
console.log(arr15.every((item) => {
    return item > 5;
}));  // false
console.log(arr15.some((item) => {
  return item > 5;
}));  // true

// includes()方法用来判断一个数组是否包含一个指定的值，如果是返回true，否则false。
// 参数有两个，其中第一个是（必填）需要查找的元素值，第二个是（可选）开始查找元素的位置
let arr17 = [8, 2, 3, 8, 7];
console.log("-----includes()-----");
console.log(arr17.includes(8, 2));  // true

// 这两个方法都会实现迭代数组的所有项(即累加器)，然后构建一个最终返回的值。
// reduce()方法从数组的第一项开始，逐个遍历到最后。
// reduceRight()则从数组的最后一项开始，向前遍历到第一项。
// 函数中 4 个参数：前一个值、当前值、项的索引和数组对象, 除函数外还有数组初始价值参数。
let arr18 = [8, 2, 3, 8, 7];
console.log("-----reduce(), reduceRight()-----");
console.log(arr18.reduce((pre, cur, index, array) => {
    return pre + cur;
}, 10));  // 38
console.log(arr18.reduceRight((pre, cur, index, array) => {
  return pre + cur;
}, 10));  // 38

// find()方法用于查找匹配的值，findIndex()用于查找匹配位置的索引。
// find()与 findIndex()方法均接受两个参数：一个回调函数，一个可选值用于指定回调函数内部的this。
// 该回调函数可接受三个参数：数组的某个元素，该元素对应的索引位置，以及该数组本身。
// 该回调函数应当在给定的元素满足你定义的条件时返回true，而find()和findIndex()方法均会在回调函数第一次返回true时停止查找。
let arr19 = [8, 2, 3, 8, 7];
console.log("-----find(), findIndex()-----");
console.log(arr19.find((item, index, array) => {
    return item > 7;
}));  // 8
console.log(arr19.findIndex((item, index, array) => {
    return item > 7;
}));  // 0


// flat()方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。该方法返回一个新数组，不改变原数组。
// 参数指定要提取嵌套数组的结构深度，默认值为 1。
// 使用 Infinity，可展开任意深度的嵌套数组。
let arr21 = [1, 6, 8, [9, 5, 5, [6, 3]], 2];
console.log("-----flat(), flatMap()-----")
console.log(arr21.flat(1)); // [ 1, 6, 8, 9, 5, 5, [ 6, 3 ], 2 ]
console.log(arr21.flat(Infinity));
// flatMap()方法对原数组的每个成员执行一个函数，相当于执行Array.prototype.map(),然后对返回值组成的数组执行flat()方法。该方法返回一个新数组，不改变原数组。
let arr22 = [2, 3, 4]; 
// 相当于 [[2, 4], [3, 6], [4, 8]].flat()
console.log(arr22.flatMap((x) => [x, x * 2])); // // [1, 6, 8, 9, 5, 5, 6, 3, 2]

// entries()，keys()和values()用于遍历数组。它们都返回一个遍历器对象，可以用for...of循环进行遍历。区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。
let arr23 = [8, 2, 3, 8, 7];
console.log("-----entries(), keys(), values()-----")
for (let index of arr23.keys()) {  
    console.log(index);  
}  
console.log("---")
for (let elem of arr23.values()) {  
    console.log(elem);  
}  
console.log("---")
for (let [index, elem] of arr23.entries()) {  
    console.log(index, elem);  
}  
// 如果不使用for...of循环，可以手动调用遍历器对象的next方法，进行遍历。

console.log("---")
let entries = arr23.entries();  
console.l
console.log(entries.next().value);  
console.log(entries.next().value);  
console.log(entries.next().value); 
