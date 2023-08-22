/**
 * 
 * @param {string} selectors 选择器名称
 * @param {string|string[]} startAnimationClass 起始状态类名
 * @param {string|string[]} endAnimationClass 结束状态类名
 * @param {boolean} unobserve observe后是否取消observe, 默认为 true
 * @returns {object} 返回一个 IntersectionObserver 实例
 */
export function addAnimation(selectors, startAnimationClass, endAnimationClass, unobserve = true) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add(...[endAnimationClass].flat())
        if (unobserve) {
          io.unobserve(entry.target)
        }
      }
    })
  })
  const elements = document.querySelectorAll(selectors)
  elements.forEach(el => {
    el.classList.add(...[startAnimationClass].flat())
    io.observe(el)
  })
  return io
}