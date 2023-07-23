import { FaBook, FaCalendarAlt, FaPhone } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BiLocationPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

const MySingleCollege = ({singleCollege}) => {
    const{address,date,email,name,number,subject}=singleCollege
    return (
        <div className="mt-8">
            <div className="md:card w-full h-full bg-base-300 shadow-2xl hover:bg-sky-200 duration-500">
        <div className="card-body">
            <h2 className="card-title">Name : {name}</h2>
            <div className="md:flex gap-3 my-5">
                <h2 className="">Contact Information:-</h2>
                <span className="font-semibold md:flex items-center"><AiOutlineMail></AiOutlineMail></span>{email}
               <span className="font-semibold items-center md:flex"><BiLocationPlus></BiLocationPlus></span>{address}
                <span className="font-semibold md:flex items-center"><FaPhone></FaPhone></span>{number}
            </div>

            <div className="md:flex gap-10 my-3">
                <span className="md:flex items-center gap-1 font-semibold">Date: <span className="text-orange-500"><FaCalendarAlt></FaCalendarAlt></span>{date}</span>
                <span className="flex items-center font-semibold gap-1">Subject: <span className="text-orange-500"><FaBook></FaBook></span>{subject}</span>
            </div>
            <div className="card-actions justify-end">
            <Link to='/review'><button className="btn btn-primary">Review</button></Link>
            </div>
        </div>
        </div>
            
        </div>
    );
};

export default MySingleCollege;