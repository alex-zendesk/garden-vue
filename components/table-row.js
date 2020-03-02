const template = `
  <tr :data-name="name" 
  :class="['c-table__row', {'is-focused': selected},{'c-table__row--stripe':stripe}]" 
  @click="$emit('select', name)">
    <slot></slot>
  </tr>
`;

const TableRow = {
  template,
  props: {
    selected: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    stripe: {
      type: Boolean,
      default: false
    }
  }
};

export default TableRow;
