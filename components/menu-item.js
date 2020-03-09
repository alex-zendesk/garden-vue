const template = `
  <li class="c-menu__item" :class="classes" role="menuitem" @click="$emit('click')">
    <template v-if="separator">
      
    </template>
    <template v-else>
      <slot></slot>
      <span v-if="meta" class="c-menu__item__meta" dir="ltr">
        <slot name="meta-text"></slot>
      </span>
      </template>
    </template>
  </li>
`;

const MenuItem = {
  template,
  props: {
    label: {
      type: String,
      default: ''
    },
    header: {
      type: Boolean,
      default: false
    },
    separator: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: '',
      validator(value) {
        return ['previous', 'next'].includes(value);
      }
    },
    add: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    meta: {
      type: Boolean,
      default: false
    },
    media: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'c-menu__item--header': this.header,
        'c-menu__item--separator': this.separator,
        [`c-menu__item--${this.direction}`]: this.direction,
        'c-menu__item--add': this.add,
        'c-menu__item--media': this.media,
        'is-checked': this.checked
      };
    }
  }
};

export default MenuItem;
