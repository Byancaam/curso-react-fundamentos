import { createStore } from 'redux';

//Login Reducer function
const loginReducer = (state = {isLoggedIn: false}, action) => {

    //Login
    if(action.type === 'login'){
        //API Call, DB Call para verificação de username && password
        return { isLoggedIn: true}
    }

    //Logout
    if(action.type === 'logout'){
        //API Call, DB Call para verificação de username && password
        return { isLoggedIn: false}
    }
    return state;
};

// Central Data Store
const store = createStore(loginReducer);
export default store;