## 用法示例
```javascript
import { addAnimation } from 'appear-add-animation'
// 需要注意的是 , 该方法要等 Dom 加载完成再调用 . 比如在 Vue 中 , 你应该写在 onMounted() 或者 nextTick() 等确定 dom 已经挂载完成的地方
addAnimation('#container', 'fade-in-up', 'exe-animation')
```
### css 示例代码
```css
.fade-in-up {
  /* 过渡属性设置, 比如 opacity 和 transform 这两个属性过渡效果设置 */
  transition-property: opacity, transform;
  transition-duration: 0.5s, 0.5s;
  transition-timing-function: ease-in, ease-in;

  opacity: 0;
  transform: translateY(10%);
}
.exe-animation {
  opacity: 1!important; /* opacity 从 0 到 1 */
  transform: translateY(0%)!important; /* 从 translateY(10%) 到 translateY(0%) */
}
```
## 说明

示例中, 当函数开始执行时, `.fade-in-up` 类名会添加到目标元素的 `class` 列表中, 然后, 当目标元素出现在视口中时, 会添加 `exe-animation` 类名到 `class` 列表中, 你可以在 `.fade-in-up` 和 `.exe-animation` 编写过渡动画属性
## 语法
```javascript
addAnimation(selectors, startAnimationClass, endAnimationClass, options)
```
## 参数
* `selectors` - 选择器名称
* `startAnimationClass` - 起始状态类名
* `endAnimationClass` - 结束状态类名
* `options ( 可选 )` - 一个可以用来配置 observer 实例的对象。如果options未指定，observer 实例默认使用文档视口作为 root，并且没有 margin，阈值为 0%（意味着即使一像素的改变都会触发回调函数）[参考链接](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver/IntersectionObserver) 。你可以指定以下配置：
  * `root` - 监听元素的祖先元素Element对象，其边界盒将被视作视口。目标在根的可见区域的的任何不可见部分都会被视为不可见。
  * `rootMargin` - 类似 margin , 可以有效的缩小或扩大根的判定范围 , 默认值为 `0px 0px 0px 0px` ( 单位是必须的 , 不能省略 ). 可以理解为 margin 越大 , 被监听的元素与视口触发 "相交" 的时机越早 , 因为 root 设置了 margin 扩大了自身的判定范围
  * `threshold` - 规定了一个监听目标与边界盒交叉区域的比例值 . 有效值在 0.0 到 1.0 之间 . 若指定值为 1.0，则意味着整个元素都在可见范围内时才算可见 . 默认值为 0.0
## 返回值
* 当前 IntersectionObserver 实例

## 完整示例 ( Vue3 )
```html
<template>
  <div id="rootEl">
    <div class="a" style="width: 50%;height: 80%;background: green;"></div>
    <div class="a" style="width: 50%;height: 80%;background: blue;"></div>
    <div class="a" style="width: 50%;height: 80%;background: yellow;"></div>
    <div class="a" style="width: 50%;height: 80%;background: red;"></div>
  </div>
</template>

<script setup>
import { nextTick } from 'vue'
import { addAnimation } from 'appear-add-animation'
nextTick(() => {
  addAnimation('.a', 'fade-in-up', 'exe-animation', {
    root: document.querySelector('#rootEl'), // 选择 id 为 rootEl 作为容器 , 如果不传 , 默认为 html 
    // rootMargin: '0px 0px 300px 0px', // 四个 px 分别为 上 右 下 左 边距 , 跟 css 的 margin 一样 , 
    threshold: .5 // 当元素的一半出现在视口时才被视为可见
  })
})
</script>
<style lang="scss" scoped>
#rootEl {
  height: 50vh;
  overflow: auto;
  border: 1px solid red;
}
.a {
  margin-bottom: 10px;
}
.fade-in-up {
  transition-property: opacity, transform;
  transition-duration: 0.5s, 0.5s;
  transition-timing-function: ease-in, ease-in;
  opacity: 0;
  transform: translateY(10%);
}
.exe-animation {
  opacity: 1!important;
  transform: translateY(0%)!important;
}

</style>
```
