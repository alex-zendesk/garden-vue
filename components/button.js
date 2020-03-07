const template = `
  <button class="c-btn" :class="classes" @click="clickEvent">
    <slot></slot>
  </button>
`;

const Button = {
  template,
  props: {
    primary: {
      type: Boolean,
      required: false,
      default: false
    },
    variant: {
      type: String,
      required: false,
      default: 'basic',
      validator(value) {
        return ['pill', 'basic', 'muted', 'anchor'].includes(value);
      }
    },
    danger: {
      type: Boolean,
      required: false,
      default: false
    },
    full: {
      type: Boolean,
      required: false,
      default: false
    },
    size: {
      type: String,
      required: false,
      default: '',
      validator(value) {
        return ['sm', 'lg'].includes(value);
      }
    },
    state: {
      type: String,
      required: false,
      default: '',
      validator(value) {
        return ['disabled', 'hovered', 'focused', 'active'].includes(value);
      }
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    icon: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'c-btn--icon': this.icon,
        'c-btn--primary': this.primary,
        [`c-btn--${this.variant}`]: this.variant,
        'c-btn--danger': this.danger,
        'c-btn--full': this.full,
        [`c-btn--${this.size}`]: this.size,
        'is-disabled': this.disabled || this.state === 'disabled',
        [`c-btn--${this.state}`]: this.state
      };
    }
  },
  methods: {
    clickEvent() {
      if (!this.disabled) {
        this.$emit('click');
      }
    }
  }
};

export default Button;
