function JSONDeepClone(obj) {
  try {
    return JSON.parse(JSON.stringify(obj));
  } catch (error) {
    console.log(error);
  }
}

const test = {
 name:{
  fun:function(){
    console.log('this', this);
  }
 }
}

function FDeepClone (data) {
  if(data instanceof Object) {
    let  dist;
    if(data instanceof Array) {
      dist = []
    }else if(data instanceof Function) {
      dist = function() {
        return data.call({}, ...arguments)
      }
    }else if(data instanceof Date) {
      dist = new Date(data);
    }else if (data instanceof RegExp) {
      dist = new RegExp(data.source, data.flags)
    }else {
      dist = {}
    }
    const list = Reflect.ownKeys(data)
    for (let key in data){
      dist[key] = FDeepClone(data[key])
    }
    return dist
  }else {
    return data;
  }
}

class DeepClone {
  clone(source) {
  if (source instanceof Object) {
    let dist
    if (source instanceof Array) {
      dist = []
    } else if (source instanceof Function) {
      dist = function() {
        console.log('this',this);
        return source.call(this, ...arguments)
      }
    } else if (source instanceof Date) {
      dist = new Date(source)
    } else if (source instanceof RegExp) {
        dist = new RegExp(source.source, source.flags)
    } else {
      dist = {}
    }
    for(let key in source) {
      dist[key] = this.clone(source[key])
    }
    return dist
    } else {
      return source
    }
  }
}

console.log(JSONDeepClone(test))//不安全的拷贝，拷贝不准确，会丢失数据
console.log(FDeepClone(test))//函数深拷贝
console.log(new DeepClone().clone(test));//class 类方法

const deep = FDeepClone(test);
deep.name.fun = 'change'
console.log(test, deep);