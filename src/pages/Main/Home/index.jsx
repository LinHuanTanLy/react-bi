import React from 'react';
import SearchInput from './components/SearchInput';
import TopTitleBar from './components/TopTitlteBar';
const Home = () => {
    const tabItems = [
        {
            "key": "homePage",
            "title": "首页"
        },
        {
            "key": "hourArrive",
            "title": "小时达"
        }
    ];


    return <div >

        <TopTitleBar></TopTitleBar>

        {/* <SearchInput /> */}
    </div>
};

export default Home;