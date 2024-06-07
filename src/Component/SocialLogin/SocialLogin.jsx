import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    console.log('state in the location login page', location.state)

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            // const userInfo = {
            //     email: result.user?.email,
            //     name: result.user?.displayName
            // }
            // axiosPublic.post('/users', userInfo)
            // .then(res =>{
            //     console.log(res.data);
            //     navigate('/');
            // })
            navigate(from, { replace: true });
        })
        
    }
    return (
        <div className="flex items-center justify-between">
        <button onClick={handleGoogleSignIn}
          type="button"
          className="w-full px-4 py-2 font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
        >
      
          Login with Google
        </button>
      </div>
    );
};

export default SocialLogin;