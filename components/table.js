const template = `
  <table class="c-table" :class="classes">
    <caption v-if="caption" class="c-table__caption">{{ caption }}</caption>
    <thead>
      <g-table-row 
      v-if="headers.length" 
      :header="true">
        <g-table-cell v-for="(header,index) in headers" :key="index">
          <slot :name="header"> {{ header }} </slot>
        </g-table-cell>
      </g-table-row>
      <g-table-row v-else :header='true'>
        <slot name="headers"></slot>
      </g-table-row>
    </thead>
    <tbody>
      <g-table-row v-if="items.length">
        <g-tabble-cell v-for="(item,index) in items" :key="index">
          <slot :name="item"> {{ item }} </slot>
        </g-tabble-cell>
      </g-table-row>
      <slot v-else name="items"></slot>
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
    },
    headers: {
      type: Array,
      default: []
    },
    items: {
      type: Array,
      default: []
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
