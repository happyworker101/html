# html
__an easy DOM utility library__
In some interactions, we need to create the DOM frequently. To create the DOM quickly and cleanly, this utility function is provided

** 用法 **

```javascript
var DOMUtil = window.DOMUtil
var domString = window.DOMUtil.div('这是一个div的内容', {
  class: 'test-div',
  style: 'color: red; font-size: 18px;'
})
document.write(domString)
```
