import './index.scss'
//jsx
export const ZZLabelCom = {
  name: 'zz-label',
  props: {
    text: String,
  },
  render(){
    return <label class="zz-label">{this.text}</label>
  },
  methods: {
    tap(){
      
    }
  }
}

export default {

  name: ZZLabelCom.name,

  install(Vue){
    Vue.component(ZZLabelCom.name, ZZLabelCom);
  }
  
}

