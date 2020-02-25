const template = `
  <div class="menu-container u-1/1" v-show="open">
    <ul class="c-menu" :class="classes" role="menu">
      <slot></slot>
    </ul>
  </div>
`;

const Menu = {
  template,
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    up: {
      type: Boolean,
      default: false,
    },
    down: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        'c-menu--up': this.up,
        'c-menu--down': this.down,
        'is-open': this.open,
      };
    },
  },
};

export default Menu;
