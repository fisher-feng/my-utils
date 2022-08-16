/**
 * 使用：
 * TimeFormat() // 默认返回当前时间 yyyy-mm-dd
 * TimeFormat('yyyy-mm-dd hh:ii') // 默认返回当前时间 自定义格式
 * TimeFormat('yyyy/mm/dd hh:ii:ss', 1554954127000) // 返回传入时间戳的格式化时间
 *
 * 说明：紧支持毫秒级时间戳，传统秒级 Unix 时间戳需要乘以 1000 转换为毫秒
 */
 const TimeFormat = function(type, date) {
    var format = type ? type : "yyyy-mm-dd";
    var date = date ? new Date(date) : new Date();
    var o = {
      "m+": date.getMonth() + 1, //月份
      "d+": date.getDate(), //日
      "h+": date.getHours(), //小时
      "i+": date.getMinutes(), //分
      "s+": date.getSeconds() //秒
    };
    if (/(y+)/.test(format)) {
      format = format.replace(
        RegExp.$1,
        (date.getFullYear() + "").substr(4 - RegExp.$1.length)
      );
    }
    for (var k in o) {
      if (new RegExp("(" + k + ")").test(format)) {
        format = format.replace(
          RegExp.$1,
          RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
        );
      }
    }
    return format;
  };