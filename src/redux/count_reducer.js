/*
 * @Author: feng
 * @Date: 2022-11-30 14:31:06
 * @LastEditTime: 2022-11-30 15:36:07
 * @Description: file content
 */
const initState = 0 //初始化状态
export default function countReducer(preState = initState, action) {
	const { type, data } = action
	switch (type) {
		case 'increment':
			return preState + data
		case 'decrement':
			return preState - data
		default:
			return preState
	}
}
