import { atom } from "recoil";

interface IAuthTypes {
  isLoggedIn: boolean;
  username: string;
}
const authState = atom<IAuthTypes>({
  key: "authState", // unique ID (with respect to other atoms/selectors)
  default: {
    isLoggedIn: false,
    username: "",
  }, // default value (aka initial value)
});

export default authState;
