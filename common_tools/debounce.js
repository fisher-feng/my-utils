//防抖函数的设计
function debounce (func, delay=500) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.call({}, ...arguments)
    }, delay);
  }
}

const de =  debounce(function() {
  console.log('执行内容');
}, 500)

const delay = (fun, delay = 0) => {
  setTimeout(() => {
    fun()
  }, delay);
}

console.log('delay < 500开始');
de();
de();
de();
de();
console.log('delay < 500结束');

console.log('delay > 500');
delay(de, 502);
delay(de, 1005);
delay(de, 3000);
delay(de, 4000);
console.log('delay > 500 结束');

