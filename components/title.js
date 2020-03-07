const template = `
  <p :class="classes">
    <slot></slot>
  </p>
`;

const Title = {
  template,
  props: {
    size: {
      type: String,
      required: false,
      default: '',
      validator(value) {
        return ['sm', 'md', 'lg'].includes(value);
      }
    }
  },
  computed: {
    classes() {
      return {
        [`c-btn--${size}`]: this.size
      };
    }
  }
};

export default Title;
