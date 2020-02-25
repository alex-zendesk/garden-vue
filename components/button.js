const template = `
  <button :class="['c-btn', classes]" @click="$emit('click')">
    {{ title }}
    <slot></slot>
  </button>
`;

const Button = {
  template,
  props: {
    title: String,
    primary: {
      type: Boolean,
      required: false,
      default: false
    },
    pill: {
      type: Boolean,
      required: false,
      default: false
    },
    basic: {
      type: Boolean,
      required: false,
      default: false
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
    muted: {
      type: Boolean,
      required: false,
      default: false
    },
    size: {
      type: String,
      required: false,
      default: false,
      validator(value) {
        return ['sm', 'lg'].indexOf(value) !== -1;
      }
    },
    state: {
      type: String,
      required: false,
      default: false,
      validator(value) {
        return ['disabled', 'hovered', 'focused', 'active'].indexOf(value) !== -1;
      }
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    icon: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        'c-btn--icon': this.icon,
        'c-btn--primary': this.primary,
        'c-btn--pill': this.pill,
        'c-btn--basic': this.basic,
        'c-btn--muted': this.muted,
        'c-btn--danger': this.danger,
        'c-btn--full': this.full,
        'c-btn--sm': this.size === 'sm',
        'c-btn--lg': this.size === 'lg',
        'is-disabled': this.disabled || this.state === 'disabled',
        'is-focused': this.state === 'focused',
        'is-hovered': this.state === 'hovered',
        'is-active': this.state === 'active'
      };
    }
  },
};

export default Button;
