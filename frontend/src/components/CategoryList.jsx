import React from 'react'
import HatCard from './Card'

export default function CategoryList({hat}) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' ,gap:'30px',justifyContent:'center'}}>
    {hat.map((item) => (
        <HatCard
         key={item.HatID} hat={item}
        />
    ))}
</div>
  )
}
