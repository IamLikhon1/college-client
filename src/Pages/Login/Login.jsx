import { useContext, useRef } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import SocialLogin from "../../component/SocialLogin";

const Login = () => {
    const {signInUsers,resSetPassword}=useContext(AuthContext);
  const emailRef=useRef()
  const location=useLocation();
  const navigate=useNavigate()
  const from=location.state?.from?.pathname||'/'


    const handleLogin=(event)=>{
      event.preventDefault()
      const form=event.target;
      const email=form.email.value;
      const password=form.password.value;

      signInUsers(email,password)
      .then(result=>{
        const loginIn=result.user;
        console.log(loginIn)
        toast.success(`${loginIn?.displayName} You Login successfully`);
        navigate(from,{replace:true})
      })
      .catch(error=>{
        toast.error(error.message)
      })

    };

    const handleReSet=()=>{
      const passReSet=emailRef.current.value;
      if(!passReSet){
        toast.error('Set your email on email field')
        return
      }
      resSetPassword(passReSet)
      .then(()=>{
        toast.success('Please Check Your Email')
      })
      .catch(error=>{
        toast.error(error.message)
      })
    }

    return (
        <div className="my-16 md:px-10">
            <div className="grid md:grid-cols-2 items-center">
               {/* animation */}
               <div className="w-full h-full ">
                <img className="w-full h-full shadow-sm" src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7892.jpg?w=740&t=st=1690198719~exp=1690199319~hmac=eb8be416e7977a0b381b469eb1e2c685471a4fb86fe4df3d141a588034178f44" alt="" />
            

                    
                </div>
               {/* animation */}
               {/* from */}

               <div className="w-full">
               <div className="hero min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center">
      <h1 className="text-4xl font-bold uppercase text-[#F63E7B]">Login</h1>
      
    </div>
    <div className="card md:w-96  shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" ref={emailRef} name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" onClick={handleReSet} className="label-text-alt link link-hover font-medium">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn rounded-xl bg-[#F63E7B] hover:bg-[#F63E7B] text-white">Login</button>

        </div>
        </form>
        <SocialLogin></SocialLogin>
          <p className="my-2">{"Don't Have Account?"} <span className="font-bold text-[#F63E7B] underline"><Link to='/signup'>create account</Link> </span> </p>
        
      </div>
    </div>
  </div>
</div>
               </div>

               {/* from */}

            </div>
            
        </div>
    );
};

export default Login;