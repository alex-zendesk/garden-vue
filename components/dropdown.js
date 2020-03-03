const template = `
  <fieldset class="u-position-relative">
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
        <li v-if="allowEmpty" class="c-menu__item" @click="change('')">
            <span dir="ltr">{{ emptyLabel }}</span>
        </li>
        <li v-for="(dropdownOption,index) in options" :key="index" :class="['c-menu__item', {'is-checked': dropdownOption.value === value}]" @click="change(dropdownOption)">
          <span dir="ltr">{{ dropdownOption.label }}</span>
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
      return (
        this.options.filter((option) => option.value === this.value)[0] ||
        this.emptyLabel
      );
    }
  },
  methods: {
    change(value) {
      this.expanded = false;

      this.value = value;

      this.$emit('change', value);
    }
  }
};

export default Dropdown;
