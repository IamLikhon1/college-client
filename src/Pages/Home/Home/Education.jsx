import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
    return (
        <div>
             <div className="uppercase mx-10 mt-16"data-aos="zoom-in"
        data-aos-duration="1000">
          <span className=" flex  items-center text-orange-500"> <FaGraduationCap></FaGraduationCap>  <h2 className="text-xl ml-2"> Education</h2></span>
            <h2 className="text-4xl mt-4">Expand your wings with Education</h2>
         </div>

         <div className='grid md:grid-cols-4 gap-7 my-16 mx-20'data-aos="zoom-in"
        data-aos-duration="1500">

            {/* one */}

            <div className="card card-compact w-full  bg-base-300 shadow-2xl rounded-xl"data-aos="zoom-in"
        data-aos-duration="2000">
            <figure><img className='w-full h-full' src="https://img.freepik.com/premium-vector/outline-line-business-icon-set_175838-423.jpg?w=740" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title my-3">Human Resource</h2>
                <p>Human Resource Management (HRM) education focuses on the management of human capital within organizations.</p>
                <div className="card-actions justify-left my-2">
                <button className="btn rounded-xl bg-[#ff4d89] hover:bg-[#ff4d89] text-white">Reade More</button>
                </div>
            </div>
            </div>

            {/* one */}

            {/* two */}

            <div className="card card-compact w-full  bg-base-300 shadow-2xl rounded-xl"data-aos="zoom-in"
        data-aos-duration="2000">
            <figure><img className='w-full h-full' src="https://img.freepik.com/free-vector/business-background-design_1095-394.jpg?w=740&t=st=1690199939~exp=1690200539~hmac=7704ab3eb7dd478c83a71a245cbfd89a26004c905c88564cab3f7ed5a2e45ccd" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title my-3">Boosting Confidence</h2>
                <p>Participating in arts education provides a platform for students to express themselves authentically and build self-confidence. </p>
                <div className="card-actions justify-left my-2">
                <button className="btn rounded-xl bg-[#ff4d89] hover:bg-[#ff4d89] text-white">Reade More</button>
                </div>
            </div>
            </div>

            {/* two */}

            {/* three */}

            <div className="card card-compact w-full  bg-base-300 shadow-2xl rounded-xl"data-aos="zoom-in"
        data-aos-duration="2000">
            <figure><img className='w-full h-48' src="https://img.freepik.com/premium-vector/agricultural-works-indian-peasants-country-people-vector-illustration_181313-4536.jpg?w=826" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title my-3">Cultivating Cultural</h2>
                <p>Arts education exposes students to diverse cultural expressions,traditional, and perspective. </p>
                <div className="card-actions justify-left my-2">
                <button className="btn rounded-xl bg-[#ff4d89] hover:bg-[#ff4d89] text-white">Reade More</button>
                </div>
            </div>
            </div>

            {/* three */}

            {/* four */}

            <div className="card card-compact w-full  bg-base-300 shadow-2xl rounded-xl"data-aos="zoom-in"
        data-aos-duration="2000">
            <figure><img className='w-full' src="https://img.freepik.com/premium-photo/happy-earth-day-social-media-post_582637-2608.jpg?w=740" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title my-3">Earth  Environment</h2>
                <p>Earth and Environmental sciences encompass the study of Earths systems,including geology, meteorology. </p>
                <div className="card-actions justify-left my-2">
                <button className="btn rounded-xl bg-[#ff4d89] hover:bg-[#ff4d89] text-white">Reade More</button>
                </div>
            </div>
            </div>

            {/* four */}

         </div>
            
            
        </div>
    );
};

export default Education;