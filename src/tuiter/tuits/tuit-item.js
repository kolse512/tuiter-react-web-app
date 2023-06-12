import React from "react";
import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";
// import {deleteTuit}  from "../reducers/tuits-reducer";
import {deleteTuitThunk} from "../services/tuits-thunks";

const TuitItem = ({ tuit }) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
      dispatch(deleteTuitThunk(id));
    }
    return (
        <ul className="list-group">
           <li className="list-group-item">
               <div className="row">
                    <div className="col-2 d-flex justify-content-center">
                        <img src={`/images/${tuit.image}`} style={{ height: '50px', width:'50px'}} className="img-fluid img-size rounded-circle" alt="avatar" />
                    </div>
                   
                   <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-9 col-sm-8">
                        <strong>{tuit.userName}</strong>
                        <span style={{ margin: "0px 5px" }}><i style={{
                            color: 'rgb(29, 155, 240)'
                        }} className="bi bi-patch-check-fill"></i></span>
                        < span > <i className="fa-solid fa-circle-check"></i></span>
                        <span className="text-secondary">
                            {tuit.handle} . {tuit.time}
                        </span>
                        <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)}></i>
                        <br/>
                        {tuit.tuit}
                        <TuitStats stats={tuit} key={tuit._id} />
                   </div>
               </div>
           </li>
       </ul>
    );
};
export default TuitItem;