const template = `
  <td class="c-table__row__cell" :colspan="span">
    <slot></slot>
  </td>
`;

const TableCell = {
  template,
  props: {
    span: {
      type: Number,
      default: 1,
    },
  },
};

export default TableCell;
