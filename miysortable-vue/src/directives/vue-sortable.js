import {
    callExpressionString
} from '../utils/vnode.util';

import {
    sortableEnum
} from '../enums/sortable.enum';

const directive = {
    bind(el, binding, vnode) {
        const descValue = binding.modifiers.enum === true ? sortableEnum.desc.value : sortableEnum.desc.title;
        const ascValue = binding.modifiers.enum === true ? sortableEnum.asc.value : sortableEnum.asc.title;

        el.classList.add('vue-sortable');
        const newb = document.createElement("b");
        el.appendChild(newb);
        el.addEventListener('click', () => {
            if (binding.value === null || binding.value === undefined) {
                callExpressionString(vnode.context, binding.expression, descValue);
                binding.value = descValue;
                newb.classList.add('b-down');
            } else if (binding.value === descValue) {
                callExpressionString(vnode.context, binding.expression, ascValue);
                binding.value = ascValue;
                newb.classList.remove('b-down');
                newb.classList.add('b-up');
            } else if (binding.value === ascValue) {
                callExpressionString(vnode.context, binding.expression, null);
                binding.value = null;
                newb.classList.remove('b-up');
            }
            vnode.context[binding.arg].apply();
        });
    },
};

export {
    directive
};