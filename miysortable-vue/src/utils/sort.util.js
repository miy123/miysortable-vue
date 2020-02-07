import {
    sortableEnum
} from '../enums/sortable.enum';

const sortAsc = function (obj1, obj2, key) {
    if (obj1[key] > obj2[key]) {
        return 1;
    } else if (obj1[key] < obj2[key]) {
        return -1;
    } else {
        return 0;
    }
};

const sortDesc = function (obj1, obj2, key) {
    if (obj1[key] < obj2[key]) {
        return 1;
    } else if (obj1[key] > obj2[key]) {
        return -1;
    } else {
        return 0;
    }
};

const sortHelper = function (list, sortObj) {
    return list.sort((a, b) => {
        const keys = Object.keys(sortObj);
        let sortR = 0;
        keys.forEach(x => {
            if (sortObj[x].value === sortableEnum.desc.title || sortObj[x].value === sortableEnum.desc.value) {
                const result = sortDesc(a, b, x);
                if (result !== 0) {
                    sortR = result;
                    return;
                }
            } else if (sortObj[x].value === sortableEnum.asc.title || sortObj[x].value === sortableEnum.asc.value) {
                const result = sortAsc(a, b, x);
                if (result !== 0) {
                    sortR = result;
                    return;
                }
            }
        });
        return sortR;
    });
}

export {
    sortHelper
};