import React from "react";
import currency from "../Images/currency.jpg"
import restaurant from "../Images/restaurant.jpg"
import plane from "../Images/plane.jpg"
import confetti from "../Images/confetti.jpg"
import "../Picturetext/Picturetext.css"


const Picturetext = () => {
    return (
        <div className="general2">
            <div className="pace2">
                <div className="imagetext1">
                    <img src={currency} alt= '' />
                    <p className="tiny">By Claire Robinson</p>
                    <h3>Recieve Money In Any Currency With No Fees</h3>
                    <p className="small"> The world is getting smaller and becoming more mobile.
                        So why should you be forced to recieve money in only one... </p>
                </div>
                <div className="imagetext2">
                    <img src={restaurant} alt= '' />
                    <p className="tiny">By Wilson Hutton</p>
                    <h3>Recieve Money In Any Currency With No Fees</h3>
                    <p className="small">The world is getting smaller and becoming more mobile.
                        So why should you be forced to recieve money in only one...</p>
                </div>
                <div className="imagetext3">
                    <img src={plane} alt= '' />
                    <p className="tiny">By Wilson Hutton</p>
                    <h3>Recieve Money In Any Currency With No Fees</h3>
                    <p className="small">The world is getting smaller and becoming more mobile.
                        So why should you be forced to recieve money in only one...</p>
                </div>
                <div className="imagetext4">
                    <img src={confetti} alt= '' />
                    <p className="tiny">By Wilson Hutton</p>
                    <h3>Recieve Money In Any Currency With No Fees</h3>
                    <p className="small">The world is getting smaller and becoming more mobile.
                        So why should you be forced to recieve money in only one...</p>
                </div>
            </div>
        </div>
    )
}

export default Picturetext