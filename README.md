The Vue-fication of Zendesk Garden :-)

## Getting Started

This repo should be cloned into your project root directory. If you're using one of Fabio's [awesome](https://github.com/fabioguarrasi) boilerplates, then the following script will suffice:
```bash
git clone git@github.com:alex-zendesk/garden-vue.git assets/src/components/garden
```
If this doesn't work, ensure that your [SSH keys](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh) have been configured. Alternatively, just zip it up and drop it into a folder.

### Usage

Once the component library has been properly added to your project, simply import the components where your root Vue component lives with the following statement (may need to adjust the paths):

```javascript
import Garden from "./components/garden/components.js";
```

And add it to your root component configuration like so:

```javascript
components: {
    ...Garden,
},
```

## Components

### Arrows

### Avatars

### Bedrock

### Breadcrumbs

### Buttons

### Callouts

### Checkboxes, Toggles, & Radios

### Chrome

### Dropdowns

### Grid

### Menus

### Modals

### Pagination

### Ranges

### Scrollbars

### Tabs

### Tables

### Tags

### Text & Textarea

### Tooltips

### Utilities
