import { link } from "fs";
import Link from "next/link";
import React from "react";

interface User {
	id: number;
	name: string;
}

const UsersPage = async () => {
	// const response = await fetch("https://jsonplaceholder.typicode.com/users", { next: { tags: ["users"] } });
	const response = await fetch("http://localhost:5103/api/MovieItems", { cache: 'no-store' });
	const users: User[] = await response.json();

	return (
		<>
      <Link href='/'>Back</Link>
			<h1>Users</h1>
			<p>{new Date().toLocaleTimeString()}</p>
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</>
	);
};

export default UsersPage;
