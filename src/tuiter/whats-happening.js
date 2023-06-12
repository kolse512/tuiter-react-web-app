import React, {useState} from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { HiOutlineGif } from "react-icons/hi2";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiBold, BiItalic } from "react-icons/bi";
import { TbCalendarStats } from "react-icons/tb";
import { BsEmojiSmile } from "react-icons/bs";
import {MdFormatListBulleted} from "react-icons/md";
// import {createTuit} from "./reducers/tuits-reducer";
import { createTuitThunk } from "./services/tuits-thunks";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        const newTuit = {
            tuit: whatsHappening
        }
        dispatch(createTuitThunk(newTuit));
        setWhatsHappening("");
    }
    return (
        <div className="row">
            <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 d-flex justify-content-center">
                <img src="/images/nasa.webp" width="50px" height="40px"/>
            </div>
            <div className="col-xxl-11 col-xl-11 col-lg-11 col-md-11 col-sm-11 position-relative">
                <textarea value={whatsHappening} placeholder="What's happening?"
                    className="form-control border-0"
                    onChange={(event) => setWhatsHappening(event.target.value)}>
                </textarea>
            <div>
            <button className="rounded-pill btn btn-primary float-end mt-4 ps-3 pe-3 fw-bold"
                    onClick={tuitClickHandler}>
                Tuit
            </button>
            <br/>
            <div className="text-primary fs-3">
                <AiOutlinePicture className="me-3"/>
                <HiOutlineGif className="me-3"/>
                <MdFormatListBulleted className="me-3"/>
                <BsEmojiSmile className="me-3"/>
                <TbCalendarStats className="me-3"/>
                <HiOutlineLocationMarker className="me-3"/>
                <BiBold className="me-3"/>
                <BiItalic className="me-3"/>
            </div>
        </div>
        </div>
        <div className="col-12"><hr/></div>
        </div>
    );
}

export default WhatsHappening;