import React, { useEffect, useState } from 'react'
import { CONSTANTS } from '../CONSTANTS'
import axios from 'axios'; 
import Swal from 'sweetalert2'

const Passenger_View_1 = () => {

    let [submitted, setSubmitted] = useState(false)
    let [isLoader, setIsLoader] = useState(false)
    let [submitted_trip_data, setSubmitted_trip_data] = useState('')


    // useEffect(() => {
    //     document.getElementById("response_message").style.display = "none";
    // }, [])

    let sweet_alert = (event) => {
        event.preventDefault();

        Swal.fire({
            title: 'Are you sure want to post this trip?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#198754',
            cancelButtonColor: '#dc3545',
            confirmButtonText: 'Yes, post it!'
        }).then((result) => {
            if (result.isConfirmed) {
                passenger_form_submit()
            }
        })
    }
    
    let passenger_form_submit = () => {
        // event.preventDefault();
        
        document.getElementById("submit_ride_detail_btn").innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>';

        let full_name = document.getElementById("full_name").value
        let full_pickup_address = document.getElementById("full_pickup_address").value
        let pickup_city = document.getElementById("pickup_city").value.toUpperCase()
        
        // let pickup_landmark = document.getElementById("pickup_landmark").value
        let phone_no = document.getElementById("phone_no").value
        let full_drop_address = document.getElementById("full_drop_address").value
        let drop_city = document.getElementById("drop_city").value.toUpperCase()
        let arrive_by_time = document.getElementById("arrive_by_time").value
        
        // let arrive_by_HH = document.getElementById("arrive_by_HH").value
        // let arrive_by_MM = document.getElementById("arrive_by_MM").value
        // let arrive_by_am_pm = document.getElementById("arrive_by_am_pm").value

        let trip_data = JSON.stringify({
            full_name,
            full_pickup_address,
            // pickup_landmark,
            phone_no,
            full_drop_address,
            arrive_by_time,
            pickup_city,
            drop_city,
            "trip_date": (new Date().getFullYear() + "-" +(new Date().getMonth()+1) +"-"+ new Date().getDate()).toString()
        });

        console.log(trip_data)
        
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: CONSTANTS.server_url + '/trip_data',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : trip_data
        };

        axios.request(config)
            .then((response) => {
                console.log(response.data)
                if(response.data.response == "trip added"){
                    setSubmitted_trip_data(response.data.rider_data)
                    document.getElementById("submit_ride_detail_btn").innerHTML = "Submit"
                    // document.getElementById("response_message").style.display = "block";
                    // document.getElementById("response_message").innerHTML = response.data.message;
                    document.getElementById("contact_us_form").style.display = "none";
                }
                else{
                    document.getElementById("submit_ride_detail_btn").innerHTML = "Submit"
                    // document.getElementById("response_message").style.display = "block";
                    // document.getElementById("response_message").innerHTML = response.data.message
                    document.getElementById("contact_us_form").style.display = "none";
                }
            })
            .catch((error) => {
                console.log(error);
            });        
    }

    return (
        <div className="container mt-5 mb-5 pl-2 pr-2">
            
            {
                submitted_trip_data && <div className='mt-5'>
                    <h3 className='mt-5 p-5'>Hey {submitted_trip_data.full_name}, 
                        <span id="response_message" className='text-center justify-content-center align-content-center'> We got your Trip details as mentioned below. You will soon get whatsapp messages from riders.</span>
                    </h3>
                    
                    <div className='m-5 text-center p-5' style={{"boxShadow":"0 0 10px 2px green"}}>
                        <p><b>Pickup Address :</b> {submitted_trip_data.full_pickup_address}, {submitted_trip_data.pickup_city}</p>
                        <p><b>Drop Address :</b> {submitted_trip_data.full_drop_address}, {submitted_trip_data.drop_city}</p>
                        <p><b>Arrive by Time :</b> {submitted_trip_data.arrive_by_time}</p>
                        <p><b>Phone No :</b> {submitted_trip_data.phone_no}</p>
                        <p><b>Trip Date :</b> {submitted_trip_data.trip_date}</p>
                        <h3 className='mt-5'>Thank You..!, {submitted_trip_data.full_name}</h3>
                    </div>
                </div>
            }
        
            <form 
                id='contact_us_form'
                method='POST'
                onSubmit={sweet_alert}>
                
                <div className="row mt-5 justify-content-center">
                    <h1 className='text-center'><b>Want ride on {(new Date().getFullYear() + "-" +(new Date().getMonth()+1) +"-"+ new Date().getDate()).toString()} ? </b> </h1>
                    <div className="col-sm-6 mt-5">
                        <label className="form-label"> <b>*Full Name : </b> </label>
                        <input type="text" id='full_name' name='entry.578647043' className="form-control border-5" required />
                    </div>
                </div>

                <div className="row mt-5 justify-content-center">
                    <div className="col-sm-6">
                    <label className="form-label"> <b>*Pickup Address : </b> <br/> (Format :  House no, Street/Apartment name, Pincode)</label>
                    <input type="text" id='full_pickup_address' name='entry.946132332' className="form-control border-5" required />
                    </div>
                </div>

                <div className="row mt-5 justify-content-center">
                    <div className="col-sm-6">
                    <label className="form-label"> <b>*Pickup city : </b> </label>
                    <input type="text" id='pickup_city' className="form-control border-5" required />
                    </div>
                </div>

                {/* <div className="row mt-5 justify-content-center">
                    <div className="col-sm-6">
                    <label className="form-label"> <b>*Nearest Landmark of above Pickup Address : </b> </label>
                    <select className="form-select border-5" id='pickup_landmark' name='entry.1343336432' required>
                        <option selected>Choose...</option>
                        <option>1.0 - Conestoga Mall</option>
                        <option>2.0 - University of Waterloo</option>
                        <option>3.0 - Conestoga College Waterloo Campus</option>
                        <option>4.0 - Sobeys Columbia Laurelwood</option>
                        <option>5.0 - Walmart at Boardwalk</option>
                        <option>6.0 - Central Frederick</option>
                        <option>7.0 - Walmart at Sunrise Shopping Centre</option>
                        <option>8.0 - Block Line Station</option>
                        <option>9.0 - Fairview Park</option>
                        <option>10.0 - Doon South</option>
                        <option>11.0 - Conestoga College Doon Campus</option>
                        <option>12.0 - Toyota Motor Manufacturing Inc Cambridge</option>
                        <option>13.0 - Preston Cambridge</option>
                        <option>14.0 - Walmart at Pinebush Cambridge</option>
                        <option>15.0 - Hespeler Mill Pond Cambridge</option>
                        <option>16.0 - Fiddlesticks Cambridge</option>
                        <option>17.0 - Biryaniwalla Cambridge</option>
                        <option>18.0 - Cambridge Cricket Club</option>
                        <option>19.0 - Southwood Cambridge</option>
                        <option>20.0 - Churchill Park Cambridge</option>
                        <option>21.0 - Decaro Park Cambridge</option>
                    </select>
                    </div>
                </div> */}

                <div className="row mt-5 justify-content-center">
                    <div className="col-sm-6">
                    <label className="form-label"> <b>*Drop Address : </b> <br/> (Format :  House no, Street/Apartment name, Pincode)</label>
                    <input type="text" className="form-control border-5" id='full_drop_address' name='entry.1059112272' required />
                    </div>
                </div>

                <div className="row mt-5 justify-content-center">
                    <div className="col-sm-6">
                    <label className="form-label"> <b>*Drop city : </b> </label>
                    <input type="text" id='drop_city' className="form-control border-5" required />
                    </div>
                </div>

                <div className="row mt-5 justify-content-center">
                    <div className="col-sm-6">
                    <label className="form-label"> <b>*Phone No :</b> <br/> (Format : only 10 digits canadian number, avoid country code)  </label>
                    <input type="number" className="form-control border-5" id='phone_no' name='entry.1434501103' required />
                    </div>
                </div>
                
                <div className="row mt-5 justify-content-center">
                    <div className="col-sm-6">
                    <label className="form-label"> <b>*Arrive By Time at Drop Address : </b> </label>
                    {/* <input type="time" className="form-control border-5" id='arrive_by_time' name='entry.452012505' required /> */}
                    <select className="form-select border-5" id='arrive_by_time' name='entry.1343336432' required>
                        <option selected>Choose...</option>
                        <option value="12:30 AM">12:30 AM</option>
                        <option value="1:00 AM">1:00 AM</option>
                        <option value="1:30 AM">1:30 AM</option>
                        <option value="2:00 AM">2:00 AM</option>
                        <option value="2:30 AM">2:30 AM</option>
                        <option value="3:00 AM">3:00 AM</option>
                        <option value="3:30 AM">3:30 AM</option>
                        <option value="4:00 AM">4:00 AM</option>
                        <option value="4:30 AM">4:30 AM</option>
                        <option value="5:00 AM">5:00 AM</option>
                        <option value="5:30 AM">5:30 AM</option>
                        <option value="6:00 AM">6:00 AM</option>
                        <option value="6:30 AM">6:30 AM</option>
                        <option value="7:00 AM">7:00 AM</option>
                        <option value="7:30 AM">7:30 AM</option>
                        <option value="8:00 AM">8:00 AM</option>
                        <option value="8:30 AM">8:30 AM</option>
                        <option value="9:00 AM">9:00 AM</option>
                        <option value="9:30 AM">9:30 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="10:30 AM">10:30 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="11:30 AM">11:30 AM</option>
                        <option value="11:55 AM">11:55 AM</option>
                        <option value="12:30 PM">12:30 PM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="1:30 PM">1:30 PM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="2:30 PM">2:30 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                        <option value="3:30 PM">3:30 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                        <option value="4:30 PM">4:30 PM</option>
                        <option value="5:00 PM">5:00 PM</option>
                        <option value="5:30 PM">5:30 PM</option>
                        <option value="6:00 PM">6:00 PM</option>
                        <option value="6:30 PM">6:30 PM</option>
                        <option value="7:00 PM">7:00 PM</option>
                        <option value="7:30 PM">7:30 PM</option>
                        <option value="8:00 PM">8:00 PM</option>
                        <option value="8:30 PM">8:30 PM</option>
                        <option value="9:00 PM">9:00 PM</option>
                        <option value="9:30 PM">9:30 PM</option>
                        <option value="10:00 PM">10:00 PM</option>
                        <option value="10:30 PM">10:30 PM</option>
                        <option value="11:00 PM">11:00 PM</option>
                        <option value="11:30 PM">11:30 PM</option>
                        <option value="11:55 PM">11:55 PM</option>
                    </select>
                    </div>
                </div>

                {/* <div className="row mt-5 justify-content-center">
                    <div className="col-sm-6">
                    <label className="form-label"> <b>*Arrive By Time at Drop Address : </b> <br/> (Format : hh:mm AM/PM)</label>
                        <div className="row justify-content-center align-items-center g-2">
                        <div className="col-4">
                            <input type="text" className="form-control border-5" id='arrive_by_HH' placeholder='hh' />
                        </div>
                        <div className="col-4">
                            <input type="text" className="form-control border-5" id='arrive_by_MM' placeholder='mm' />
                        </div>
                        <div className="col-4">
                            <select className="form-select border-5" id='arrive_by_am_pm'>
                            <option selected>AM</option>
                            <option>PM</option>
                            </select>
                        </div>
                        </div>
                    </div>
                </div> */}

                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                    <center>
                        <button type="submit" id='submit_ride_detail_btn' className='btn btn-success'>Submit</button>
                    </center>
                    </div>
                </div>
            
            </form>
        </div>
    )
}

export default Passenger_View_1