// import { Link, useNavigate } from "react-router-dom";
// import Lottie from "lottie-react";
// import create from '../../assets/create.json'
// import { useContext } from "react";
// import { AuthContext } from "../../provider/AuthProvider";
// import { toast } from "react-hot-toast";
// import SocialLogin from "../../component/SocailLogin/SocialLogin";

import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import SocialLogin from "../../component/SocialLogin";

const SignIn = () => {
  const{createUsers,updateUserProfile}=useContext(AuthContext)
  const navigate=useNavigate()
  const createSubmit=(event)=>{
    event.preventDefault()
    const form=event.target;
    const name=form.name.value;
    const email=form.email.value;
    const password=form.password.value;
    const photo=form.photo.value;
    createUsers(email,password)
    .then(result=>{
      const loggedUser=result.user;
      console.log(loggedUser);
      updateUserProfile(name,photo)
      .then(()=>{
        toast.success(`Welcome ${loggedUser?.displayName} You successfully create account`)
        navigate('/')

      })
      .catch(error=>{
        toast.error(error.message)
      })

    })
    .catch(error=>{
      console.log(error)
      toast.error(error.message)
    })
    console.log(name,email,password,photo)
  }
    return (
        <div>
            <div className="my-16 md:px-10">
            <div className="grid md:grid-cols-2 items-center">
               {/* animation */}
               <div className="w-full h-full shadow-sm">
                <img className="h-full" src="https://img.freepik.com/premium-vector/online-registration-illustration-design-concept-websites-landing-pages-other_108061-939.jpg?w=740" alt="" />

                    
                </div>
               {/* animation */}
               {/* from */}

               <div className="w-full h-full">
               <div className="hero min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-[#F63E7B] uppercase">Sign Up</h1>
      
    </div>
    <div className="card md:w-96  shadow-2xl bg-base-100">
     <div className="card-body">
     <form onSubmit={createSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="name" type="text" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
          
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn rounded-xl bg-[#F63E7B] hover:bg-[#F63E7B] text-white uppercase">Sign in</button>

        </div>
     </form>
     <SocialLogin></SocialLogin>
          <p className="my-2">{"Already Have Account?"} <span className="font-bold text-[#F63E7B] underline"><Link to='/login'>Go to Login</Link> </span> </p>
      </div>
    </div>
  </div>
</div>
               </div>

               {/* from */}

            </div>
            
        </div>
            
        </div>
    );
};

export default SignIn;
