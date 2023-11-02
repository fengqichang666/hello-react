/*
 * @Author: feng
 * @Date: 2022-11-23 16:31:24
 * @LastEditTime: 2022-12-01 10:00:42
 * @Description: file content
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import store from './redux/store'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
)
