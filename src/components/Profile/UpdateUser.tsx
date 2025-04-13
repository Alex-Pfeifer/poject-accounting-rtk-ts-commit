import {UpdateMode} from "../../utils/types.d";
import {useState} from "react";
import ChangePassword from "./ChangePassword.tsx";
import EditProfile from "./EditProfile.tsx";


const UpdateUser = () => {
    const [updataMode, setUpdataMode] = useState<UpdateMode>(UpdateMode.DEFAULT);

    switch (updataMode) {
        case UpdateMode.CHANGE_PASSWORD:
            return <ChangePassword close={() => setUpdataMode(UpdateMode.DEFAULT)}/>;
        case UpdateMode.EDIT_PROFILE:
            return <EditProfile close={() => setUpdataMode(UpdateMode.DEFAULT)}/>
        default:
            return (
                <div>
                    <button onClick={() => setUpdataMode(UpdateMode.CHANGE_PASSWORD)}>Change password</button>
                    <button onClick={() => setUpdataMode(UpdateMode.EDIT_PROFILE)}>Edit profile</button>
                </div>
            )
    }
};


export default UpdateUser;