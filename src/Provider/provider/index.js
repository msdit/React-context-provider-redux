export const initialState = { count: 0, key: "value" };

export function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + Number(action.payload) };
    case "decrement":
      return { ...state, count: state.count - Number(action.payload) };
    default:
      throw new Error();
  }
}
