/*
 * @Author: feng
 * @Date: 2022-11-30 09:47:30
 * @LastEditTime: 2022-11-30 10:16:27
 * @Description: file content
 */
import React from 'react'
import { Button, Form, Input } from 'antd'
import {useNavigate} from 'react-router-dom'
import './index.css'
export default function Login() {
    const navigate = useNavigate()
	const [form] = Form.useForm()
	const onFinish = (values) => {
        navigate('/admin')
	}
	return (
		<div className='login'>
			<div className='login-header'>登录页头部</div>
			<div className='login-content'>
				<Form
					form={form}
					name='basic'
					labelCol={{
						span: 3,
						offset: 6,
					}}
					wrapperCol={{
						span: 6,
					}}
					initialValues={{
						username: 'username',
					}}
					onFinish={onFinish}
					autoComplete='off'
				>
					<Form.Item
                        validateTrigger="onBlur"
						label='用户名'
						name='username'
						rules={[
							{
								required: true,
								message: '请输入用户名',
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label='密码'
						name='password'
						rules={[
							{
								required: true,
								message: '请输入密码',
							},
						]}
					>
						<Input.Password />
					</Form.Item>
					<Form.Item
						wrapperCol={{
							offset: 9,
							span: 6,
						}}
					>
						<Button type='primary' htmlType='submit'>
							登录
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	)
}
