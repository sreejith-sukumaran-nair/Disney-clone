import React from 'react'

function HeaderItems({name,Icon}) {
  return (
    <div className='text-white flex items-center gap-3 text-[12px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-2 md:mb-0'>
      <Icon/>
      <h2 className=''>
        {name}
      </h2>
    </div>
  )
}

export default HeaderItems