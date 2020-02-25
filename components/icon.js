const template = `
  <svg class="c-btn__icon" :class="{'is-rotated': rotated}">
    <use :href="'./index.svg#' + icon"></use>
  </svg>
`;

const Icon = {
  template,
  props: {
    icon: {
      type: String,
      default: ''
    },
    rotated: {
      type: Boolean,
      default: false
    },
  }
};

export default Icon;
