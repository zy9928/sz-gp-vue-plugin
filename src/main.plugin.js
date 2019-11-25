import ZZLabel, {ZZLabelCom} from './components/zz-label'


export {
  ZZLabel
}

export default {
  install(Vue){
    Vue.component(ZZLabelCom.name, ZZLabelCom);
  }
}

