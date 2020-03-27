# vue-scroll-animate

一个简单的Vue指令，当元素滚动到视图中时为其设置动画。

## Setup

```bash
npm i --save vue-scroll-animate
npm i --save animate.css
# or
yarn add vue-scroll-animate
yarn add animate.css
```

Import into your main Javascript file

```javascript
import Vue from 'vue'
import VueScrollAnimate from 'vue-scroll-animate'

Vue.use(VueScrollAnimate)
// Vue.use(VueScrollAnimate, {container: String, animatedClass: String, activeClass: String });
```

## Usage

#### HTML

```vue

<!-- 基础 -->
<div class="demo" v-scroll-animate="'bounce'">
  <h5>demo1</h5>
</div>
<!-- 可重复 -->
<div class="demo" v-scroll-animate.repeat="{ active: 'fadeInDown', leave: 'fadeOut'}">
  <h5>demo2</h5>
</div>
<!-- 延迟 -->
<div class="demo" v-scroll-animate.repeat="{ active: 'fadeInDown', leave: 'fadeOut', delay: 300}">
  <h5>demo5</h5>
</div>

# NB. A string literal (inner single-quotes) should be passed.
```

#### CSS


```

## Options

```vue
Vue.use(VueScrollAnimate, {container: String, animatedClass: String, activeClass: String });
```

```javascript
const options = {
  container: String,  /* 页面滚动条的容器,需要添加唯一的类名或者元素ID
                            默认 'body'. */
  animatedClass: String,  /* 当元素插入到页面时所有指令增加的类
                            默认 'animated'. */
  activeClass: String,   /* 当元素完成视图效果时增加的类
                            默认 'animated-active' */
}
```

## Modifiers

| Modifier | Description |
|---|---|
| repeat | 每次进入窗口时重复动画。 |



```vue
<div v-scroll-animate.repeat="'fadeInDown'">Hello world</div>
```
*以上效果配合animate.css使用,可根据需求自己写动画样式。* 
