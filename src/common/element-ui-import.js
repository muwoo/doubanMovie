/**
 * @author monkeywang
 * Date: 17/3/27
 */
import Vue from 'vue'
import
{
  Button,
  Select,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Input,
  Loading,
  Rate
} from 'element-ui'
let variable = {
  Button,
  Select,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Input,
  Loading,
  Rate
}
for (let item in variable) {
  if (variable.hasOwnProperty(item)) {
    Vue.use(variable[item])
  }
}

export default Vue

