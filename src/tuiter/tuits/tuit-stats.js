import React, {useState} from "react";
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";
import { FaHeart,FaRegThumbsDown } from "react-icons/fa"; 

const TuitStats = ({ stats }) => {
    const dispatch = useDispatch();
    return (
        <div className="row">
            <ul className="nav nav-fill mt-2 text-secondary">
                <li className="nav-item col col-auto">
                    <i className="bi bi-chat-left-dots me-2"></i> {stats.replies}
                </li>
                <li className="nav-item col col-auto">
                    <i className="bi bi-repeat me-2"></i> {stats.retuits}
                </li>
                <li className="nav-item col col-auto">
                    {stats.liked ? <FaHeart className="text-danger"
                        onClick={() =>
                            dispatch(updateTuitThunk({ ...stats, likes: stats.likes + 1, liked: true }))}/> : 
                            <FaHeart className="no-fill" onClick={() =>
                            dispatch(updateTuitThunk({ ...stats, likes: stats.likes + 1, liked: true }))}/>}
                    <span className="ms-2">{stats.likes}</span>
                </li>
                <li className="nav-item col col-auto">
                    <FaRegThumbsDown
                        onClick={() =>
                            dispatch(updateTuitThunk({ ...stats, dislikes: stats.dislikes + 1 }))}/>
                    <span className="ms-2">{stats.dislikes}</span>
                </li>
                <li className="nav-item col col-auto">
                    <i className="bi bi-upload"></i>
                </li>
            </ul>
        </div>
    )
}
export default TuitStats;