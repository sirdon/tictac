import React from 'react'

const renderXO = icon =>{
    if(icon==='X'){
        return <div className='x'/>
    }else if(icon ==='O'){
        return <div className='o'/>
    }else {
        return null;
    }
}
function Grid(props) {
    const divisions = props.positions.map((value, index) =>{
        return (
            <div onClick={()=>{
                props.setPositions(index)
            }}>
                {renderXO(value)}
            </div>
        )
    })
  return (
    <div className='container'>
      {divisions}
    </div>
  )
}

export default Grid
