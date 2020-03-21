const template = `
  <div class="c-txt">
    <label v-if="label" class="c-txt__label" :for="name">
      {{ label }}
    </label>
    <small v-if="hint" class="c-txt__hint">
      <span dir="ltr">
        {{ hint }}
      </span>
    </small>
    <slot v-else name="hint"></slot>
    <input 
      type="text"
      :id="name"
      class="c-txt__input"
      :value="value"
      @input.trim="$emit('input', $event.target.value)"
      :placeholder="placeholder"
    />
    <small v-if="message" class="c-txt__message" :class="messageClasses">
      <span dir="ltr">
        {{ message }}
      </span>
    </small>
    <slot v-else name="message"></slot>
  </div>
`;

const TextInput = {
  template,
  props: {
    variant: {
      type: String,
      default: '',
      validator(value) {
        return ['textarea', 'media'].includes(value);
      }
    },
    label: {
      type: String,
      required: false
    },
    name: {
      type: String,
      default: ''
    },
    inline: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      required: false
    },
    hint: {
      type: String,
      required: false
    },
    message: {
      type: String,
      required: false
    },
    placeholder: {
      type: String,
      default: '',
      required: false
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
        'c-txt--inline': this.inline
      };
    },
    messageClasses() {
      return {
        [`c-txt__message--${this.messageStatus}`]: this.messageStatus
      };
    }
  }
};

export default TextInput;
