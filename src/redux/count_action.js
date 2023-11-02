/*
 * @Author: feng
 * @Date: 2022-11-30 16:08:54
 * @LastEditTime: 2022-11-30 17:06:26
 * @Description: file content
 */
import {INCREMENT,DECREMENT} from './constant'
export const createIncrementAction = data => ({type:INCREMENT,data})
export const createDecrementAction = data => ({type:DECREMENT,data})
export const createIncrementAsyncAction = (data,time) =>{
    return (dispatch)=>{
        setTimeout(()=>{
			dispatch(createIncrementAction(data))
		},time)
    }
} 