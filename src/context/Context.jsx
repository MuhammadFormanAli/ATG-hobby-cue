import { createContext, useState } from "react";





export const PopUpContext = createContext(null);
const Context = ({ children }) => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
 
  const handleSignInShow = (value) => {
    console.log('life is beautiful')
    if (value){
        setShowSignIn(true);
        setShowSignUp(false)
    }
    else{
        setShowSignIn(false);
    }
  };

  const handleSignUpShow = (value) => {
    if (value){
        setShowSignUp(true)
        setShowSignIn(false);
    }
    else{
        setShowSignUp(false);
    }
  };
  

  const contextData = {
    showSignIn,
    showSignUp,
    handleSignInShow,
    handleSignUpShow,
  };

  return (
    <PopUpContext.Provider value={contextData}>{children}</PopUpContext.Provider>
  );
};

export default Context;