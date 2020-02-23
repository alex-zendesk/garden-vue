const template = `
  <fieldset class="u-mb-lg u-position-relative">
    <div class="c-txt">
      <label v-if="label" class="c-txt__label" :for="name">
        {{ label }}
      </label>
      <button class="c-txt__input c-txt__input--select" :id="name" @click="expanded = !expanded">
        <span dir="ltr">{{ valueLabel }}</span>
      </button>
    </div>
    <div class="menu-container u-1/1">
      <ul :aria-hidden="!expanded" class="c-menu c-menu--down">
        <li v-for="(label, option) in options" :class="['c-menu__item', {'is-checked': option === value}]" @click="change(option)">
          <span dir="ltr">{{ label }}</span>
        </li>
      </ul>
    </div>
  </fieldset>
`;

const Dropdown = {
  template,
  props: {
    name: {
      type: String,
      default: '',
    },
    options: {
      type: Object,
      default: {},
    },
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      expanded: false,
    };
  },
  computed: {
    valueLabel() {
      return this.options[this.value];
    },
  },
  methods: {
    change(value) {
      this.expanded = false;

      this.value = value;

      this.$emit('change', value);
    }
  },
};

export default Dropdown;
