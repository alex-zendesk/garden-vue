const template = `
  <p :class="classes"><slot></slot></p>
`;

const Title = {
  template,
  props: {
    small: {
      type: Boolean,
      default: false,
    },
    medium: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
    bold: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        'u-fs-sm': this.small,
        'u-fs-md': this.medium,
        'u-fs-lg': this.large,
        'u-semibold': this.bold,
      };
    }
  },
};

export default Title;
