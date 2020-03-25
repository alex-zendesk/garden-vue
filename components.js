import Button from './components/button.js';
import TextInput from './components/text-input.js';
import ButtonGroup from './components/button-group.js';
import Tabs from './components/tabs.js';
import Tab from './components/tab.js';
import Dropdown from './components/dropdown.js';
import Table from './components/table.js';
import TableRow from './components/table-row.js';
import TableCell from './components/table-cell.js';
import Tooltip from './components/tooltip.js';
import Icon from './components/icon.js';
import Menu from './components/menu.js';
import MenuItem from './components/menu-item.js';
import Modal from './components/modal.js';
import TextArea from './components/text-area.js';
import Callout from './components/callout.js';
import Checkbox from './components/checkbox.js';
import Hint from './components/hint.js';
import Message from './components/message.js';
import Breadcrumb from './components/breadcrumb.js';
import BreadcrumbItem from './components/breadcrumb-item.js';
import Tag from './components/tag.js';

export const Garden = {
  'g-button': Button,
  'g-button-group': ButtonGroup,
  'g-text-input': TextInput,
  'g-tabs': Tabs,
  'g-tab': Tab,
  'g-dropdown': Dropdown,
  'g-table': Table,
  'g-row': TableRow,
  'g-cell': TableCell,
  'g-tooltip': Tooltip,
  'g-icon': Icon,
  'g-menu': Menu,
  'g-menu-item': MenuItem,
  'g-modal': Modal,
  'g-text-area': TextArea,
  'g-callout': Callout,
  'g-checkbox': Checkbox,
  'g-hint': Hint,
  'g-message': Message,
  'g-breadcrumb': Breadcrumb,
  'g-breadcrumb-item': BreadcrumbItem,
  'g-tag': Tag
};

export const configure = (Vue) => {
  for (let key in Garden) {
    Vue.component(key, Garden[key]);
  }
};
