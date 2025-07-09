import React, { useContext } from 'react'
import Productcard from './product/Productcard'
import { Commoncontext } from './context/Context.jsx'


export default function Wishlist() {
  let { addwishlist, wish } = useContext(Commoncontext)
  return (
    <div className='flex min-h-[45vh] justify-center laptop:gap-5 flex-wrap'>

      {
        (wish.length>0) ?       
        wish.map((v, i) => {
          return (
            <Productcard v={v} key={i} />
          )
        })
        :
        <h1 className='text-4xl bold my-auto '>Your wishlist is empty</h1>
}
    </div>
  )
}
