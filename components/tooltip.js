const template = `
  <div class="c-tooltip c-tooltip--light" :class="this.classes">
    <slot></slot>
  </div>
`;

const Tooltip = {
  template,
  props: {
    top: {
      type: Boolean,
      default: false,
    },
    bottom: {
      type: Boolean,
      default: false,
    },
    left: {
      type: Boolean,
      default: false,
    },
    right: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        'c-arrow c-arrow--t': this.top,
        'c-arrow c-arrow--b': this.bottom,
        'c-arrow c-arrow--l': this.left,
        'c-arrow c-arrow--r': this.right,
      };
    },
  },
};

export default Tooltip;
