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
        'c-arrow c-arrow--t': this.position === 'top',
        'c-arrow c-arrow--b': this.position === 'bottom',
        'c-arrow c-arrow--l': this.position === 'left',
        'c-arrow c-arrow--r': this.position === 'right',
        'c-tooltip--medium': this.size === 'md',
        'c-tooltip--large': this.size === 'lg',
        'c-tooltip--extra-large': this.size === 'xl'
      };
    }
  }
};

export default Tooltip;
