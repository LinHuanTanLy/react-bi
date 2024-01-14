import React from "react";
import { Avatar, Swiper } from "antd-mobile";
import { SetOutline, MessageOutline, StarOutline, ShopbagOutline, AppstoreOutline, CheckCircleOutline } from 'antd-mobile-icons'
import "./style.less"
const TopPersonInfo = () => {
    const marketingArray = [
        "每天领一张 全品类券",
        "明天领一张 半品类券",
    ];

    const swiperItem = marketingArray.map(item => (
        <Swiper.Item key={item}>
            <span>{item}</span>
        </Swiper.Item>
    ))
    return (
        <div className="person-info-container">
            {/* 个人信息 */}
            <div id="person-info-top-container" className="clear-fix">
                <div id="person-info-top-left" className="clear-fix float-left">
                    <Avatar src={"https://img0.baidu.com/it/u=4112255082,204418733&fm=253&fmt=auto&app=120&f=JPEG?w=513&h=768"} style={{ "--border-radius": "50px", '--size': '42px', margin: "0", padding: "0", "--backgroundColor": "#000000" }} className="float-left" />
                    <span className="float-right">凌宇大哥哥</span>
                </div>
                <div className="person-info-top-right float-right">
                    <SetOutline />
                    <MessageOutline />
                </div>
            </div>

            {/* 收藏菜单 */}

            <div id="person-info-middle-container" className="clear-fix" >
                <div>
                    <i><StarOutline style={{ fontSize: 16 }} /></i>
                    <span>商品收藏</span>
                </div>
                <div>
                    <i><ShopbagOutline style={{ fontSize: 16 }} /></i>
                    <span>店铺收藏</span>
                </div>
                <div>
                    <i>  <CheckCircleOutline style={{ fontSize: 16 }} /></i>
                    <span>浏览记录</span>
                </div>
                <div>
                    <i>  <AppstoreOutline style={{ fontSize: 16 }} /></i>
                    <span>频道关注</span>
                </div>
            </div>

            {/* 个人营销 */}
            <div id="person-info-bottom-container">
                <div className="person-info-bottom-marking-container">
                    <div className="person-info-bottom-left">
                        <img src="assets/goods_detail_youhui.png" alt="图片描述" />
                        <div className="person-info-bottom-swiper">
                            <span>全品类券，限时领取</span>
                            <Swiper direction="vertical" style={{ '--height': '20px' }}
                                indicator={() => null} autoplay={true} loop={true}>
                                {swiperItem}
                            </Swiper>
                        </div>
                    </div>
                    <div className="person-info-bottom-right">
                        <div>
                            <span>¥</span>
                            <span>1.00</span>
                            <span>立即开通</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 个人通知 */}
            <div className="person-info-bottom-notice-container">
                <div className="person-info-bottom-notice-content">
                    <div>
                        <img src="assets/robot_pkg.webp" />
                    </div>
                    <div className="person-info-bottom-notice-swiper">
                        <span>"哈尔滨"大冻梨来袭</span>
                        <span>南方小土豆快快来袭</span>
                    </div></div>
                <div className="person-info-bottom-notice-more">
                    <span>|</span>
                    <span>更多</span>
                </div>
            </div>
        </div>

    );
}

export default TopPersonInfo;