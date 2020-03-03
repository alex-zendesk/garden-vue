const template = `
  <div v-show="active" class="c-tab__panel">
    <slot></slot>
  </div>
`;

const Tab = {
  template,
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
};

export default Tab;
