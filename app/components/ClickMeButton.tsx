'use client'

import React from "react";

const ClickMeButton = () => {
	return (
		<div>
			<button onClick={() => console.log("Click")}>Click me!</button>
		</div>
	);
};

export default ClickMeButton;
