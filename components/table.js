const template = `
  <table class="c-table" :class="classes">
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
      return ['sm', 'lg'].includes(value);
    }
  },
  computed: {
    classes() {
      return {
        [`c-btn--${size}`]: this.size
      };
    }
  }
};

export default Table;
