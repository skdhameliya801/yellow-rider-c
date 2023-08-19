import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login/Login';
import All_passengers_list from './All Passengers List/All_passengers_list';
import Forgot_Password from './Forgot Password/Forgot_Password';
import Passenger_View_1 from './Passenger View - 1/Passenger_View_1';
import All_Passengers_List_1 from './All Passengers List 1/All_Passengers_List_1';
import Login_1 from './Login 1/Login_1';
import Register_Rider from './Register/Register_Rider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/riderregisterbyadmin" element={<Register_Rider />} />
      <Route exact path="/" element={<App />} />
      <Route exact path="/login" element={<Login_1 />} />
      <Route exact path="/passenger_list" element={<All_Passengers_List_1 />} />
      <Route exact path="/passenger_form" element={<Passenger_View_1 />} />
      {/* <Route exact path="/choose_start_end_cities" element={<Passenger_View_1 />} /> */}
      <Route exact path="/forgot_password" element={<Forgot_Password />} />
      {/* <Route exact path="/rider_info" element={<Rider_Dashboard />} /> */}
      {/* <Route exact path="/admin007" element={<Admin_View />} /> */}
      <Route exact path="*" element={<h1> NOT FOUND </h1>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
