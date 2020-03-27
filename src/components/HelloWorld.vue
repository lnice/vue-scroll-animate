<template>
  <div class="home">
    <!-- 基础 -->
    <div class="demo" v-scroll-animate="'bounce'">
      <h5>demo1</h5>
    </div>
    <!-- 可重复 -->
    <div class="demo" v-scroll-animate.repeat="{ active: 'fadeInDown', leave: 'fadeOut'}">
      <h5>demo2</h5>
    </div>
    <div class="demo" v-scroll-animate.repeat="{ active: 'slideInLeft', leave: 'slideOutRight'}">
      <h5>demo3</h5>
    </div>
    <div class="demo" v-scroll-animate.repeat="{ active: 'rollIn', leave: 'rollOut'}">
      <h5>demo4</h5>
    </div>
    <!-- 延迟 -->
    <div class="demo" v-scroll-animate.repeat="{ active: 'fadeInDown', leave: 'fadeOut', delay: 300}">
      <h5>demo5</h5>
    </div>
    <div class="demo" v-scroll-animate.repeat="{ active: 'rotateIn', leave: 'rotateOut', delay: 600}">
      <h5>demo6</h5>
    </div>
    <div class="demo" v-scroll-animate.repeat="{ active: 'flipInX', leave: 'flipOutX', delay: 900}">
      <h5>demo7</h5>
    </div>
    <!-- other -->
    <div 
      class="demo" 
      v-for="(item, index) in 15"
      :key="index"
      v-scroll-animate.repeat="{ active: 'flipInX', leave: 'flipOutX'}">
      <h5>demo {{ index + 8 }}</h5>
    </div>
    <p>效果使用animate.css</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .demo {
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: #eee;
    border-bottom: 1px solid #fff;
    overflow: hidden;
  }
  h5 {
    font-size: 50px;
  }
</style>