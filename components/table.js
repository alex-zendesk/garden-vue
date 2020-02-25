const template = `
  <table class="c-table">
    <thead>
      <tr class="c-table__row c-table__row--header">
        <slot name="head"></slot>
      </tr>
    </thead>
    <tbody>
      <slot name="body"></slot>
    </tbody>
  </table>
`;

const Table = {
  template,
};

export default Table;
