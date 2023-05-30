import React from "react";
import "./index.css"
const TuitSummaryItem = (
 {
   tuit = {
     "topic": "Space",
     "userName": "SpaceX",
     "time": "2h",
     "title": `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
     "image": "teslaLogo.png"
   }
 }
) => {
 return(
    <ul className="list-group">
        <li className="list-group-item">
            <div className="row">
                <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-9 col-sm-8">
                    <div>{tuit.userName} . {tuit.time}</div>
                    <div className="fw-bolder">{tuit.topic}</div>
                    <div className="wd-font-tuit-desc">{tuit.title}</div>
                </div>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-4 d-flex align-items-end flex-column">
                    <img width={70} className="float-end rounded-3" src={`/images/${tuit.image}`}/>
                </div>
            </div>
        </li>
    </ul>
 );
};

export default TuitSummaryItem;