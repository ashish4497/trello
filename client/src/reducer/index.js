import { LOGIN_USER, REGISTER_USER } from "../action/type";
const initialState = {
  user: [],
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER: {
      console.log(action.payload, "inside reducer");
      return {
        ...state,
        user: action.payload,
      };
    }
    // case REGISTER_USER: {
    //   console.log(action.data.user, "inside reducer");
    //   return {
    //     ...state,
    //     user: action.data.user,
    //   };
    // }
    default:
      return state;
  }
}
