<template>
<div id="app">
  <app-header value="sz-gp-vue-plugin"></app-header>
  <ul class="content">
    <li v-for="item in list" :key="item.id" @click="pushAction(item.path)">
      {{item.name}}
    </li>
  </ul>

  <router-view/>

</div>
</template>

<script>
export default {
  data(){
    return {
      list: [
        {
          id: 'zz',
          name: 'label标签(杨培园)',
          path: '/zz-label'
        }
      ]
    }
  },
  methods: {
    pushAction(path){
      this.$router.push(path);
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html, body, #app{
  width: 100%;
  height: 100%;
}
.page{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
}
.content{
  padding-top: 44px;
}
</style>

<style scoped lang="scss">
#app{
  
  .content{
    li{
      list-style: none;
      padding: 10px;
      line-height: 30px;
      font-size: 14px;
      color: #333;
      border-bottom: 1px solid #ddd;
    }
  }
}

</style>