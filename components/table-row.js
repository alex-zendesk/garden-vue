const template = `
  <tr :data-name="name" class="c-table__row" :class="classes" @click="$emit('select', name)">
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
  },
  computed: {
    classes() {
      return {
        'is-focused': this.selected,
        'c-table__row--stripe': this.stripe,
      };
    },
  },
};

export default TableRow;
