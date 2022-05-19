export const initialState = [{ id: 0, name: "ali" }];

export function reducer(state, action) {
  switch (action.type) {
    case "addUser":
      return [
        ...state,
        {
          id: state.length,
          name: action.payload,
        },
      ];
    case "removeUser":
      return state.filter((user) => user.id !== action.payload);
    default:
      throw new Error();
  }
}
