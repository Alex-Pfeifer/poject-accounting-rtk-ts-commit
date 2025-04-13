import {useState} from "react";

const SignIn = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handelClickSignIn = () => {
        //TODO
        alert('Sign in');
    }

    const handelClickClear = () => {
        setLogin('');
        setPassword('');
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
            <button onClick={handelClickSignIn}>Sign in</button>
            <button onClick={handelClickClear}>Clear</button>
        </div>
    )
};

export default SignIn;