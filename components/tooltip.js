const template = `
  <div class="c-tooltip" :class="classes">
    <slot></slot>
  </div>
`;

const Tooltip = {
  template,
  props: {
    light: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      required: false,
      default: '',
      validator(value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) !== -1;
      }
    },
    size: {
      type: String,
      required: false,
      default: '',
      validator(value) {
        return ['md', 'lg', 'xl'].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    classes() {
      return {
        'c-tooltip--light': this.light,
        [`c-btn--${this.position}`]: this.position,
        [`c-btn--${this.size}`]: this.size
      };
    }
  }
};

export default Tooltip;
