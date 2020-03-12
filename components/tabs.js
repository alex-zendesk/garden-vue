const template = `
  <nav class="c-tab" :class="classes">
    <ul class="c-tab__list" role="tablist">
      <li @click="change(tab)" 
      v-for="tab in Object.keys($slots)"
      :key="tab"
      class="c-tab__list__item" 
      :class="[{'is-selected':active===tab},listClasses]" 
      role="tab">
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
    block: {
      type: Boolean,
      default: false
    },
    full: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'c-tab--block': this.block
      };
    },
    listClasses() {
      return {
        [`u-1/${Object.keys(this.$slots).length}`]:
          !this.block && this.full && Object.keys(this.$slots).length
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
