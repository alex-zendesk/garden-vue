const template = `
  <p :class="classes"><slot></slot></p>
`;

const Title = {
  template,
  props: {
    size: {
      type: String,
      required: false,
      default: '',
      validator(value) {
        return ['sm', 'md', 'lg'].indexOf(value) !== -1;
      }
    },
    bold: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'u-fs-sm': this.size === 'sm',
        'u-fs-md': this.size === 'md',
        'u-fs-lg': this.size === 'lg',
        'u-semibold': this.bold
      };
    }
  }
};

export default Title;
