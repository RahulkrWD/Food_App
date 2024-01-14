import React from 'react'

function Card({items}) {
    
  const array = ["1", "2", "3", "4", "5", "6", "7"]
 
let options = items.options[0];
let priceOptions = Object.keys(options);


    
  return (
    <>
       <div className="card m-3 card-container" style={{"width": "18rem"}}>
  <img src={items.img} className="card-img-top card-image" alt=""/>
  <div className="card-body">
    <p className="card-text">{items.name}</p>
<div className='container w-100 display'>
  <select>
  {array.map((data)=>(
   <option value={data}>{data}</option>
  ))}
  </select>
 
 <select>
 {priceOptions.map((data)=>(
  <option value={data}>{data}</option>
 ))}
 </select>

</div>
<div>
    <p>Total price:- {items.cost}</p>
  </div>
  </div>
</div>
    </>
  )
}

export default Card
