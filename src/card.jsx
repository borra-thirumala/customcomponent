import React from 'react'

const Card = () => {
    let data={
        name:"Thirumala",
        age:22,
        city:"hyd"
    }
  return (
    
    <div>
        Card
        <h1>{data.name}</h1>
        <i>{data.city}</i>
    </div>
  )
}

export default Card