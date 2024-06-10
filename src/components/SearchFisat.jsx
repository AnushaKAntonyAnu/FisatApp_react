import React, { useState } from 'react'
import NavBar from './NavBar'

const SearchFisat = () => {
    const[data,setData]=useState(
        {
            "firstname":""
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
        <NavBar/>
         <br></br><h4><u><center>SEARCH STUDENT</center></u></h4><br></br>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl">
                            <label htmlFor="" className="form-label">Student FirstName</label>
                            <input type="text" className="form-control" name='firstname' value={data.firstnamename} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                           <center> <button className="btn btn-success" onClick={readValue}>Search</button></center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchFisat