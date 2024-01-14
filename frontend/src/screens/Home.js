import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import axios from "axios";

function Home() {
  const [search, setSearch] = useState("");
  const [fdData, setData] = useState([]);
  const [fdCategory, setCategory] = useState([]);

  async function foodData() {
    try {
      let response = await axios.post("http://localhost:6600/foodData", fdData);
      // console.log(res.data)
      setData(response.data);
    } catch (error) {
      console.error(error.response.data.error);
    }
  }

  async function foodCategory() {
    try {
      let response = await axios.post( "http://localhost:6600/foodCategory",fdCategory );
      // console.log(res);
      setCategory(response.data);
    } catch (error) {
      console.error(error.response.data.error);
    }
  }
  useEffect(() => {
    foodData();
    foodCategory();
  });
// foodData();
// foodCategory()


  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
      <div className='main-container'>
    <div className='search-area'>
    <input type="search" name="search" value={search} onChange={(e)=> setSearch(e.target.value)} className='search-input'  placeholder=' Search in here...'/>
    <button className='btn btn-danger m-4'>Search</button>
    </div>
   
   </div>
      </div>
      {fdCategory.map((data, index) => (
        <div className="container">
          <div key={index} className="m-3 text">
            {data.CategoryName}
          </div>
          <div className="display-flex">
          {fdData.filter((item) => item.CategoryName === data.CategoryName && (item.name.toLowerCase().includes(search.toLowerCase())))
            .map((filterItem, index) => (
              <div>
                <Card key={index} items={filterItem}/>
              </div>
            ))}
            </div>
        </div>
      ))}
    </>
  );
}

export default Home;
