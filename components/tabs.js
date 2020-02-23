const template = `
  <nav class="c-tab">
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
  data() {
    return {
      active: Object.keys(this.$slots)[0],
    };
  },
  methods: {
    change(tab) {
      this.active = tab;
    },
  },
};

export default Tabs;
