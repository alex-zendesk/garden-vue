const template = `
<nav aria-label="Breadcrumb">
  <ol class="c-breadcrumb">
    <li 
    v-for="breadcrumb in breadcrumbs"
    class="c-breadcrumb__item"
    :class="{'is-current':current===breadcrumb}"
    @click="change(breadcrumb)">
      <template v-if="current!==breadcrumb">
        <a href="#">{{breadcrumb}}</a> 
      </template>
      <template v-else>
        {{breadcrumb}}
      </template>
    </li>
  </ol>
</nav>
`;

const Breadcrumbs = {
  template,
  props: {
    breadcrumbs: {
      type: Array,
      default: []
    },
    current: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      current: Object.keys(this.$slots)[0]
    };
  },
  methods: {
    change(breadcrumb) {
      this.current = breadcrumb;
      this.$emit('change', breadcrumb);
    }
  }
};
export default Breadcrumbs;
