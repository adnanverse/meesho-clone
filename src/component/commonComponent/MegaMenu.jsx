import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export default function MegaMenu({ items }) {
  return (
    <div className=' border z-[99999999999999]  bg-[white] absolute top-[57px] left-0 menu hidden w-[100%]'>

      {
        items.map((v,i) => {
          return (
            <div className={`text-start px-5 ${(i % 2 == 0) ? 'bg-[#F8F8FF]' : ''}  py-4 `} key={i}>
              <ul className=''>
                <li className=' text-[#9F2089]'> <Link to={'/productlisting'} className='mb-3 font-medium capitalize'> {v.name} </Link>
                  <ul className='mt-3'>
                    {
                      v.subsubCategories.map((v,i) => {
                        return (
                          <Link to={'/productlisting'}>
                          
                          <li className='capitalize text-black pt-2'key={i}>{v.name}</li>
                          </Link>
                        )
                      })
                    }

                  </ul>
                </li>
                


              </ul>
            </div>
          )


        })
      }
    </div>
  )
}
