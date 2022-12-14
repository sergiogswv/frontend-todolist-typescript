import { UserState } from "./";

type UserActions = { type: 'User - Get Token', payload: string }

export const userReducer = (state: UserState, action: UserActions): UserState => {
    switch (action.type) {
        case 'User - Get Token':
            return {
                ...state,
                token: action.payload
            }    
        default:
            return state
    }
}