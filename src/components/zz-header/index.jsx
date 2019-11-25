import './index.scss'
//jsx
export const ZZHeaderCom = {
  name: 'app-header',
  props: {
    value: String,
  },
  render(){
    return (
      <header class="header">
        <h1 class="title">{this.value}</h1>
      </header>
    )
  }
}

export default {

  name: ZZHeaderCom.name,

  install(Vue){
    Vue.component(ZZHeaderCom.name, ZZHeaderCom);
  }
  
}

