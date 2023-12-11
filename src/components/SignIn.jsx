import EmailAndPassWordSignIn from "./Register/EmailAndPassWordSignIn";
import SocialSignIn from "./Register/SocialSignIn";



const SignIn = () => {
  return (
    <>
      <SocialSignIn />
      <p className="fw-bold text-center my-4">Or Continue With</p>
      <EmailAndPassWordSignIn />
      <div className="d-flex align-items-center justify-content-between fw-bold fs-14 my-4">
          <span className="d-flex align-items-center gap-1">Remember Me <input type="checkbox" name="" id="" /></span>
          <span className="d-flex align-items-center gap-1"><img src="/public/lock.png" alt="" /> Forgotten Password</span>
      
      </div>
      <button className="m-0 py-2 text-center w-100 rounded border bg-light  text-dark fw-bold">Continue</button>
    </>
  );
};

export default SignIn;

