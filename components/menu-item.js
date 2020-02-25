const template = `
  <li class="c-menu__item" role="menuitem" @click="$emit('click')">
    {{ label }}
  </li>
`;

const MenuItem = {
  template,
  props: {
    label: {
      type: String,
      default: '',
    },
  },
};

export default MenuItem;
