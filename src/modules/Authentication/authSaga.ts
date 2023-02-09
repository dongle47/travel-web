import { fork } from "redux-saga/effects"

function* watchLoginFLow(){
    yield console.log('login flow')
}

function* authSaga(){
    yield fork(watchLoginFLow)
}

export default authSaga