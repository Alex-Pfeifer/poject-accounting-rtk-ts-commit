import {useState} from "react";
import {useAppDispatch} from "../../app/hooks.ts";
import {changePassword} from "../../features/api/accountApi.ts";

interface Props {
    close: () => void;
}

const ChangePassword = ({close}: Props) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useAppDispatch();


    const handelClickSave = () => {
        if (newPassword === oldPassword) {
            dispatch(changePassword({newPassword, oldPassword}));
        } else {
            alert('New Password and confirm password are different');
        }
        close();
    };

    const handelClickClear = () => {
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
    }


    return (
        <>
            <label>Old password
                <input
                    type="password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                />
            </label>
            <label>New password
                <input
                    type={"password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
            </label>
            <label>Confirm password
                <input
                    type={"password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </label>
            <button onClick={handelClickSave}>Save and Close</button>
            <button onClick={close}>Close without Save</button>
            <button onClick={handelClickClear}>Clear</button>

        </>
    );
};

export default ChangePassword;