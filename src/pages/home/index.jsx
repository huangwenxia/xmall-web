import {SafeArea,Swiper,Toast,Image} from "antd-mobile"
import './index.scss'
import {useState} from "react";

function Home() {
    const  [ carouselList, setCarouselList] = useState(
        [{
                src: "/temp/banner3.jpg",
                background: "rgb(203, 87, 60)",
            },
            {
                src: "/temp/banner2.jpg",
                background: "rgb(205, 215, 218)",
            },
            {
                src: "/temp/banner4.jpg",
                background: "rgb(183, 73, 69)",
            }
        ]
    )
    const swiperItems = carouselList.map((item, index) => (
        <Swiper.Item key={index}>
            <div
                className="content"
                style={{ background: item.background }}
                onClick={() => {
                    // Toast.show(`你点击了卡片 ${index + 1}`)
                }}
            >
                <Image src={item.src} width={100+'%'} height={100} />
            </div>
        </Swiper.Item>
    ))
    return (<div className="hm-wrapper">
        <div style={{ background: '#ace0ff' }}>
            <SafeArea position='top' />
        </div>
        <div className="hm-container">
            <div className="carousel-section">
                        <div className='titleNview-placing'></div>
                        <div className='titleNview-background'></div>
               <div className="swiper-box">
                   <Swiper
                       trackOffset={10}
                       slideSize={80}
                       style={{
                           '--border-radius': '8px',
                       }}
                       defaultIndex={0}
                   >
                       {swiperItems}
                   </Swiper>
                   {/*自定义swiper指示器*/}
                   <div className="swiper-dots">
                       <div className="num">{1}</div>
                       <div className="sign">{'/'}</div>
                       <div className="num">{2}</div>
                   </div>
               </div>
            </div>
        </div>
        <div>
            <SafeArea position='bottom' />
        </div>
    </div>)
}
export default Home
