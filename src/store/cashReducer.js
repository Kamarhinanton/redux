const defaultState = {
  cash: 0,
  count: 0,
}

export const ASYNC_INCREMENT = "ASYNC_INCREMENT";
export const ASYNC_DECREMENT = "ASYNC_DECREMENT";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const cashReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {...state, count: state.count + 1}
    case DECREMENT:
      return {...state, count: state.count - 1}
    case "ADD_CASH":
      return {...state, cash: state.cash + action.payload}
    case "GET_CASH":
      return {...state, cash: state.cash - action.payload}
    default:
      return state
  }
}

export const incrementCreator = () => ({type: INCREMENT})
export const decrementCreator = () => ({type: DECREMENT})
export const asyncIncrementCreator = () => ({type: ASYNC_INCREMENT})
export const asyncDecrementCreator = () => ({type: ASYNC_DECREMENT})