import { link } from "fs";
import Link from "next/link";
import React from "react";

interface User {
	id: number;
	name: string;
}

const UsersPage = async () => {
	// const response = await fetch("https://jsonplaceholder.typicode.com/users", { next: { revalidate: 10 } });
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	const users: User[] = await response.json();

	return (
		<>
			<h1>Users</h1>
      		<p>{new Date().toLocaleTimeString()}</p>
			<ul>
				{users.map((user) => (
					<div key={user.id}>
						<Link href={`/users/${user.id}`}>{user.name}</Link>
					</div>
				))}
			</ul>
		</>
	);
};

export default UsersPage;
