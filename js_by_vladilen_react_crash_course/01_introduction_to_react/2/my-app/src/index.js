import React from "react";
import reactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

// const element = <h1>hello world</h1>;

const Component = () => {
    return <h1>hello world</h1>;
};

reactDom.render(<Component />, document.getElementById("root"));