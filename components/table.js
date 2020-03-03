const template = `
  <table :class="['c-table',classes]">
    <thead>
      <tr class="c-table__row c-table__row--header">
        <slot name="head"></slot>
      </tr>
    </thead>
    <tbody>
      <slot name="body"></slot>
    </tbody>
  </table>
`;

const Table = {
  template,
  size: {
    type: String,
    required: false,
    default: '',
    validator(value) {
      return ['sm', 'lg'].indexOf(value) !== -1;
    }
  },
  computed: {
    classes() {
      return {
        'c-table--sm': this.size === 'sm',
        'c-table--lg': this.size === 'lg'
      };
    }
  }
};

export default Table;
