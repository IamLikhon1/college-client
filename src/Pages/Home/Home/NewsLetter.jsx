import { AiOutlineMail } from "react-icons/ai";
const NewsLetter = () => {
    return (
        <div className="bg-sky-900 py-20 px-20 text-white">
            <div className="md:flex gap-8  justify-center"data-aos="zoom-in"
        data-aos-duration="2000">
                <div className="text-9xl">
                    <AiOutlineMail></AiOutlineMail>
                    </div>

                    <div>
                        <div className="w-full">
                            <h2 className="text-4xl space-y-3">Subscribe For Newsletter</h2>
                            <h4 className="text-base mt-3">Manage Your Business With Our Software</h4>
                        </div>
                    </div>

                    <div className="md:flex my-5 md:my-0 w-full">
                    <div className="form-control w-full ">
                    <input type="text" placeholder="Email Address..." className="input input-bordered w-full text-black " />
                    </div>
                    <button className="btn rounded-xl my-5 md:my-0 bg-[#ff4d89] hover:bg-[#ff4d89] text-white ml-1">Subscribe</button>
                    </div>


            </div>
            
        </div>
    );
};

export default NewsLetter;