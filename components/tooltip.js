const template = `
  <div class="c-tooltip" :class="classes">
    <template v-if="checkSize">
      <strong  class="c-tooltip__title">
        <span dir="ltr">
          <slot name="title"></slot>
        </span>
      </strong>
      <p class="c-tooltip__paragraph">
        <slot name="paragraph"></slot>
      </p>
      <slot></slot>
    </template>
    <span v-else>
      <slot></slot>
    </span>
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
        return ['top', 'bottom', 'left', 'right'].includes(value);
      }
    },
    size: {
      type: String,
      required: false,
      default: '',
      validator(value) {
        return ['medium', 'large', 'extra-large'].includes(value);
      }
    }
  },
  computed: {
    classes() {
      return {
        'c-tooltip--light': this.light,
        [`c-tooltip--${this.position}`]: this.position,
        [`c-tooltip--${this.size}`]: this.size
      };
    },
    checkSize() {
      return this.size === 'large' || this.size === 'extra-large';
    }
  }
};

export default Tooltip;
