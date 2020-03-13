### Zendesk Garden - Vue Components

Things left to work and resolve, on all components we should revisit slot implementation. and we should go throught components and validate them.

#### Components:

---

##### 1. Breadcrumb, Breadcrumb item

- visually missing arrows

##### 2. Button, Button Group

- add role attribute
- remove state (hovered, focused, etc);
- resolve icon button - `is-active`,`is-rotated`
- if muted we should not emit click?

##### 3. Checkbox

- Better solution for hint and messages for toggle and radio
- change from methods to computed
- disabled implementation
- possible lightering of props
- position of hint functionality

##### 4. Icon

- possible solution of cdn and not local spritemap of svg's

##### 5. Menu/ Menu Item

- header icon implementation
- meta functionality
- media functionality
- label maybe not needed change to slot

##### 6. Tabs

- more closely how they work, what if they want to do a callout when clicking specific tab

##### 7. Title

- bold is not needed maybe even other prop since it will inherit

##### 8. Toggle

- not needed anymore

##### 9. Tooltip

- arrow positioning
