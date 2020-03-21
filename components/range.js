const template = `
<div class="c-range" :class="classes">
  <label class="c-range__label" :for="name">
    <span dir="ltr">{{label}}</span>
  </label>
  <small v-if="hint" class="c-range__hint">
    <span dir="ltr">
      {{ hint }}
    </span>
  </small>
  <slot v-else name="hint"></slot>
  <input class="c-range__input" :id="name" type="range" style="background-size: 50%;">
  <small v-if="message" class="c-range__message" :class="messageClasses">
      <span dir="ltr">
        {{ message }}
      </span>
    </small>
    <slot v-else name="message"></slot>
</div>
`;

const Range = {
  template,
  props: {
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
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
    }
  },
  computed: {
    classes() {
      return {
        'c-range--inline': this.inline
      };
    },
    messageClasses() {
      return {
        [`c-chk__message--${this.messageStatus}`]: this.messageStatus
      };
    }
  }
};
export default Range;
