const template = `
  <tr 
  :data-name="name" 
  class="c-table__row" 
  :class="classes" 
  @click="selectRow(name)">
    <slot></slot>
  </tr>
`;

const TableRow = {
  template,
  props: {
    header: {
      type: Boolean,
      default: false
    },
    group: {
      type: Boolean,
      deafult: false
    },
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
    checkType() {
      return this.header || this.group ? false : true;
    },
    classes() {
      return {
        'c-table__row--header': this.header,
        'c-table__row--group': this.group,
        'is-focused': this.selected,
        'c-table__row--stripe': this.checkType && this.stripe
      };
    }
  },
  methods: {
    selectRow(name) {
      if (this.checkType) {
        this.selected = !this.selected;
      }
      this.$emit('select', name);
    }
  }
};

export default TableRow;
