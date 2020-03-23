const template = `
  <div class="c-chk">
    <input class="c-chk__input" :id="name" :type="variantType" :disabled="disabled" :checked="checked" @change="change" />
    <label class="c-chk__label" :class="classes" :for="name">
      <span dir="ltr">{{ label }}</span>
    </label>
    <g-hint v-if="hint" :hint="hint" location="chk" :variant="variant"/>
    <slot v-else name="hint"></slot>
    <g-message v-if="message" location="chk" :variant="variant" :status="status"/>
    <slot v-else name="message"></slot>
  </div>
`;

const Checkbox = {
  template,
  props: {
    variant: {
      type: String,
      default: '',
      validator(value) {
        return ['toggle', 'radio'].includes(value);
      }
    },
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      default: false
    },
    hidden: {
      type: Boolean,
      default: false
    },
    hint: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      default: '',
      validator(value) {
        return ['success', 'error', 'warning'].includes(value);
      }
    },
    group: {
      type: Boolean,
      defalt: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    variantType() {
      return this.variant === 'radio' ? 'radio' : 'checkbox';
    },
    classes() {
      return {
        [`c-chk__label--${this.variant}`]: this.variant,
        'is-checked': this.checked,
        'is-hidden': this.hidden,
        'c-chk__label--regular': this.group
      };
    },
    messageClasses() {
      return {
        [`c-chk__message--${this.variant}`]: this.variant,
        [`c-chk__message--${this.messageStatus}`]: this.messageStatus
      };
    }
  },
  methods: {
    change() {
      this.checked = !this.checked;
      this.$emit('input', this.checked);
    }
  }
};

export default Checkbox;
