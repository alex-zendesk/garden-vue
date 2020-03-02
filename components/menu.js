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
      default: false
    },
    position: {
      type: String,
      required: false,
      default: '',
      validator(value) {
        return ['down', 'left', 'up', 'right'].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    classes() {
      return {
        'c-menu--up': this.position === 'up',
        'c-menu--down': this.position === 'down',
        'c-menu--left': this.position === 'left',
        'c-menu--right': this.position === 'right',
        'is-open': this.open
      };
    }
  }
};

export default Menu;
