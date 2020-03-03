const template = `
  <div class="c-txt">
    <label class="c-txt__label" :for="name">
      {{ label }}
    </label>
    <textarea class="c-txt__input c-txt__input--area" :id="name" :value="value" @input="$emit('input', $event.target.value)"></textarea>
  </div>
`;

const TextArea = {
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
    value: {
      type: String,
      default: '',
    }
  }
};

export default TextArea;
