/*
 * @Author: feng
 * @Date: 2022-11-30 14:30:56
 * @LastEditTime: 2022-11-30 21:40:48
 * @Description: file content
 */
import {createStore,applyMiddleware} from 'redux';
import countReducer from './count_reducer'
import thunk from 'redux-thunk'
export default createStore(countReducer,applyMiddleware(thunk))