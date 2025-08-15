  import { useContext, useState } from 'react';
  import { UserContext } from '../App';
  import { Mail, Lock, User, ArrowRight, Github, Eye, EyeOff } from 'lucide-react';
  import endpoints from '../endpoints/endpoints';
  import axios from 'axios'
  import {useNavigate} from "react-router-dom"
  import {axiosInstance} from '../context/axios'
  const styles = {
    container: "min-h-screen bg-gradient-to-br from-gray-100 to-white flex items-center justify-center p-4",
    card: "max-w-md w-full bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8",
    header: "flex flex-col items-center mb-8",
    title: "text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-neutral-600",
    subtitle: "text-2xl font-semibold mt-2",
    description: "text-gray-500 text-sm mt-2",
    form: "space-y-6",
    inputGroup: "space-y-2",
    label: "text-sm font-medium text-gray-700",
    inputWrapper: "relative",
    icon: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5",
    input: "w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-neutral-900 focus:border-transparent bg-gray-50",
    button: "w-full bg-gradient-to-r from-neutral-800 to-gray-600 text-white py-2.5 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 font-medium cursor-pointer",
    divider: {
      container: "mt-8",
      line: " inset-0 flex items-center",
      border: "w-full border-t border-gray-200",
      text: "relative flex justify-center text-sm",
      span: "px-2 bg-white text-gray-500"
    },
    socialButtons: "mt-6 grid grid-cols-2 gap-4 cursor-pointer",
    socialButton: "flex items-center justify-center gap-2 py-2.5 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-medium cursor-pointer",
    footer: "mt-8 text-center text-sm text-gray-500",
    footerLink: "font-medium text-neutral-800 hover:text-gray-900 cursor-pointer",
    terms: "mt-4 text-xs text-center text-gray-500",
    error: "text-red-500 text-sm mt-2 text-center",
    showPassword: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5 cursor-pointer"
  };

  const googlesvg=`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>`

  const Authentication = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [authDetails,setAuthDetails]=useContext(UserContext)
    const navigate=useNavigate()
    
    const handleSubmit = async(e) => {
      e.preventDefault();
      try {
        if(isSignIn){
          const resp= await axiosInstance.post(endpoints.login,{email:email,password:password});
          console.log(resp.data);
          
          setAuthDetails(resp.data)
          navigate('/')
          console.log(resp);
        }else{
          if(password !== confirmPassword) {
            setError("Passwords don't match");
            return;
          }
          const resp=await axiosInstance.post(endpoints.signup,{username,email,password});
          console.log(resp.data.data.userId);

          navigate('/verification',{state:{id:resp.data.data.userId}});
          console.log(resp);
        }
      } catch (error) {
        console.log("Error Catched");
        setError(error.response?.data?.message);
        console.log(error);
      }
      console.log({ email, password, username });
    };

    const googleAuth = () => {
      window.location.href = 'http://localhost:5000/api/auth/google';
    }
    const githubAuth=()=>{
      window.location.href = 'http://localhost:5000/api/auth/github';
    }
    
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.header}>
            <h1 className={styles.title}>AI-Notes</h1>
            <h2 className={styles.subtitle}>
              {isSignIn ? 'Welcome back' : 'Create your account'}
            </h2>
            <p className={styles.description}>
              {isSignIn ? 'Sign in to continue to AI-Notes' : 'Sign up to get started with AI-Notes'}
            </p>
          </div>
        
          <form className={styles.form} onSubmit={handleSubmit}>
            {!isSignIn && (
              <div className={styles.inputGroup}>
                <label className={styles.label}>Username</label>
                <div className={styles.inputWrapper}>
                  <User className={styles.icon} />
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) =>{ setUsername(e.target.value);setError("")}}
                  />
                </div>
              </div>
            )}

            <div className={styles.inputGroup}>
              <label className={styles.label}>Email</label>
              <div className={styles.inputWrapper}>
                <Mail className={styles.icon} />
                <input
                  type="email"
                  className={styles.input}
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {setEmail(e.target.value);setError("")}}
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Password</label>
              <div className={styles.inputWrapper}>
                <Lock className={styles.icon} />
                <input
                  type={showPassword ? "text" : "password"}
                  className={styles.input}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {setPassword(e.target.value);setError("")}}
                />
                {showPassword ? (
                  <EyeOff className={styles.showPassword} onClick={() => setShowPassword(false)} />
                ) : (
                  <Eye className={styles.showPassword} onClick={() => setShowPassword(true)} />
                )}
              </div>
            </div>

            {!isSignIn && (
              <div className={styles.inputGroup}>
                <label className={styles.label}>Confirm Password</label>
                <div className={styles.inputWrapper}>
                  <Lock className={styles.icon} />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className={styles.input}
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => {setConfirmPassword(e.target.value);setError("")}}
                  />
                  {showConfirmPassword ? (
                    <EyeOff className={styles.showPassword} onClick={() => setShowConfirmPassword(false)} />
                  ) : (
                    <Eye className={styles.showPassword} onClick={() => setShowConfirmPassword(true)} />
                  )}
                </div>
              </div>
            )}

            {error && <p className={styles.error}>{error}</p>}

            <button type="submit" className={styles.button}>
              {isSignIn ? 'Sign In' : 'Sign Up'} <ArrowRight className="h-5 w-5" />
            </button>

            {!isSignIn && (
              <p className={styles.terms}>
                By signing up, you agree to our{' '}
                <a href="/terms" className={styles.footerLink}>Terms of Service</a>{' '}
                and{' '}
                <a href="/privacy" className={styles.footerLink}>Privacy Policy</a>
              </p>
            )}
          </form>

          <div className={styles.divider.container}>
            <div className={styles.divider.text}>
              <span className={styles.divider.span}>Or continue with</span>
            </div>
          </div>

          <div className={styles.socialButtons}>
            <button className={styles.socialButton} type="button" onClick={googleAuth}>
              <div dangerouslySetInnerHTML={{__html: googlesvg}} className="h-5 w-5" />
              Google
            </button>
            <button className={styles.socialButton}
            onClick={githubAuth} type="button">
              <Github className="h-5 w-5" />
              Github
            </button>
          </div>

          <p className={styles.footer}>
            {isSignIn ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => {
                setIsSignIn(!isSignIn);
                setError('');
              }}
              className={styles.footerLink}
              type="button"
            >
              {isSignIn ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    );
  };
  export default Authentication;