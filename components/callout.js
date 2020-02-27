const template = `
  <div class="c-callout" :class="classes">
    <button v-show="canClose" class="c-callout__close"></button>
    <strong v-show="title.length" class="c-callout__title">
        <span dir="ltr">{{ title }}</span>
    </strong>
    <p v-show="message.length" class="c-callout__paragraph">{{ message }}</p>
  </div>
`;

const Callout = {
  template,
  props: {
    canClose: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    success: {
      type: Boolean,
      default: false,
    },
    warning: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    message: {
      type: String,
      default: '',
    },
  },
  computed: {
    classes() {
      return {
        'c-callout--error': this.error,
        'c-callout--success': this.success,
        'c-callout--warning': this.warning,
      };
    },
  },
};

export default Callout;
