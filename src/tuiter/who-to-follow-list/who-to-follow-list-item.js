import React from "react";
import "./index.css";

const WhoToFollowListItem = (
 {
   who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.webp' }
 }
) => {
 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col-2 position relative">
       <img className="rounded-circle wd-float-left" height={48} width={48} src={`/images/${who.avatarIcon}`}/>
     </div>
     <div className="col-8 position-relative">
       <div className="ms-2 fw-bold">{who.userName}</div>
       <div className="ms-2">@{who.handle}</div>
     </div>
     <div className="col-2 d-flex align-items-end flex-column postion-relative">
       <button className="btn btn-primary rounded-pill float-right justify-content-end">Follow</button>
     </div>
   </div>
  </li>
 );
};

export default WhoToFollowListItem;