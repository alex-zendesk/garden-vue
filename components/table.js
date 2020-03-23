const template = `
  <table class="c-table" :class="classes">
    <caption v-if="caption" class="c-table__caption">{{ caption }}</caption>
    <thead>
      <g-table-row :header='true'>
        <slot name="head"></slot>
      </g-table-row>
    </thead>
    <tbody>
      <slot name="body"></slot>
    </tbody>
  </table>
`;

const Table = {
  template,
  props: {
    size: {
      type: String,
      required: false,
      default: '',
      validator(value) {
        return ['sm', 'lg'].includes(value);
      }
    },
    caption: {
      type: String,
      default: ''
    }
  },

  computed: {
    classes() {
      return {
        [`c-table--${this.size}`]: this.size
      };
    }
  }
};

export default Table;
