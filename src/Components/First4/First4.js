import React from 'react'
import API from "../Images/icon-api.svg"
import "../First4/First4.css"

const First4 = () => {
  return (
    <div className='main'>
        <div className='pace'>
        <div className='text1'>
            <img src={API} alt='' />
            <h3>Online Banking</h3>
            <p> Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world. Simple Budgeting See exactly where your money goes each month. </p>
        </div>
        <div className='text2'>
        <img src={API} alt='' />
            <h3>Simple Budgeting</h3>
            <p> Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world. Simple Budgeting See exactly where your money goes each month. </p>
        </div>
        <div className='text3'>
        <img src={API} alt='' />
            <h3>Fast Onboarding</h3>
            <p> Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world. Simple Budgeting See exactly where your money goes each month. </p>
        </div>
        <div className='text4'>
            <img src={API} alt='' />
            <h3>Open API</h3>
            <p> Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world. Simple Budgeting See exactly where your money goes each month. </p></div>
        </div>
    </div>
  )
}

export default First4