import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { AppOutline, AddSquareOutline, ClockCircleOutline } from 'antd-mobile-icons'
import "./style.less"
const BottomNav = () => {
    return <div className="nav-footer">
        <ul className="clear-fix">
            <li>
                <NavLink exact to="/">
                    <AppOutline id="icon-container" />
                    <span>首页</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/trends">
                    <ClockCircleOutline id="icon-container" />
                    <span>动态</span>
                </NavLink>
            </li>
            <li>
                <NavLink exact to="/upload">
                    <AddSquareOutline id="icon-container-bigger" />
                </NavLink>
            </li>
            <li>
                <NavLink to="/shop">
                    <AppOutline id="icon-container" />
                    <span>会员购</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/mine">
                    <AppOutline id="icon-container" />
                    <span>我的</span>
                </NavLink>
            </li>

        </ul>
    </div>
};

export default BottomNav;