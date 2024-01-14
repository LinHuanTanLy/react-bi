import React from "react";
import { Avatar } from "antd-mobile";
import { SetOutline, MessageOutline } from 'antd-mobile-icons'

const TopPersonInfo = () => {
    return (

        <div className="person-info-container">
            <div id="person-info-top-container" className="clear-fix">
                <div id="person-info-top-left" className="clear-fix float-left">
                    <Avatar src={"https://img0.baidu.com/it/u=4112255082,204418733&fm=253&fmt=auto&app=120&f=JPEG?w=513&h=768"} style={{ "--border-radius": "50px", '--size': '52px', margin: "0", padding: "0", "--backgroundColor": "#000000" }} className="float-left" />
                    <span className="float-right">凌宇大哥哥</span>
                </div>
                <div className="person-info-top-right float-right">
                    <SetOutline />
                    <MessageOutline />
                </div>
            </div>


            <div id="person-info-bottom-container" ></div>
        </div>

    );
}

export default TopPersonInfo;