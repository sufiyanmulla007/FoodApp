import React, { useEffect, useState } from "react";
import Fooddata from "./FoodData";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Cards from "./Cards";
import "../style/Food.css";
import Set from "./Set";
const Search = () => {
  const [fdata, setFdata] = useState(Fooddata);
  // console.log(fdata);
 
  const [copydata,setCopydata]=useState([]);
  // console.log(copydata);

  //search funtion
  const chanegData = (e) => {
    // console.log(e);
    let getchangedata = e.toLowerCase();

    if (getchangedata === "") {
        setCopydata(fdata);
    } else {
        let storedata = copydata.filter((ele, k) => {
            return ele.rname.toLowerCase().match(getchangedata);
        });

        setCopydata(storedata)
    }
}

  const zoomatologo =
    "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png";

    useEffect(()=>{
      setTimeout(()=>{
        setCopydata(Fooddata);
      },3000);
      
    },[]);

  return (
    <>
      <div className="container">
        <img src={zoomatologo} alt="pic" />
        <h2 style={{ color: "#1b1464", cursor: "pointer" }} className="mt-3">
          Search Filter App
        </h2>
      </div>

      <Form className="d-flex justify-content-center align-items-center mt-3">
      <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">
        <Form.Control
        onChange={(e) => chanegData(e.target.value)}
          type="search"
          placeholder="Search Restaurant"
        />
        </Form.Group>
        <Button className='btn text-light col-lg-1' style={{ background: "#ed4c67" }}>Search</Button>
      </Form>

      <section className="iteam_section mt-4 container">
      <h2 className='px-4' style={{ fontWeight: 400 }}>Restaurant in Nanded Open Now</h2>
      </section>
      <div className="row mt-2 d-flex justify-content-around align-items-center" style={{marginLeft:"5rem"}}>
       {copydata && copydata.length ? <Cards data={copydata}/>:<Set sdata={fdata}/>} 
       
      </div>
    </>
  );
};

export default Search;
