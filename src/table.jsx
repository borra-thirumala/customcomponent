import React from 'react'
const Table = ({cols,users}) => {
    console.log(cols,users)
  return (
    <div>

        <table border={"2px"}>
          <thead>
              <tr style={{color:"red"}}>

                {cols.map((e,i)=>{
                    return <td key={i} style={{fontWeight:"bold"}}>{e}</td>
                })}
            </tr>
          </thead>


           <tbody>
             {users.map((e,i)=>{

               return <tr key={i}>{e.map((ele,i)=>{
                return <td key={i}>{ele}</td>
               })}</tr>

            })}
             
           </tbody>

        </table>

    </div>
  )
}

export default Table
