## 用法示例
```javascript
import { addAnimation } from 'appear-add-animation'

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

## 参数
* `selectors` - 选择器名称
* `startAnimationClass` - 起始状态类名
* `endAnimationClass` - 结束状态类名

