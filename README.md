# miysortable-vue
sortable in vue

## Installation

```sh
$ npm i miysortable-vue
```

Then, use or import it
```js
// gobal register：
import VueSortable from 'miysortable-vue';
Vue.use(VueSortable)

// Or in your component：
import { sortable } from 'miysortable-vue';

export default {
  directives: {
    sortable
  },
  // ...your code...
}
```

## Usage

Add directives in your element
```html
<th v-sortable:{methodName}.tooltip.enum="{dataName}">name</th>
```

### Argument

#### {methodName}：The method will be call, after process finish.
#### {dataName}：The object in data you set.
#### tooltip：If you want show the tooltip of sort index, add this.
#### enum：The sort description will save int, if not save on string(desc/asc).

### Sample
Set data you want to save on, and method will be call
```html
<th v-sortable:search.tooltip="sort.name">name</th>
```
```js
 data() {
    return {
      sort: {} // the place you want to save 
    };
  },
  methods: {
    search() {
      // dosomething...
    }
  }
```

custom style of arrow and tooltip
```style
.vue-sortable {
  width: auto;
  height: auto;
  background-color: #fff;
  position: relative;
}

.vue-sortable .b-down {
  border-color: #000000 #fff #fff;
  border-style: solid;
  border-width: 4px;
  position: absolute;
  top: 7px;
}

.vue-sortable .b-up {
  border-color: #fff #fff #000000;
  border-style: solid;
  border-width: 4px;
  position: absolute;
  top: 7px;
}

.vue-sortable .tooltiptext {
  font-size: 1px;
  left: 5px;
  top: -9px;
  width: 15px;
  background-color: rgb(82, 72, 72);
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 1px 0;

  position: absolute;
  z-index: 1;
}
```

data format
```
sort:{
 name: {value: "desc", index: 0}
}
```
