const heading1 = React.createElement("h1",{},"nameste 1 !");
const heading2 = React.createElement("h2",{},"nameste 2 !");
const container = React.createElement("div",{id:"container"},[heading1,heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
//passing the react element inside the root
//react modifies the dom , it overrides
root.render(container);