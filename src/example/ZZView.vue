<template>
<div class="page" id="zz">
  <app-header value="label标签(杨培园)"></app-header>
  <div class="content">
    展示你的UI组件
    <zz-label text="hello"/>
  </div>
</div>
</template>

<script>
import Vue from 'vue'
import ZZLabel from '../components/zz-label'
Vue.use(ZZLabel);

export default {
}
</script>

<style>

</style>