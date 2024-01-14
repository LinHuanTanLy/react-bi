import React from "react";
import { BillOutline, MailOutline } from 'antd-mobile-icons'

const TopTitleBar = () => {
    return <div className="clear-fix" id="top-title-container">
        <div className="top-title-right float-right">
            <BillOutline />
            <MailOutline />
        </div>
        <div className="top-title-middle">
            <span>首页</span>
            <span>小时达</span>
        </div>
    </div>
};


export default TopTitleBar;