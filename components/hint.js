const template = `
<small :class="classes">
  <span dir="ltr">
    {{ hint }}
  </span>
</small>
`;

const Hint = {
  template,
  props: {
    hint: {
      type: 'String',
      required: true
    },
    location: {
      type: 'String',
      default: '',
      validator(variant) {
        return ['chk', 'txt'].includes(variant);
      }
    },
    variant: {
      type: String,
      default: '',
      validator(value) {
        return ['toggle', 'radio'].includes(value);
      }
    }
  },
  computed: {
    classes() {
      return {
        [`c-${this.location}__hint`]: this.location,
        [`c-${this.location}__hint--${this.variant}`]:
          this.location && this.variant
      };
    }
  }
};

export default Hint;
