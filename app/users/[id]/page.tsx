import Link from "next/link";
import React from 'react'

// export async function generateStaticParams() {
//     const users = await fetch(`https://jsonplaceholder.typicode.com/users`).then((res) => res.json())
   
//     return users.map((user: {id: number, name: string}) => ({
//       id: user.id.toString(),
//     }))
// }

interface Pars{
    params: { id: string }
}

const User = async ({ params }: Pars) => {
  // const user = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`).then((res) => res.json())
    
  return (
    <>
      <Link href="/users">Back</Link>
      {/* <div>{user.phone}</div> */}
    </>
  )
}

export default User