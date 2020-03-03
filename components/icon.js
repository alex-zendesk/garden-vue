const template = `
  <svg class="c-btn__icon">
    <use :href="'./index.svg#' + icon"></use>
  </svg>
`;

const Icon = {
  template,
  props: {
    icon: {
      type: String,
      default: ''
    }
  }
};

export default Icon;
