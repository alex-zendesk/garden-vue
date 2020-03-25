const template = `
  <td class="c-table__row__cell" :class="classes">
    <slot></slot>
  </td>
`;

const TableCell = {
  template,
  props: {
    truncate: {
      type: Boolean,
      default: false
    },
    min: {
      type: Boolean,
      default: false
    },
    overflow: {
      type: Boolean,
      deafult: false
    },
    sortable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'c-table__row__cell--truncate': this.truncate,
        'c-table__row__cell--min': this.min,
        'c-table__row__cell--overflow': this.overflow,
        'c-table__row__cell__sortable': this.sortable
      };
    }
  }
};

export default TableCell;
