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
        const newb = document.createElement('b');
        el.appendChild(newb);
        const tooltipElement = document.createElement('span');
        tooltipElement.classList.add('tooltiptext');
        tooltipElement.style.visibility = 'hidden';
        newb.appendChild(tooltipElement);
        el.addEventListener('click', () => {
            if (vnode.context.sortableMaxIndex === undefined)
                vnode.context.sortableMaxIndex = 1;
            if (binding.value === null || binding.value === undefined) {
                callExpressionString(vnode.context, binding.expression, descValue, tooltipElement);
                binding.value = descValue;
                newb.classList.add('b-down');
            } else if (binding.value === descValue) {
                callExpressionString(vnode.context, binding.expression, ascValue, tooltipElement);
                binding.value = ascValue;
                newb.classList.remove('b-down');
                newb.classList.add('b-up');
            } else if (binding.value === ascValue) {
                callExpressionString(vnode.context, binding.expression, null);
                binding.value = null;
                newb.classList.remove('b-up');
            }

            if (binding.modifiers.tooltip === true) {
                if (binding.value) {
                    tooltipElement.style.visibility = 'visible';
                } else {
                    tooltipElement.style.visibility = 'hidden';
                }
            }

            vnode.context[binding.arg].apply();
        });

        // if(binding.modifiers.tooltip === true){
        //     el.addEventListener('mouseover',()=>{
        //         if(binding.value) tooltipElement.style.visibility = 'visible';
        //     });
        //     el.addEventListener('mouseout',()=>{
        //         tooltipElement.style.visibility = 'hidden';
        //     });
        // }
    },
};

export {
    directive
};