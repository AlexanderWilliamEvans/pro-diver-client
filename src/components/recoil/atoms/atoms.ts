import { atom } from "recoil";
import { IUser } from "../../../shared/interfaces";

const userState = atom<IUser>({
    key: 'userState',
    default: {
        loggedIn: true
    }
});


export default ({
    userState,
})