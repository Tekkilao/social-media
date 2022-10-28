import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user: {
        _id: "631fbc25df2a5e670e8dfa84",
        username: "Jonel",
        email: "jonelbirimbau123@gmail.com",
        password: "$2b$10$XnDwdJdGGJyjWTvlVPcyru/gklEbHWTEdK3NAmRiVAeKn/IB6Jzku",
        profilePicture: "", 
        coverPicture: "",
        followers: [],
        followings: [],
        isAdmin: false,
},
    isFetching: false,
    error: false,
};



export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    
    return (
        <AuthContext.Provider value={{
            user: state.user, 
            isFetching: state.isFetching, 
            error: state.error,
            dispatch,
        }}>
            {children}
        </AuthContext.Provider>
    )
}