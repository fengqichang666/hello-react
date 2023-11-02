import React, { useState } from 'react'
import { Button, Menu } from 'antd'
import { Link, useNavigate, useLocation } from 'react-router-dom'
const NavBar = () => {
	const navigate = useNavigate()
	const location = useLocation()
	console.log(location)
	const items = [
		getItem('My Okr', '/okr'),
		getItem('My TodoList', '/todoList'),
		getItem('Option 3', '3'),
		getItem('Navigation One', 'sub1', [
			getItem('Option 5', '5'),
			getItem('Option 6', '6'),
			getItem('Option 7', '7'),
			getItem('Option 8', '8'),
		]),
		getItem('Navigation Two', 'sub2', [
			getItem('Option 9', '9'),
			getItem('Option 10', '10'),
			getItem('Submenu', 'sub3', [
				getItem('Option 11', '11'),
				getItem('Option 12', '12'),
			]),
		]),
	]
	function getItem(label, key, children) {
		return {
			label,
			key,
			children,
		}
	}
	const [selectedKeys, setSelectedKeys] = useState([location.pathname])
	const onClick = (e) => {
		const { key } = e
		setSelectedKeys([key])
		navigate(key)
	}
	return (
		<>
			<Menu
				style={{minHeight:400, height: '100%' }}
				selectedKeys={selectedKeys}
				onClick={onClick}
				mode='inline'
				theme='dark'
				items={items}
			/>
		</>
	)
}
export default NavBar
