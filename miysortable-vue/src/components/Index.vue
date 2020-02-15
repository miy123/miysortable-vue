<template>
  <div>
    <table width="400" border="1" align="center">
      <thead>
        <tr>
          <th>id</th>
          <th v-sortable:search.tooltip="sort.sex">sex</th>
          <th v-sortable:search.tooltip="sort.name">name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(dataItem, index) in pageData" :key="index">
          <td>{{ dataItem.id }}</td>
          <td>{{ dataItem.sex }}</td>
          <td>{{ dataItem.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
/* vue-sortable 箭頭樣式 */
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
</style>

<script>
import { sortable, sortHelper } from "../release";

export default {
  directives: {
    sortable
  },
  name: "Index",
  data() {
    return {
      pageData: [],
      sourceData: [
        { id: 1, sex: "male", name: "Apple" },
        { id: 2, sex: "male", name: "Banana" },
        { id: 3, sex: "male", name: "Clark" },
        { id: 4, sex: "female", name: "Dog" }
      ],
      sort: {}
    };
  },
  mounted() {
    this.search();
  },
  methods: {
    search() {
      if (this.sort) {
        this.pageData = sortHelper(this.sourceData, this.sort);
      } else {
        this.pageData = this.sourceData;
      }
    }
  }
};
</script>
