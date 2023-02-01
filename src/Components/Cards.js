import React from 'react'
import Card from 'react-bootstrap/Card';
const Cards = ({data}) => {
   return(
      <>
      {data.map((elem,k)=>{
      return(
         <>
      <Card style={{ width: '22rem',border:"none" }} className="hove mb-4">
    <Card.Img variant="top"  className='cd' src={elem.imgdata} />
     <div className='cardbody'>
    <div className='upper_data '>
    <h4 style={{marginTop:"2px"}}>{elem.rname}</h4>
    <span>{elem.rating}&nbsp;★</span>
    </div>
    <div className='lower_data'>
    <h5>{elem.address}</h5>
    <span>{elem.price}</span>
    </div>
    <div className="extra"></div>
    <div className="last_data ">
   <img src={elem.arrimg} className="limg" alt="" />
   <p>{elem.somedata}</p>
   <img src={elem.delimg} className="laimg" alt="" />
   </div>
    </div> 
    </Card>
         </>
      )
      })
      }
      </>
   )
   
};

export default Cards;
