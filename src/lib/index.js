import './select/select.less'

import paykeyboard from './button'
import zfspan from './span'
import zfselect from './select';

const components = [
   paykeyboard,
   zfspan,
   zfselect
 ]

const install = function(Vue) {
  if (install.installed)
    return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  paykeyboard,
  zfspan,
  zfselect
}
