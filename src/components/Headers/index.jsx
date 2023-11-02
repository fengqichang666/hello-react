import { Input, Select, Space, Button, Row, Col } from 'antd'
import { useRef } from 'react'
function Headers() {
	const { Option } = Select
    let prefix = 'https://cn.bing.com/search?q='
	const selectChange = (e) => {
        prefix = e
	}
	const selectBefore = (
		<Select onChange={selectChange} defaultValue='https://cn.bing.com/search?q='>
			<Option value='https://www.google.com/search?q='>谷歌</Option>
			<Option value='https://cn.bing.com/search?q='>必应</Option>
			<Option value='https://www.baidu.com/s?wd='>百度</Option>
		</Select>
	)
    const inputValue = useRef(null)
	const onSearch = () => {
        window.open(prefix+inputValue.current.input.value);
    }
    const enterSearch = (e)=>{
        window.open(prefix+e.target.value);
    }
	return (
		<>
			<Row >
                <Col offset={3} span={3} style={{fontSize:'24px'}}>FastPage</Col>
				<Col span={18} style={{marginTop:'16px'}}>
					<Input.Group compact>
						{selectBefore}
						<Input ref={inputValue} style={{ minWidth: '150px',width: '50%'}} onPressEnter={enterSearch} />
						<Button onClick={onSearch} type='primary'>
							Submit
						</Button>
					</Input.Group>
				</Col>
			</Row>
		</>
	)
}

export default Headers
