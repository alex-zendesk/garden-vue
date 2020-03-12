const template = `
  <div class="c-callout" :class="classes">
    <button v-show="canClose" class="c-callout__close" @click="close"></button>
    <strong v-if="title" class="c-callout__title">
        <span dir="ltr">{{ title }}</span>
    </strong>
    <p v-if="message" class="c-callout__paragraph">{{ message }}</p>
    <slot v-else name="message"></slot>
  </div>
`;

const Callout = {
  template,
  props: {
    canClose: {
      type: Boolean,
      default: false
    },
    dialog: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      required: false,
      default: '',
      validator(value) {
        return ['success', 'warning', 'error', 'info', 'recessed'].includes(
          value
        );
      }
    },
    title: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    }
  },
  computed: {
    classes() {
      return {
        'c-callout--dialog': this.dialog,
        [`c-callout--${this.type}`]: this.type
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

export default Callout;
