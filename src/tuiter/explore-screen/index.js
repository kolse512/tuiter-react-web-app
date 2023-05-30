import React from "react";
import TuitSummaryList from "../tuit-summary-list";
import { AiOutlineSearch } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import "./index.css";
function ExploreScreen() {
 return(
   <>
     <div className="row">
       <div className="col-11 position-relative">
         <input placeholder="Search Tuiter"
                className="form-control rounded-pill ps-5"/>
         <AiOutlineSearch className="fs-3 position-absolute 
                       wd-nudge-up"/>
       </div>
       <div className="col-1">
         <GoGear className="wd-top-4 float-end
                       fs-3 position-relative"/>
       </div>
     </div>
     <ul className="nav nav-pills mb-2 mt-2">
       <li className="nav-item">
         <a href="#" className="nav-link active">For You</a>
       </li>
       <li className="nav-item">
         <a href="#" className="nav-link">Trending</a>
       </li>
       <li className="nav-item">
         <a href="#" className="nav-link">News</a>
       </li>
       <li className="nav-item d-none d-xl-block d-xxl-block d-lg-block d-md-block">
         <a href="#" className="nav-link">Sports</a>
       </li>
       <li className="nav-item d-none d-xl-block d-xxl-block d-lg-block">
         <a href="#" className="nav-link">Entertainment</a>
       </li>
     </ul>
     <div className="position-relative mb-2">
       <img src="/images/spacex1.png" className="w-100"/>
       <h1 className="position-absolute wd-nudge-up text-white wd-image-font">
         SpaceX Starship</h1>
     </div>
     <TuitSummaryList/>
   </>
 );
};
export default ExploreScreen;