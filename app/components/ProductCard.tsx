import React from 'react'
import ClickMeButton from "./ClickMeButton";
import { revalidateTag } from "next/cache";

const ProductCard = () => {
  return (
    // a lot of content
    <div>
        <ClickMeButton/>
    </div>
  )
}

export default ProductCard