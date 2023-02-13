import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, fetchUsers, removeCustomerAction} from "./store/customerReducer";
import {fetchCustomers} from "./asyncAction/customers";
import {asyncDecrementCreator, asyncIncrementCreator} from "./store/cashReducer";

function App() {
  const dispatch = useDispatch()
  //звертаємось до редюсера cash
  const cash = useSelector(state => state.cash.cash)
  const count = useSelector(state => state.cash.count)
  const customers = useSelector(state => state.customers.customers)
  const users = useSelector(state => state.customers.users)

  const addCash = (cash) => {
    dispatch({type: "ADD_CASH", payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <>
      <h1>
        {cash}
      </h1>
      <div>
        <button onClick={() => addCash(Number(prompt()))}>+</button>
        <button onClick={() => getCash(Number(prompt()))}>-</button>
        <button onClick={() => addCustomer(prompt())}>додати клієнта</button>
        <button onClick={() => getCash(Number(prompt()))}>вилучити клієнта</button>
        <button onClick={() => dispatch(fetchCustomers())}>отримати клієнтів з бази</button>
      </div>
      {customers.length > 0 ?
        <div>
          {customers.map(customer =>
            <span key={customer.id} onClick={()=> removeCustomer(customer)}
            >{customer.name}</span>)}
        </div>
        :
        <div>
          <strong>
            Клієнти відсутні
          </strong>
        </div>
      }
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(asyncIncrementCreator())}>інкремент+</button>
        <button onClick={() => dispatch(asyncDecrementCreator())}>декремент-</button>
        <button onClick={() => dispatch(fetchUsers())}>юзери</button>
      </div>
      {users.length > 0 ?
        <div>
          {users.map(user =>
            <span>{user.name}</span>)}
        </div>
        :
        <div>
          <strong>
            юзери відсутні
          </strong>
        </div>
      }
    </>
  );
}

export default App;
