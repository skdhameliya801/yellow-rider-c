import React from 'react'
import { Link } from 'react-router-dom'
import Whatsapp_Button from './Whatsapp_Button'
import "./Trip_Card.css"

const Trip_Card = (props) => {
  return (
    <>
        <div class="card" style={{"background":"white", "overflow":"auto","width":"100%","height":"43vh"}}>
            <div class="card-body">
                {/* <h5 class="card-title">Card title</h5> */}
                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}

                {/* https://www.google.com/maps/place/ */}
                <p><b>Name : </b>{props.each_trip.full_name}</p>
                
                <p>
                    <b>Pickup Address : </b> <br />
                    <a href={`https://www.google.com/maps/place/${props.each_trip.full_pickup_address,props.each_trip.pickup_city}`} target='_blank'> {props.each_trip.full_pickup_address}, {props.each_trip.pickup_city} </a> 
                </p>

                <p>
                    <b>Drop Address : </b> <br />
                    <a href={`https://www.google.com/maps/place/${props.each_trip.full_drop_address,props.each_trip.drop_city}`} target='_blank'> {props.each_trip.full_drop_address}, {props.each_trip.drop_city} </a>
                </p>
                
                <div className='row'>
                    <div className='col-6'>
                        <p>
                            <b>Arrive by Time : </b> <br />
                            {props.each_trip.arrive_by_time}
                        </p>
                    </div>
                    <div className='col-6'>
                        <p>
                            <b>Trip Date : </b> <br />
                            {props.each_trip.trip_date}
                        </p>
                    </div>
                </div>
                
                {/* <Whatsapp_Button user_in_session={props.user_in_session} /> */}
                {/* <button class="button"><i class="fas fa-user"></i> Button 1</button> */}

                {
                    // props.user_in_session == 'g'
                    // ? <Link to={`https://wa.me/5483333597?text= *Hi, I am a rider and want to subscribe.*`}> <button class="btn btn-success"><i class="fa fa-whatsapp" aria-hidden="true"> Subscribe </i> </button> </Link>  
                    // : <a type='button' href={`https://wa.me/${props.each_trip?.phone_no.split("#")[0]}?text= *Hi ${props.each_trip?.full_name}*, %0A *Pickup Address :* ${props.each_trip?.full_pickup_address}, ${props.each_trip?.pickup_city}, %0A *Drop Address :* ${props.each_trip?.full_drop_address}, ${props.each_trip?.drop_city}, %0A *Arrive by Time :* ${props.each_trip?.arrive_by_time}, %0A *Trip Date :* ${props.each_trip?.trip_date}, %0A %0A *You are looking for rider for this trip, Right?*`} target='_blank' className='btn btn-success'><i class="fa fa-whatsapp" aria-hidden="true">WhatsApp</i></a>
                }
                <a type='button' href={`https://wa.me/${props.each_trip?.phone_no.split("#")[0]}?text= *Hi ${props.each_trip?.full_name}*, %0A *Pickup Address :* ${props.each_trip?.full_pickup_address}, ${props.each_trip?.pickup_city}, %0A *Drop Address :* ${props.each_trip?.full_drop_address}, ${props.each_trip?.drop_city}, %0A *Arrive by Time :* ${props.each_trip?.arrive_by_time}, %0A *Trip Date :* ${props.each_trip?.trip_date}, %0A %0A *You are looking for rider for this trip, Right?*`} target='_blank' className='btn btn-success'><i class="fa fa-whatsapp" aria-hidden="true"> Chat</i></a>

                    
                
                
                
                
                
                
            </div>
        </div>
    </>
  )
}

export default Trip_Card