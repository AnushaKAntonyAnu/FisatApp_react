import React, { useState } from 'react'
import NavBar from './NavBar'

const DeleteFisat = () => {
    const[data,setData]=useState(
        {
            "sname":""
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
        <br></br><h4><u><center>DELETE STUDENT</center></u></h4><br></br>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl">
                            <label htmlFor="" className="form-label">Student Name</label>
                            <input type="text" className="form-control" name='sname'value={data.sname} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                           <center> <button className="btn btn-danger" onClick={readValue}>Delete</button></center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteFisat