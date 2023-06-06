import React from "react";

const TuitStats = ({ stats }) => {
    return (
        <div className="row">
            <ul className="nav nav-fill mt-2 text-secondary">
                <li className="nav-item col col-3">
                    <i className="bi bi-chat-left-dots me-2"></i> {stats.replies}
                </li>
                <li className="nav-item col col-3">
                    <i className="bi bi-repeat me-2"></i> {stats.retuits}
                </li>
                <li className="nav-item col col-3">
                    <span style={{ marginRight: '5px' }}> {stats.liked ? <i style={{ color: 'red' }} className="bi bi-heart-fill me-2"></i> : <i className="bi bi-heart"></i>}</span>{stats.likes}
                </li>
                <li className="nav-item col col-3">
                    <i className="bi bi-upload"></i>
                </li>
            </ul>
        </div>
    )
}
export default TuitStats;