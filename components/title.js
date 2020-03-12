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
        return ['sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'].includes(value);
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
        [`u-fs-${this.size}`]: this.size,
        'u-semibold': this.bold
      };
    }
  }
};

export default Title;
