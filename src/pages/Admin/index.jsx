import React from 'react'
import './index.css'
import { Layout } from 'antd'
import { Routes, Route, Link, Outlet } from 'react-router-dom'
import Okr from '../Okr'
import Home from '../Home'
import Tag from '../Tag'
import TodoList from '../TodoList'
import NavBar from '../../components/NavBar'
import Headers from '../../components/Headers'
const { Header, Sider, Content } = Layout
function Admin() {
	return (
		<Layout className='admin'>
			<Sider style={{ backgroundColor: '#fff', height: '100%' }}>
				<NavBar />
			</Sider>
			<Layout>
				<Header style={{ backgroundColor: '#fff' }}>
					<Headers></Headers>
				</Header>
				<Content  style={{ padding: 30,overflowY:'auto' }}>
					<Routes>
						<Route path='home' element={<Home></Home>}></Route>
						<Route path='okr' element={<Okr></Okr>}></Route>
						<Route path='tag' element={<Tag></Tag>}></Route>
						<Route
							path='todoList'
							element={<TodoList></TodoList>}
						></Route>
					</Routes>
				</Content>
			</Layout>
		</Layout>
	)
}

export default Admin
