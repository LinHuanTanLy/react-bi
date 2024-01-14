import React from 'react';
import TopPersonInfo from './components/TopPersonInfo';
import Wallet from './components/Wallet';
import { Toast } from 'antd-mobile';
import "./style.less"
const Mine = () => {
    return <div className='mine-container'>
        <TopPersonInfo />
        <Wallet onClickItem={(value) => {
            Toast.show({
                content: '点击了' + value,
            })
        }} />
        <Wallet onClickItem={(value) => {
            Toast.show({
                content: '点击了' + value,
            })
        }} />
        <Wallet onClickItem={(value) => {
            Toast.show({
                content: '点击了' + value,
            })
        }} />
        <Wallet onClickItem={(value) => {
            Toast.show({
                content: '点击了' + value,
            })
        }} />
        <Wallet onClickItem={(value) => {
            Toast.show({
                content: '点击了' + value,
            })
        }} />
        <Wallet onClickItem={(value) => {
            Toast.show({
                content: '点击了' + value,
            })
        }} />
           <Wallet onClickItem={(value) => {
            Toast.show({
                content: '点击了' + value,
            })
        }} />
    </div>
};

export default Mine;