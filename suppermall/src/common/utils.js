// 性能优化
// 防抖函数，
//利用时闭包和时间差，结合使用作出的一个网页性能优化技巧
// 每图片加载完一秒后重新计算，但是后面张图片都是在一秒之内执行加载的，
// 而且每次执行都会先把time清空，所以一直不会执行重新计算，
// 等到最后一张图片加载完成，后面没有再次加载，不会清空time,时间到了自然会执行，所以只会重新计算一次
export function debounce(fun, delay){
  let time = null
  return function(){
    clearTimeout(time)
    time = setTimeout(()=>{
      fun.apply(this)
    },delay)
  }
}
