const template = `
  <fieldset>
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
        <li v-if="allowEmpty" class="c-menu__item" @click="change({label: emptyLabel, value: ''})">
            <span dir="ltr">{{ emptyLabel }}</span>
        </li>
        <li v-for="(option, index) in options" :key="index" :class="['c-menu__item', {'is-checked': option.value === value}]" @click="change(option)">
          <span dir="ltr">{{ option.label }}</span>
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
      default: ''
    },
    options: {
      type: Array,
      default: []
    },
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    allowEmpty: {
      type: Boolean,
      default: false
    },
    emptyLabel: {
      type: String,
      default: '-'
    }
  },
  data() {
    return {
      expanded: false
    };
  },
  computed: {
    valueLabel() {
      const match = this.options.filter(option => option.value === this.value);

      if (match.length) {
        return match[0].label;
      }

      return this.emptyLabel;
    },
  },
  methods: {
    change(option) {
      this.expanded = false;

      this.value = option.value;

      this.$emit('change', option);
    }
  }
};

export default Dropdown;
