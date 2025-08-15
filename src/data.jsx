import React from 'react'
import Table from './table.jsx'
const Data = () => {

    const cols=["name","email","mob"]
    let data=[["sashi","sashi@gmail.com","1234567890"],
    ["thirumala","thirumala@gmail.com","9874563210"]]


  return (
    <div><Table cols={cols} users={data}/></div>
  )
}

export default Data