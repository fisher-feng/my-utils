console.log('1');

setTimeout(function() {
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    })
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
})
process.nextTick(function() {
    console.log('6');
})
new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})

setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
})

// 执行结果为1,7,6,8,2,4,3,5,9,11,10,12

  console.log('start')
  setTimeout(() => {
    console.log('timer1')
    Promise.resolve().then(() => {
      console.log('promise1')
    })
  }, 0)
  setTimeout(() => {
    console.log('timer2')
    Promise.resolve().then(() => {
      console.log('promise2')
    })
  }, 0)
  setTimeout(() => {
    console.log('timer3')
    Promise.resolve().then(() => {
      console.log('promise3')
    })
  }, 0)
  new Promise(function(resolve) {
    console.log('promise4');
    resolve();
  }).then(function() {
    console.log('promise5')
  })
  console.log('end')

/* 
  主线程 start promise4 end —>微任务：promise5
  宏任务：
    1：timer1 —> 微任务：promise1
    2：timer2 —> 微任务：pormise2
    3：timer3 —> 微任务：pormise3
*/