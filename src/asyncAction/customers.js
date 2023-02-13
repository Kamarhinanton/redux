import {addManyCustomersAction} from "../store/customerReducer";

export const fetchCustomers = () => {
  return dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      //json масив користувачів який прийшов з серверу, його передаємо до action creator
      .then(json => dispatch(addManyCustomersAction(json)))
  }
}