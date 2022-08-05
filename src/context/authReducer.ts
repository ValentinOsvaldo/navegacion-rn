import {AuthState} from './AuthContext';

type AuthAction =
  | {type: 'signIn'}
  | {type: 'Change Favorite Icon'; payload: string}
  | {type: 'logout'}
  | {type: 'setName'; payload: string};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'no-username-yet',
      };

    case 'Change Favorite Icon':
      return {
        ...state,
        favoriteIcon: action.payload,
      };

    case 'logout':
      return {
        isLoggedIn: false,
        username: undefined,
        favoriteIcon: undefined,
      };

    case 'setName':
      return {
        ...state,
        username: action.payload,
      };

    default:
      return state;
  }
};
