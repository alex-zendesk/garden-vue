const template = `
  <div class="c-callout" :class="classes">
    <button v-show="canClose" class="c-callout__close" @click="$emit('destroy')"></button>
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
      default: false
    },
    type: {
      type: String,
      required: false,
      default: '',
      validator(value) {
        return ['success', 'warning', 'error', 'info'].indexOf(value) !== -1;
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
        'c-callout--error': this.type === 'error',
        'c-callout--success': this.type === 'success',
        'c-callout--warning': this.type === 'warning',
        'c-callout--info': this.type === 'info'
      };
    }
  }
};

export default Callout;
