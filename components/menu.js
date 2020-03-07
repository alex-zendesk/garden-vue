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
        return ['down', 'left', 'up', 'right'].includes(value);
      }
    }
  },
  computed: {
    classes() {
      return {
        [`c-btn--${position}`]: this.position,
        'is-open': this.open
      };
    }
  }
};

export default Menu;
