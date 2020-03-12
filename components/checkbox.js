const template = `
  <div class="c-chk">
    <input class="c-chk__input" :id="name" type="checkbox" :disabled="disabled" :checked="value" @change="change" />
    <label class="c-chk__label" :class="classes" :for="name">
      <span dir="ltr">{{ label }}</span>
    </label>
    <small v-if="hint" class="c-chk__hint" :class="hintClasses">
      <span dir="ltr">
        {{ hint }}
      </span>
    </small>
    <slot v-else name="hint"></slot>
    <small v-if="message" class="c-chk__message" :class="messageClasses">
      <span dir="ltr">
        {{ message }}
      </span>
    </small>
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
      default: ''
    },
    value: {
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
    messageStatus: {
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
    classes() {
      return {
        [`c-chk__label--${this.variant}`]: this.variant,
        'is-checked': this.value,
        'is-hidden': this.hidden,
        'c-chk__label--regular': this.group
      };
    },
    hintClasses() {
      return {
        [`c-chk__hint--${this.variant}`]: this.variant
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
      this.value = !this.value;
      this.$emit('input', this.value);
    }
  }
};

export default Checkbox;
