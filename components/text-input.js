const template = `
  <div class="c-txt">
    <label v-if="label" class="c-txt__label">
      {{ label }}
    </label>
    <small v-if="hint" class="c-txt__hint">
      <span dir="ltr">
        {{ hint }}
      </span>
    </small>
    <input 
      type="text" 
      class="c-txt__input"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :placeholder="placeholder"
    />
    <small v-if="message" class="c-txt__message">
      <span dir="ltr">
        {{ message }}
      </span>
    </small>
  </div>
`;

const TextInput = {
  template,
  props: {
    label: {
      type: String,
      required: false
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
  },
};

export default TextInput;
