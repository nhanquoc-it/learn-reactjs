// Component Cha : ConditionalComponent.js
import React from "react";
// Import 2 component con
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

const ConditionalComponent = ({ showComponentA }) => {
	return <div>{showComponentA ? <ComponentA /> : <ComponentB />}</div>;
};

export default ConditionalComponent;
