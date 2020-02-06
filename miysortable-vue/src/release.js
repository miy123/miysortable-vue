import {
    directive
} from './directives/vue-sortable';
import {
    sortHelper
} from './utils/sort.util';

const VueSortable = {
    install(Vue) {
        Vue.directive('sortable', directive);
    },
};

export {
    directive as sortable,
    sortHelper
};
export default VueSortable;