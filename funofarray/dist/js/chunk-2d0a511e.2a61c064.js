(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a511e"],{"08aa":function(r,e,n){"use strict";n.r(e);var t=function(){var r=this,e=r.$createElement,n=r._self._c||e;return n("div",{attrs:{id:"detail"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-md-8 my-3"},[n("h3",[r._v(r._s(r.funName))]),n("h5",{staticClass:"my-3 border-bottom pb-2"},[r._v("定义和用法")]),n("div",{staticClass:"pb-3",domProps:{innerHTML:r._s(r.detail.con1)}}),n("h5",{staticClass:"my-3 border-bottom pb-2"},[r._v("语法")]),n("div",{staticClass:"pb-3"},[n("code",[r._v(r._s(r.detail.con2))])]),n("h5",{staticClass:"my-3 border-bottom pb-2"},[r._v("JavaScript 版本")]),n("div",{staticClass:"pb-3"},[r._v(r._s(r.detail.version))]),n("div",{staticClass:"text-center"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return r.$router.back()}}},[r._v("返回")])])])])])])},p=[],a={name:"Detail",data:function(){return{funName:""}},created:function(){this.funName=this.$route.params.funname},computed:{detail:function(){var r=this;switch(r.funName){case"concat":return{con1:"<p>concat() 方法用于连接两个或多个数组。</p><p>该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。</p>",con2:"array1.concat(array2,array3,...,arrayX)",version:"1.2"};case"copyWithin":return{con1:"<p>copyWithin() 方法用于从数组的指定位置拷贝元素到数组的另一个指定位置中。</p>",con2:"array.copyWithin(target, start, end)",version:"ECMAScript 6"};case"entries":return{con1:"<p>entries() 方法返回一个数组的迭代对象，该对象包含数组的键值对 (key/value)。</p><p>迭代对象中数组的索引值作为 key， 数组元素作为 value。</p>",con2:"array.entries()",version:"ECMAScript 6"};case"every":return{con1:"<p>every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。<p>every() 方法使用指定函数检测数组中的所有元素：<p>    如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。<p>    如果所有元素都满足条件，则返回 true。<p>注意： every() 不会对空数组进行检测。<p>注意： every() 不会改变原始数组。",con2:"array.every(function(currentValue,index,arr), thisValue)",version:"1.6"};case"fill":return{con1:"<p>fill() 方法用于将一个固定值替换数组的元素。</p>",con2:"array.fill(value, start, end)",version:"ECMAScript 6"};case"filter":return{con1:"<p>filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。</p><p>注意： filter() 不会对空数组进行检测。</p><p>注意： filter() 不会改变原始数组。</p>",con2:"array.filter(function(currentValue,index,arr), thisValue)",version:"1.6"};case"find":return{con1:"<p>find() 方法返回通过测试（函数内判断）的数组的第一个元素的值。</p><p>find() 方法为数组中的每个元素都调用一次函数执行：</p><p>当数组中的元素在测试条件时返回 true 时, find() 返回符合条件的元素，之后的值不会再调用执行函数。</p><p>如果没有符合条件的元素返回 undefined</p><p>注意: find() 对于空数组，函数是不会执行的。</p><p>注意：find() 并没有改变数组的原始值。</p>",con2:"array.find(function(currentValue, index, arr),thisValue)",version:"ECMAScript 6"};case"findIndex":return{con1:"<p>findIndex() 方法返回传入一个测试条件（函数）符合条件的数组第一个元素位置。</p><p>findIndex() 方法为数组中的每个元素都调用一次函数执行：</p><p>当数组中的元素在测试条件时返回 true 时, findIndex() 返回符合条件的元素的索引位置，之后的值不会再调用执行函数。</p><p>如果没有符合条件的元素返回 -1</p><p>注意: findIndex() 对于空数组，函数是不会执行的。</p><p>注意: findIndex() 并没有改变数组的原始值。</p>",con2:"array.findIndex(function(currentValue, index, arr), thisValue)",version:"ECMAScript 6"};case"forEach":return{con1:"<p>forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。</p><p>注意: forEach() 对于空数组是不会执行回调函数的。</p>",con2:"array.forEach(function(currentValue, index, arr), thisValue)",version:"ECMAScript 3"};case"from":return{con1:"<p>from() 方法用于通过拥有 length 属性的对象或可迭代的对象来返回一个数组。</p><p>如果对象是数组返回 true，否则返回 false。</p>",con2:"Array.from(object, mapFunction, thisValue)",version:"ECMAScript 6"};case"includes":return{con1:"<p>includes() 方法用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false。</p>",con2:"arr.includes(searchElement) / arr.includes(searchElement, fromIndex)",version:"ECMAScript 6"};case"indexOf":return{con1:"<p>indexOf() 方法可返回数组中某个指定的元素位置。</p><p>该方法将从头到尾地检索数组，看它是否含有对应的元素。开始检索的位置在数组 start 处或数组的开头（没有指定 start 参数时）。如果找到一个 item，则返回 item 的第一次出现的位置。开始位置的索引为 0。</p><p>如果在数组中没找到指定元素则返回 -1。</p><p>提示如果你想查找字符串最后出现的位置，请使用 lastIndexOf() 方法。</p>",con2:"array.indexOf(item,start)",version:"1.6"};case"isArray":return{con1:"<p>isArray() 方法用于判断一个对象是否为数组。</p><p>如果对象是数组返回 true，否则返回 false。</p>",con2:"Array.isArray(obj)",version:"ECMAScript 5"};case"join":return{con1:"<p>join() 方法用于把数组中的所有元素转换一个字符串。</p><p>元素是通过指定的分隔符进行分隔的。</p>",con2:"array.join(separator)",version:"1.1"};case"keys":return{con1:"<p>keys() 方法用于从数组创建一个包含数组键的可迭代对象。</p><p>如果对象是数组返回 true，否则返回 false。</p>",con2:"array.keys()",version:"ECMAScript 6"};case"lastIndexOf":return{con1:"<p>lastIndexOf() 方法可返回一个指定的元素在数组中最后出现的位置，从该字符串的后面向前查找。</p><p>如果要检索的元素没有出现，则该方法返回 -1。</p><p>该方法将从尾到头地检索数组中指定元素 item。开始检索的位置在数组的 start 处或数组的结尾（没有指定 start 参数时）。如果找到一个 item，则返回 item 从尾向前检索第一个次出现在数组的位置。数组的索引开始位置是从 0 开始的。</p><p>如果在数组中没找到指定元素则返回 -1。</p><p>提示： 如果你想查找数组首次出现的位置，请使用 indexOf() 方法。</p>",con2:"array.lastIndexOf(item,start)",version:"1.6"};case"map":return{con1:"<p>map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。</p><p>map() 方法按照原始数组元素顺序依次处理元素。</p><p>注意： map() 不会对空数组进行检测。</p><p>注意： map() 不会改变原始数组。</p>",con2:"array.map(function(currentValue,index,arr), thisValue)",version:"1.6"};case"pop":return{con1:"<p>pop() 方法用于删除数组的最后一个元素并返回删除的元素。</p><p>注意：此方法改变数组的长度！</p><p>提示： 移除数组第一个元素，请使用 shift() 方法。</p>",con2:"array.pop()",version:"1.2"};case"push":return{con1:"<p>push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。</p><p>注意： 新元素将添加在数组的末尾。</p><p>注意： 此方法改变数组的长度。</p><p>提示： 在数组起始位置添加元素请使用 unshift() 方法。</p>",con2:"array.push(item1, item2, ..., itemX)",version:"1.2"};case"reduce":return{con1:"<p>reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。</p><p>educe() 可以作为一个高阶函数，用于函数的 compose。</p><p>注意: reduce() 对于空数组是不会执行回调函数的。</p>",con2:"array.reduce(function(total, currentValue, currentIndex, arr), initialValue)",version:"ECMAScript 3"};case"reduceRight":return{con1:"<p>reduceRight() 方法的功能和 reduce() 功能是一样的，不同的是 reduceRight() 从数组的末尾向前将数组中的数组项做累加。</p><p>注意: reduce() 对于空数组是不会执行回调函数的。</p>",con2:"array.reduceRight(function(total, currentValue, currentIndex, arr), initialValue)",version:"ECMAScript 3"};case"reverse":return{con1:"<p>reverse() 方法用于颠倒数组中元素的顺序。</p>",con2:"array.reverse()",version:"1.1"};case"shift":return{con1:"<p>shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。</p><p>注意： 此方法改变数组的长度！</p><p>提示: 移除数组末尾的元素可以使用 pop() 方法。</p>",con2:"array.shift()",version:"1.2"};case"slice":return{con1:"<p>slice() 方法可从已有的数组中返回选定的元素。</p><p>slice()方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。</p><p>注意： slice() 方法不会改变原始数组。</p>",con2:"array.slice(start, end)",version:"1.2"};case"some":return{con1:"<p>some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。</p><p>some() 方法会依次执行数组的每个元素：</p><p>如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。</p><p>如果没有满足条件的元素，则返回false。</p><p>注意： some() 不会对空数组进行检测。</p><p>注意： some() 不会改变原始数组。</p>",con2:"array.some(function(currentValue,index,arr),thisValue)",version:"1.6"};case"sort":return{con1:'<p>sort() 方法用于对数组的元素进行排序。</p><p>排序顺序可以是字母或数字，并按升序或降序。</p><p>默认排序顺序为按字母升序。</p><p>注意：当数字是按字母顺序排列时"40"将排在"5"前面。</p><p>使用数字排序，你必须通过一个函数作为参数来调用。</p><p>函数指定数字是按照升序还是降序排列。</p><p>这些说起来可能很难理解，你可以通过本页底部实例进一步了解它。</p><p>注意： 这种方法会改变原始数组！。</p>',con2:"array.sort(sortfunction)",version:"1.1"};case"splice":return{con1:"<p>splice() 方法用于添加或删除数组中的元素。</p><p>注意： 这种方法会改变原始数组。</p>",con2:"array.splice(index,howmany,item1,.....,itemX)",version:"1.2"};case"toString":return{con1:"<p>toString() 方法可把数组转换为字符串，并返回结果。</p><p>注意： 数组中的元素之间用逗号分隔。</p>",con2:"array.toString()",version:"1.1"};case"unshift":return{con1:"<p>unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。</p><p>注意： 该方法将改变数组的数目。</p><p>提示: 将新项添加到数组末尾，请使用 push() 方法。</p>",con2:"array.unshift(item1,item2, ..., itemX)",version:"1.2"};case"valueOf":return{con1:"<p>valueOf() 方法返回 Array 对象的原始值。</p><p>该原始值由 Array 对象派生的所有对象继承。</p><p>valueOf() 方法通常由 JavaScript 在后台自动调用，并不显式地出现在代码中。</p><p>注意： valueOf() 方法不会改变原数组。</p>",con2:"array.valueOf()",version:"1.2"}}}}},i=a,c=n("0c7c"),s=Object(c["a"])(i,t,p,!1,null,null,null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d0a511e.2a61c064.js.map