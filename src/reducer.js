export const initialState = {
  user: null,
  profileURL: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
        profileURL: action.profileURL,
      };
    default:
      return state;
  }
};

export default reducer;
