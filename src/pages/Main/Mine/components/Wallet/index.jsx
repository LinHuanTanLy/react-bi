import { Card } from "antd-mobile";
import React from "react";
import { RightOutline } from 'antd-mobile-icons'
import "./style.less"

const Wallet = (props) => {

    const handleClickItem = (value) => {
        if (props.onClickItem) {
            props.onClickItem(value)
        }
    };

    const items = [
        {
            "key": 0,
            "value": "0",
            "title": "京豆",
            "desc": "购物返金豆",
        },
        {
            "key": 1,
            "value": "0.00",
            "title": "红包",
            "desc": "购物折扣",
        },
        {
            "key": 2,
            "value": "99",
            "title": "优惠券",
            "desc": "下单立省",
        },
        {
            "key": 3,
            "value": "0.00元",
            "title": "白条",
            "desc": "想省钱点这里",
        }
    ];


    const itemComponents = items.map(item =>
    (
        <div className="item-container" onClick={() => handleClickItem(item.key)} key={item.key}>
            <span className="text-bold">{item.value}</span>
            <span className="text-second">{item.title}</span>
            <span className="text-samller">{item.desc}</span>
        </div>
    )
    )


    return (
        <Card className="wallet-container">
            <div className="wallet-top-container">
                <span className="text-bold">我的钱包</span>
                <div>
                    <span className="text-second">查看全部</span>
                    <RightOutline />
                </div>
            </div>
            <div className="wallet-middle-container">
                {itemComponents}
            </div>
        </Card>
    )
};

export default Wallet