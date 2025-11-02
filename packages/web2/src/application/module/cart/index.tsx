"use client"

import { useCart } from "@/store"

export const CartModule = () => {
  const cartItem = useCart((s: any) => s.bears)
  return (
    <div className="container mx-auto">
      <h4>Cart Module</h4>
      cart items added
      {cartItem}
    </div>
  )

}
