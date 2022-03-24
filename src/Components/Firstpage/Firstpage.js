import React from "react";
import phone from "../Images/img1.png"
import "../Firstpage/Firstpage.css"

const Firstpage = () => {
    return (
        <div className="background">
           <div className="spacee">
           <div className="firsttext">
                <h1>Next Generation Digital Banking</h1>
                <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                <button>Request Invite</button>
            </div>
            <div className="firstimg">
                <img src={phone} alt='' />
            </div>
           </div>
        </div>
    )
}

export default Firstpage