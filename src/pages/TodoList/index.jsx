import React, { Fragment, useState, useRef } from 'react'
import {
	Input,
	Button,
	Row,
	Col,
	Collapse,
	List,
	Typography,
	AutoComplete,
} from 'antd'
import { localCache } from '../../utils/storge'
const { Panel } = Collapse

export default function Todolist() {
	// 未完成储存数据
	const list1 = localCache.getItem('TODOLIST-NODO')
	// 已完成储存数据
	const list2 = localCache.getItem('TODOLIST-COMPLETED')
	// 数据
	const [data1, setData1] = useState(list1 || [])
	// 数据
	const [data2, setData2] = useState(list2 || [])

	const inputValue = useRef(null)
	const onclick = () => {
		if (inputValue.current.input.value) {
			const newData = [...data1, inputValue.current.input.value]
			setData1(newData)
			localCache.setItem('TODOLIST-NODO', newData)
		}
	}
	const complete = (i) => {
		const newData1 = [...data1]
		const newData2 = [...data2]
		const item = newData1[i]
		newData1.splice(i, 1)
		setData1(newData1)
		newData2.push(item)
		setData2(newData2)
		localCache.setItem('TODOLIST-NODO', newData1)
		localCache.setItem('TODOLIST-COMPLETED', newData2)
	}
	const del = (i) => {
		const newData2 = [...data2]
		newData2.splice(i, 1)
		setData2(newData2)
		localCache.setItem('TODOLIST-COMPLETED', newData2)
	}
	return (
		<div>
			<Row>
				<Col offset={2} span={16}>
					<Input
						ref={inputValue}
						placeholder='请输入'
					/>
				</Col>
				<Col offset={1} span={4}>
					<Button type='primary' onClick={onclick}>
						添加
					</Button>
				</Col>
			</Row>
			<Collapse className='mt16' defaultActiveKey={['1', '2']}>
				<Panel header='待完成' key='1'>
					<List
						dataSource={data1}
						renderItem={(item, i) => (
							<List.Item>
								<Typography.Text>{`${
									i + 1
								}、${item}`}</Typography.Text>
								<Button
									type='primary'
									danger
									onClick={() => complete(i)}
								>
									完成
								</Button>
							</List.Item>
						)}
					/>
				</Panel>
				<Panel header='已完成' key='2'>
					<List
						dataSource={data2}
						renderItem={(item, i) => (
							<List.Item>
								<Typography.Text>{`${
									i + 1
								}、${item}`}</Typography.Text>
								<Button
									type='primary'
									danger
									onClick={() => del(i)}
								>
									删除
								</Button>
							</List.Item>
						)}
					/>
				</Panel>
			</Collapse>
		</div>
	)
}
