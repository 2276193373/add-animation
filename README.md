## 用法示例
```javascript
import { addAnimation } from 'amin22761/addAnimation'

addAnimation('#container', 'fade-in-up', 'exe-animation')
```
### css 示例代码
```css
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
```
## 说明

示例中, 当函数开始执行时, `.fade-in-up` 类名会添加到目标元素的 `class` 中, 然后当目标元素出现在视口中时, 会添加 `exe-animation` 类名到 `class` 列表中, 你可以在 `.fade-in-up` 和 `.exe-animation` 编写过度动画属性

## 参数
* `selectors` - 选择器名称
* `startAnimationClass` - 起始状态类名
* `endAnimationClass` - 结束状态类名
* `unobserve` - observe后是否取消observe, 默认为 true, 即监听过后立即取消监听, 不会重复添加类名
