"use client"

import { useCart } from "@/store"
import Link from "next/link";

export const Navbar = () => {
  // const cartItems = useCart((state: any) => state.bears)
  const cartItems = useCart((i: any) => i.bears)
  console.log(cartItems, "cartItems debug");
  return (
    <div className="h-[5vh] flex items-center justify-between mx-20">
      <Link href="/">
        <h4>Clothing</h4>
      </Link>
      <div className="flex items-center gap-2">
        {cartItems}
        <Link href="/cart">
          <h4>cart</h4>
        </Link>
      </div>
    </div>
  )
}

