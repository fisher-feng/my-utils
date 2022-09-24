//节流函数的设计
function throttle (fun, delay = 500) {
  let running = false;
  return function() {
    if(running) {
      return
    }
    running = true;
    setTimeout(() => {
      fun.call({}, ...arguments);
      running = false;
    }, delay);
  }
}

const th =  throttle(function() {
  console.log('执行内容');
}, 500)

const delay = (fun, delay = 0) => {
  setTimeout(() => {
    fun()
  }, delay);
}

//只运行三次th
delay(th, 20);
delay(th, 40);
delay(th, 500);
delay(th, 800);
delay(th, 1001);
delay(th, 1003);
delay(th, 1503);


