const template = `
  <div class="c-chk">
    <input class="c-chk__input" :id="name" type="checkbox" :checked="value" @change="$emit('input', $event.target.checked)" />
    <label class="c-chk__label" :class="{'is-checked': value}" :for="name">
      <span dir="ltr">{{ label }}</span>
    </label>
  </div>
`;

const Checkbox = {
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
      type: Boolean,
      default: false
    }
  }
};

export default Checkbox;
