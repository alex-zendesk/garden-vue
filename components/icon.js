const template = `
  <svg class="c-btn__icon">
    <use :href="href"></use>
  </svg>
`;

const Icon = {
  template,
  props: {
    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    href() {
      return `./index.svg#${this.icon}`;
    }
  }
};

export default Icon;
