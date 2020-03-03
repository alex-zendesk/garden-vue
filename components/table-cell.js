const template = `
  <td class="c-table__row__cell" :class="classes" :width="width" :colspan="span">
    <slot></slot>
  </td>
`;

const TableCell = {
  template,
  props: {
    span: {
      type: Number,
      default: 1
    },
    truncate: {
      type: Boolean,
      default: false
    },
    width: {
      type: [String, Number],
      default: 'auto'
    }
  },
  computed: {
    classes() {
      return {
        'c-table__row__cell-truncate': this.truncate
      };
    }
  }
};

export default TableCell;
