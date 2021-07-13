const text = `
 # This is Heading
  ## This is Sub-Heading
  
   This is a paragraph.

  >This is Block Quotes!

  **This is a list**
  - item 1
  - item 2
  - item 3


  [Open link](https://www.linkedin.com/in/abhinesh-kourav-7509841b9/)

  This is a inline \`<div></div>\`
  
  This is a block of code:

  \`\`\`
  var a="abc";
  var b="xyz";
  var c=a+b;
  \`\`\`

  ![React](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K)
`;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: text };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value });

  }

  render() {
    const output = marked(this.state.input, { breaks: true });
    return /*#__PURE__*/(
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { id: "markup", className: "col-6" }, /*#__PURE__*/
      React.createElement("h3", null, "Your Markup:"), /*#__PURE__*/
      React.createElement("textarea", {
        id: "editor",
        onChange: this.handleChange,
        value: this.state.input })), /*#__PURE__*/


      React.createElement("div", { className: "col-6" }, /*#__PURE__*/
      React.createElement("h3", null, "Output:"), /*#__PURE__*/
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: output } }))));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));