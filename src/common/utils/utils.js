export function debounce(func, delay=100) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

// 时间戳格式转化
export function formatDate(date, fmt) {
  // 1. 获取年份
  if (/(y+)/.test(fmt)) {
    // / regexp / 斜杆为描写正则的方式，中间为正则表达式
    // RegExp.$1 为上述第一个匹配到的字符 根据y的数量对年份（如2019）从后进行截取(substr)
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }

  // 2. 获取 月日时分秒
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),

  };
  // 遍历
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt
  
}

// 补齐只有一位时前面的0 就算是两位也会原字符返回
function padLeftZero (str) {
  return ('00' + str).substr(str.length)
}