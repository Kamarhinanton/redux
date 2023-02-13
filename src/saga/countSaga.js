import {put, takeEvery} from "redux-saga/effects"
import {ASYNC_DECREMENT, ASYNC_INCREMENT, decrementCreator, incrementCreator} from "../store/cashReducer";

const delay = (ms) => new Promise(res =>setTimeout(res, ms))

//функція генератор, позначається *, yield виконується послідовно один за одним, поки не закінчиться одна, друга не запуститься
function* incrementWorker() {
  yield delay(1000)
  yield put(incrementCreator())
}

function* decrementWorker() {
  yield delay(1000)
  yield put(decrementCreator())
}

export function* countWatcher(){
  yield takeEvery(ASYNC_INCREMENT, incrementWorker)
  yield takeEvery(ASYNC_DECREMENT, decrementWorker)
}