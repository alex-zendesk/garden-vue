const template = `
  <nav :class="['c-tab',classes]">
    <ul class="c-tab__list" role="tablist">
      <li @click="change(tab)" v-for="tab in Object.keys($slots)" :class="['c-tab__list__item', {'is-selected': active === tab}]" role="tab">
        {{ tab }}
      </li>
    </ul>
    <g-tab v-for="tab in Object.keys(this.$slots)" :active="active === tab">
      <slot :name="tab"></slot>
    </g-tab>
  </nav>
`;

const Tabs = {
  template,
  props: {
    active: {
      type: String,
      default: ''
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'c-tab--block': this.block
      };
    }
  },
  data() {
    return {
      active: Object.keys(this.$slots)[0]
    };
  },
  methods: {
    change(tab) {
      this.active = tab;
      this.$emit('change', tab);
    }
  }
};

export default Tabs;
