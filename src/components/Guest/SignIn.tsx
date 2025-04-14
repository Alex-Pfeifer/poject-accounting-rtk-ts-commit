import {useState} from "react";
import {useAppDispatch} from "../../app/hooks.ts";
import {fetchUser} from "../../features/api/accountApi.ts";
import {createToken} from "../../utils/constants.ts";

const SignIn = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();

    const handelClickSignIn = () => {
        dispatch(fetchUser(createToken(login, password)));
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