import React from 'react'
import { Routes, Route, Navigate, Link } from 'react-router-dom'
import Admin from './pages/Admin'
import Login from './pages/Login'
import 'antd/dist/reset.css'
import './index.css'
import './App.css'
const App = () => (
	<div className='App'>
		<Routes>
            <Route path='/*' element={<Admin />}></Route>
            <Route path='/login' element={<Login />}></Route>
		</Routes>
	</div>
)

export default App
