import React, { Fragment, useState } from 'react'
import { Card, Input,Button } from 'antd'
import './index.css'
import {localCache} from '../../utils/storge'
function Okr() {
    const list = localCache.getItem('FASTPAGE-OKR');
    // 数据
	const [data, setData] = useState(list||[])
    console.log(data)
    // 模板
	const template = (item,i) => (
		<Fragment>
			<div style={{ fontSize: 18 }} className='tc'>
				OKR{i+1}
			</div>
			{/* <Input className='mt8' placeholder='请输入你的Object' value={item.o} />
			<Input className='mt8' placeholder='请输入你的KR' value={item.Kr1} />
			<Input className='mt8' placeholder='请输入你的KR' value={item.Kr2} />
			<Input className='mt8' placeholder='请输入你的KR' value={item.Kr3} />
			<Input className='mt8' placeholder='请输入你的KR' value={item.Kr4} />
			<Input className='mt8' placeholder='请输入你的KR' value={item.Kr5} /> */}
            {inputTemplate(item,i)}
        </Fragment>
	)
    const inputTemplate = (item,i)=>{
        console.log(item)
        let inputArr = []
        for(let s=0; s<5;s++){
            inputArr.push(<Input onChange={(e)=>changeInput(e)} onBlur={(e)=>inputBlur(e,i,s)} className='mt8' key={s+''+i} placeholder='请输入你的KR' defaultValue={item[`Kr${s+1}`]} />)
        }
        console.log(inputArr)
        return inputArr
    }
    const changeInput=(e)=>{
        console.log(e.target.value)
    }
    const inputBlur=(e,i,s)=>{
        const newData = [...data]
        newData[i][`Kr${s+1}`] = e.target.value
        setData(newData)
        localCache.setItem('FASTPAGE-OKR',JSON.stringify(newData))
    }
    // 添加
    const addItem = () =>{
        const newData = [...data,{o:'',Kr1:'',Kr2:'',Kr3:'',Kr4:'',Kr5:''}]
        setData(newData)
        localCache.setItem('FASTPAGE-OKR',JSON.stringify(newData))
    }
    // 删除
    const delItem = (i) =>{
        const newData = data.slice()
        newData.splice(i, 1)
        setData(newData)
        localCache.setItem('FASTPAGE-OKR',JSON.stringify(newData))
    }
	return (
		<div id="Okr">
            <Button type="primary" onClick={addItem}>新增</Button>
            <section className="section">
			{data.map((item, i) => (
				<Card key={i}>
					{template(item,i)}
                    <div className="delIcon" onClick={delItem}>X</div>
				</Card>
			))}
            </section>
		</div>
	)
}

export default Okr
