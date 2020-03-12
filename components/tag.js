const template = `
<div class="c-tag" :class="classes" :title="title">
  <span>{{title}}</span>
  <div v-show="canClose" class="u-visibility-screenreader">
    Press delete to remove this tag.
  </div>
  <button v-show="canClose" @click="close"
  class="c-tag__remove" tabindex="-1">
  </button>
</div>
`;

const Tag = {
  template,
  props: {
    title: {
      type: String,
      default: ''
    },
    canClose: {
      type: Boolean,
      default: false
    },
    shape: {
      type: String,
      default: '',
      validator(value) {
        return ['pill', 'round'].includes(value);
      }
    },
    size: {
      type: String,
      default: '',
      validator(value) {
        return ['sm', 'lg'].includes(value);
      }
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    classes() {
      return {
        [`c-tag--${this.shape}`]: this.shape,
        [`c-tag--${this.size}`]: this.size,
        [`c-tag--${this.color}`]: this.color
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

export default Tag;
