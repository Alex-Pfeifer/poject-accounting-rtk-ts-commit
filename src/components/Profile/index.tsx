import ProfileData from "./ProfileData.tsx";
import UpdateUser from "./UpdateUser.tsx";

const Profile = () => {
    const handelClickLogout = () => {
        //TODO
        alert('Logout')
    }
    return (
        <>
            <ProfileData />
            <button onClick={handelClickLogout}>Logout</button>
            <UpdateUser/>
        </>
    );
};

export default Profile;