const template = `
  <div class="l-backdrop l-backdrop--center" v-show="open">
    <section class="c-dialog" :class="classes" role="dialog">
      <header>
        <h1 class="c-dialog__header">{{ title }}</h1>
        <button 
        aria-label="close" 
        class="c-dialog__close" 
        @click="close">
        </button>
      </header>
      <div class="c-dialog__body">
        <slot name="body"></slot>
      </div>
      <footer class="c-dialog__footer">
        <slot name="footer"></slot>
      </footer>
    </section>
  </div>
`;

const Modal = {
  template,
  props: {
    open: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    large: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classes() {
      return {
        'c-dialog--large': this.large
      };
    }
  },
  methods: {
    close() {
      this.$destroy();
      this.$el.parentNode.removeChild(this.$el);
    }
  }
};

export default Modal;
