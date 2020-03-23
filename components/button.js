const template = `
  <button 
  class="c-btn" 
  :class="classes" 
  :disabled="disabled" 
  @click="$emit('click')">
    <slot></slot>
  </button>
`;

const Button = {
  template,
  props: {
    primary: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      default: '',
      validator(value) {
        return ['pill', 'basic', 'muted', 'anchor'].includes(value);
      }
    },
    danger: {
      type: Boolean,
      default: false
    },
    full: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
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
        [`is--${this.state}`]: this.state
      };
    }
  }
};

export default Button;
