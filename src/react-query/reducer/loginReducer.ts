

interface Login{
    type: 'LOGIN',
    user: string
}

interface Logout {
    type: 'LOGOUT',
    
}

export type UserAction = Login | Logout

export const loginReducer = (user: string, action: UserAction) : string => {
    switch(action.type){
        case 'LOGIN':
            return action.user
        case 'LOGOUT':
            return ""

        return user;
    }
    

}