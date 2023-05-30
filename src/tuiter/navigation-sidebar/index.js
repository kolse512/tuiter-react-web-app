import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const NavigationSidebar = () => {
 const { pathname } = useLocation();
 const [ignore, tuiter, active] = pathname.split("/");
 const links = ["notifications", "messages", "bookmarks", "lists", "profile", "more"];
 return (
    <div className="list-group position-relative">
        <Link to={"/"} className={`list-group-item ${active === "Tuiter".toLowerCase() ? "active" : ""}`} >
            <i className="bi bi-twitter wd-icon-width  mt-2"></i> 
        </Link>
        <Link to={"/tuiter/home"} className={`list-group-item ${active === "Home".toLowerCase() ? "active" : ""}`} >
            <div className="d-flex align-items-center">
                <i className="bi bi-house-door-fill wd-icon-width mt-2"></i> 
                <span className="ms-2 d-xl-block d-xxl-block d-none">Home</span>
            </div>
        </Link>
        <Link to={"/tuiter/explore-react"} className={`list-group-item ${active === "Explore-react".toLowerCase() ? "active" : ""}`} >
            <div className="d-flex align-items-center">
                <i className="bi bi-hash wd-icon-width mt-2"></i> 
                <span className="ms-2 d-xl-block d-xxl-block d-none">Explore</span>
            </div>
        </Link>
        <Link to={"/tuiter/notifications"} className={`list-group-item ${active === "Notifications".toLowerCase() ? "active" : ""}`}>
            <div className="d-flex align-items-center">
                <i className="bi bi-bell-fill wd-icon-width mt-2"></i> 
                <span className="ms-2 d-xl-block d-xxl-block d-none">Notifications</span>
            </div>
        </Link>
        <Link to={"/tuiter/messages"} className={`list-group-item ${active === "Messages".toLowerCase() ? "active" : ""}`} >
            <div className="d-flex align-items-center">
                <i className="bi bi-envelope-fill wd-icon-width mt-2"></i> 
                <span className="ms-2 d-xl-block d-xxl-block d-none">Messages</span>
            </div>
        </Link>
        <Link to={"/tuiter/bookmarks"} className={`list-group-item ${active === "Bookmarks".toLowerCase() ? "active" : ""}`} >
            <div className="d-flex align-items-center">
                <i className="bi bi-bookmark-fill wd-icon-width mt-2"></i> 
                <span className="ms-2 d-xl-block d-xxl-block d-none">Bookmarks</span>
            </div>
        </Link>
        <Link to={"/tuiter/lists"} className={`list-group-item ${active === "Lists".toLowerCase() ? "active" : ""}`} >
            <div className="d-flex align-items-center">
                <i className="bi bi-list-ul wd-icon-width mt-2"></i> 
                <span className="ms-2 d-xl-block d-xxl-block d-none ">Lists</span>
            </div>
        </Link>
        <Link to={"/tuiter/profile"} className={`list-group-item ${active === "Profile".toLowerCase() ? "active" : ""}`} >
            <div className="d-flex align-items-center">
                <i className="bi bi-person-fill wd-icon-width mt-2"></i> 
                <span className="ms-2 d-xl-block d-xxl-block d-none ">Profile</span>
            </div>
        </Link>

        <Link to={"/tuiter/more"} className={`list-group-item ${active === "More".toLowerCase() ? "active" : ""}`} >
            <div className="d-flex align-items-center">
                <i className="bi bi-three-dots wd-icon-width mt-2"></i> 
                <span className="ms-2 d-xl-block d-xxl-block d-none">More</span>
            </div>
        </Link>
    </div>
 );
};

export default NavigationSidebar;