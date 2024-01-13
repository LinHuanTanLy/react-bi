import React from "react";
import "./style.less"
import { Avatar } from "antd-mobile";
import { PlayOutline, FaceRecognitionOutline, MessageOutline, SearchOutline } from 'antd-mobile-icons'
const SearchInput = () => {

    return (
        <div id="search-input-container" className="clear-fix">
            <div className="search-input-left float-left">
                <Avatar src={"https://img0.baidu.com/it/u=4112255082,204418733&fm=253&fmt=auto&app=120&f=JPEG?w=513&h=768"} style={{ "--border-radius": "50px", '--size': '32px', margin: "0", padding: "0", "--backgroundColor": "#000000" }} />

                <PlayOutline id="left-player-icon" />
            </div>
            <div className="search-input-right float-right">
                <FaceRecognitionOutline />
                <MessageOutline />
            </div>
            <div className="search-input-center">
                <div className="search-input-container">
                    <SearchOutline className="search-center-icon" />
                    <span>猜猜你会搜索什么?</span>
                </div>
            </div>


        </div>
    )
}

export default SearchInput;