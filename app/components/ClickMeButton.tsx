'use client'

import { useRouter } from "next/navigation";
import React from "react";

const ClickMeButton = () => {
	const router  = useRouter();

	return (
		<div>
			<button onClick={() => {
				router.push('/users')
				router.refresh()
				}}>Click me!</button>
		</div>
	);
};

export default ClickMeButton;
