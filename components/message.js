const template = `
<small :class="classes">
  <span dir="ltr">
    {{ message }}
  </span>
</small>
`;

const Message = {
  template,
  props: {
    message: {
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
    },
    status: {
      type: String,
      default: '',
      validator(status) {
        return ['success', 'error', 'warning'].includes(status);
      }
    }
  },
  computed: {
    classes() {
      return {
        [`c-${this.location}__hint`]: this.location,
        [`c-${this.location}__hint--${this.variant}`]:
          this.location && this.variant,
        [`c-${this.location}__hint--${this.status}`]:
          this.location && this.status
      };
    }
  }
};

export default Message;
