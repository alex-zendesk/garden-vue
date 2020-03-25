const template = `
  <nav class="c-tab" :class="classes.tab">
    <ul class="c-tab__list" role="tablist">
      <li @click="change(tab)" 
      v-for="tab in Object.keys(this.$slots)"
      :key="tab"
      class="c-tab__list__item" 
      :class="listClasses(tab)" 
      role="tab">
        {{ tab }}
      </li>
    </ul>
    <g-tab v-for="tab in Object.keys(this.$slots)" :active="isActive(tab)">
      <slot :name="tab"></slot>
    </g-tab>
  </nav>
`;

const Tabs = {
  template,
  props: {
    block: {
      type: Boolean,
      default: false
    },
    full: {
      type: Boolean,
      default: false
    },
    activeTab: {
      type: String,
      default: ''
    }
  },
  computed: {
    tabNames() {
      return Object.keys(this.$slots);
    },
    classes() {
      return {
        tab: { 'c-tab--block': this.block },
        list: {
          [`u-1/${Object.keys(this.$slots).length}`]:
            !this.block && this.full && Object.keys(this.$slots).length
        }
      };
    }
  },
  data() {
    return {
      active: this.activeTab
    };
  },
  methods: {
    change(tab) {
      this.active = tab;
      this.$emit('change', tab);
    },
    isActive(tab) {
      return this.active === tab;
    },
    listClasses(tab) {
      return {
        'is-selected': this.isActive(tab),
        ...this.classes.list
      };
    }
  }
};

export default Tabs;
