import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddFisat = () => {
    const [data, setData] = useState(
        {
            "firstname": "",
            "lastname": "",
            "college": "",
            "dob": "",
            "course": "",
            "email": "",
            "mobile": "",
            "address": ""
        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("https://courseapplogix.onrender.com/addstudents", data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") 
                 {
                   alert("Successfully Added") 
                } else {
                    alert("error")
                }
            }
        ).catch().finally()
    }
    return (
        <div>
            <NavBar />
            <br></br><h4><u><center>REGISTRATION FORM</center></u></h4><br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">First Name</label>
                                <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Last Name</label>
                                <input type="text" className="form-control" name='lastname' value={data.lastname} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">College</label>
                                <input type="text" className="form-control" name='college' value={data.college} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">DOB</label>
                                <input type="date" name="dob" id="" className="form-control" value={data.dob} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Address</label>
                                <textarea name="address" id="" className="form-control" value={data.address} onChange={inputHandler}></textarea>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Course</label>
                                <select name="course" value={data.course} onChange={inputHandler} id="" className="form-control">
                                    <option value="MCA">MCA</option>
                                    <option value="MBA">MBA</option>
                                    <option value="M.TECH">M.TECH</option>
                                    <option value="B.TECH">B.TECH</option>
                                </select>
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Mobile No</label>
                                <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">E-Mail</label>
                                <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <center><button className="btn btn-success" onClick={readValue}>Submit</button></center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddFisat