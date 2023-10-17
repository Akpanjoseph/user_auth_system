"use client"

import { useAppSelector } from "@/app/redux/store"


export default function page() {
  const store = useAppSelector(state => state.authReducer.value)
  return (
    <div>
      <p>username: {store.username}</p>
      <p>email: {store.email}</p>
    </div>
  )
}
