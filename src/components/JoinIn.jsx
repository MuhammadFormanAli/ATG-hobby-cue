import EmailAndPassWordSignIn from "./Register/EmailAndPassWordSignIn";
import SocialSignIn from "./Register/SocialSignIn"

const JoinIn = () => {
  return (
    <>
      <SocialSignIn />
      <p className="fw-bold text-center my-4">Or Continue With</p>
      <EmailAndPassWordSignIn />
      <p className="m-0 py-2 text-end fw-bold fs-14">Password strength</p>
      <p className=" fs-12 ">By continuing,you agree to our Terms of Service and Privacy Policy</p>
      <button className="m-0 py-2 text-center w-100 rounded border-0 bg-lilac text-light fw-bold">Agree And Continue</button>
    </>
  );
};

export default JoinIn;
