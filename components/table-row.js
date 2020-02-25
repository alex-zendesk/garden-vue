const template = `
  <tr :data-name="name" :class="['c-table__row', {'is-focused': selected}]" @click="$emit('select', name)">
    <slot></slot>
  </tr>
`;

const TableRow = {
  template,
  props: {
    selected: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: '',
    },
  },
};

export default TableRow;
