// 导入自己需要的组件
import { 
  Button, Cell, Tabbar, TabbarItem, Swipe, SwipeItem,
  Search, List, NavBar, Field, Checkbox, Dialog 
} from 'vant';

const vant = {
  install: function (Vue) {
    Vue.use(Button);
    Vue.use(Cell);
    Vue.use(Tabbar);
    Vue.use(TabbarItem);
    Vue.use(Swipe);
    Vue.use(SwipeItem);
    Vue.use(Search);
    Vue.use(List);
    Vue.use(NavBar);
    Vue.use(Field);
    Vue.use(Checkbox);
    Vue.use(Dialog);
    // Vue.use(DropdownMenu);
    // Vue.use(DropdownItem);
    // Vue.use(Tooltip);
  }
}
export default vant;