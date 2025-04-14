import {useState} from "react";
import {useAppDispatch} from "../../app/hooks.ts";
import {updateUser} from "../../features/api/accountApi.ts";


interface Props {
    close: () => void;
}

const EditProfile = ({close}: Props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const dispatch = useAppDispatch();

    const handelClickSave = () => {
        dispatch(updateUser({firstName, lastName}));
        close();
    }


    const handelCkickClear = () => {
        setFirstName('');
        setLastName('');
    }


    return (
        <>
            <label>
                First Name:
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </label>
            <label>
                Last Name:
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </label>
            <button onClick={handelCkickClear}>Save and Close</button>
            <button onClick={close}>Close without Save</button>
            <button onClick={handelClickSave}>Clear</button>

        </>
    );
};

export default EditProfile;