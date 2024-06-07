import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Component/SocialLogin/SocialLogin";


const Login = () => {

    const {   signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    console.log('state in the location login page', location.state)


    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                title: 'Login Successful.',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
            navigate(from, { replace: true });
        })
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
              </div>
              <SocialLogin></SocialLogin>
              {/* <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="w-full px-4 py-2 font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                >
                  Login with Google
                </button>
              </div> */}
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="w-full px-4 py-2 mt-4 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="mt-6 text-center">
              <Link to ="/register"
                type="button"
                className="text-sm text-red-600 hover:underline focus:outline-none"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      );
    };

export default Login;