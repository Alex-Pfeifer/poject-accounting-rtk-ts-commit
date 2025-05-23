import {useState} from "react";
import SignIn from "./SignIn.tsx";
import SignUp from "./SignUp.tsx";


const Guest = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    return (
        <div>
            {isSignIn ? <SignIn/> : <SignUp/>}
            <button
            onClick={() => setIsSignIn(prevState => !prevState)}
            >Switch to {isSignIn ? 'Sing up' : 'Sing in'}</button>
        </div>
    );
};

export default Guest;