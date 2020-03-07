const template = `
<li class="c-breadcrumb__item" :class="classes">
    <a v-if="!current" :href="href">
      <slot></slot>
    </a> 
    <slot v-else></slot>
</li>
`;

const BreadcrumbItem = {
  template,
  props: {
    current: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: '#'
    }
  },
  computed: {
    classes() {
      return {
        'is-current': this.current
      };
    }
  }
};
export default BreadcrumbItem;
