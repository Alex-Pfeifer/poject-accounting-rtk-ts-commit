import {useState} from "react";
import {useAppDispatch} from "../../app/hooks.ts";
import {registerUser} from "../../features/api/accountApi.ts";

const SignUp = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const dispatch = useAppDispatch();

    const handelClickSignUp = () => {
        dispatch(registerUser({login, password, firstName, lastName}));
    }

    const handelClickClear = () => {
        setLogin('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }


    return (
        <div>
            <label>Login:
                <input
                    type={'text'}
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                />
            </label>
            <label>Password:
                <input
                    type={'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <label>First Name:
                <input
                    type={'text'}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </label>
            <label>Last Name:
                <input
                    type={'text'}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </label>
            <button onClick={handelClickSignUp}>Sign in</button>
            <button onClick={handelClickClear}>Clear</button>
        </div>
    )
};

export default SignUp;