/**
 * 
 * @param {string} selectors 选择器名称
 * @param {string|string[]} startAnimationClass 起始状态类名
 * @param {string|string[]} endAnimationClass 结束状态类名
 * @param {boolean} unobserve observe后是否取消observe, 默认为 true
 * @param {object} options 同 IntersectionObserver 构造器的 options 参数
 * @returns {object} 返回一个 IntersectionObserver 实例
 */

export function addAnimation(selectors, startAnimationClass, endAnimationClass, options, unobserve = true) {
  const isOptions = 
    Object.prototype.toString.call(options) === '[object Object]' ||
    Object.prototype.toString.call(options) === '[object Undefined]' ||
    Object.prototype.toString.call(options) === '[object Null]'
    
  if (!isOptions) {
    console.error('addAnimation function: options 参数类型必须是对象!')
    options = {}
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(...[endAnimationClass].flat())
        if (unobserve) {
          io.unobserve(entry.target)
        }
      } else {
        // 当元素移出视口时, 将元素的类重置为初始时的状态, 即 移除结束状态的类名
        entry.target.classList.remove(...[endAnimationClass].flat())
      }
    })
  }, options)
  const elements = document.querySelectorAll(selectors)
  if (!elements.length) {
    console.error('addAnimation function: 获取不到目标元素, 请检查所传的 [选择器名称] 是否正确或 [异步问题]')
  }
  elements.forEach(el => {
    el.classList.add(...[startAnimationClass].flat())
    io.observe(el)
  })
  return io
}