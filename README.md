
# What is this?

The Vue-fication of Zendesk Garden :-) [Garden](https://garden.zendesk.com/css-components/) is Zendesk's awesome CSS framework. This project is a Vue-based implementation of the framework similiar to the [React](https://garden.zendesk.com/react-components/) version.

## Getting Started

### Installation

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

`No support`

### Avatars

`No support`

### Bedrock

`No support`

### Breadcrumbs

`No support`

### Buttons

Example:

```html
<g-button title="Click me!" />
```
Props:

| Name    | Type       | Default 
| ------- | ---------- | -
| title   | String     | 
| primary | Boolean    | false
| pill    | Boolean    | false
| basic   | Boolean    | false
| danger  | Boolean    | false
| full    | Boolean    | false
| muted   | Boolean    | false
| size    | 'sm', 'lg' | 
| state   | 'disabled', 'hovered', 'focused', 'active' |
| disabled| Boolean                                    | false

Events:

`action`

### Callouts

`No support`

### Checkboxes, Toggles, & Radios

`No support`

### Chrome

`No support`

### Dropdowns

`No support`

### Grid

`No support`

### Menus

`No support`

### Modals

`No support`

### Pagination

`No support`

### Ranges

`No support`

### Scrollbars

`No support`

### Tabs

`No support`

### Tables

`No support`

### Tags

`No support`

### Text & Textarea

Example:

```html
<g-text-input label="Type in me!" />
```
Props:

| Name    | Type       | Default 
| ------- | ---------- | -
|label|String|
|value|String|
|hint|String|
|message|String|

### Tooltips

`No support`

### Utilities

`No support`

