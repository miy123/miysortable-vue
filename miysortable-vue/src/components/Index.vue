<template>
  <div>
    <table
      border="1"
      align="center"
    >
      <thead>
        <tr>
          <th v-sortable:search="sort.id">
            id
          </th>
          <th v-sortable:search="sort.name">
            name
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(dataItem, index) in pageData"
          :key="index"
        >
          <td>
            {{dataItem.id}}
          </td>
          <td>
            {{dataItem.name}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { sortable, sortHelper } from '../release';

export default {
  directives: {
    sortable,
  },
  name: 'Index',
  data() {
    return {
      pageData: [],
      sourceData: [{ id: 1, name: 'Apple' }, { id: 2, name: 'Banana' }, { id: 3, name: 'Clark' }, { id: 4, name: 'Dog' }],
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
    },
  }
}
</script>
