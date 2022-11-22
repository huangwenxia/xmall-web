import {SafeArea,Swiper,Toast,Image} from "antd-mobile"
import './index.scss'
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Home() {
    const navigate= useNavigate()
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
    const  [ goodsList, setGoodsList] = useState([{
        id: 1,
        image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553005139&di=3368549edf9eee769a9bcb3fbbed2504&imgtype=jpg&er=1&src=http%3A%2F%2Fimg002.hc360.cn%2Fy3%2FM01%2F5F%2FDB%2FwKhQh1T7iceEGRdWAAAAADQvqk8733.jpg',
        attr_val: '春装款 L',
        stock: 15,
        title: 'OVBE 长袖风衣',
        price: 278.00,
        number: 1
    },
        {
            id: 3,
            image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2319343996,1107396922&fm=26&gp=0.jpg',
            attr_val: '激光导航 扫拖一体',
            stock: 3,
            title: '科沃斯 Ecovacs 扫地机器人',
            price: 1348.00,
            number: 5
        },
        {
            id: 4,
            image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2668268226,1765897385&fm=26&gp=0.jpg',
            attr_val: 'XL',
            stock: 55,
            title: '朵绒菲小西装',
            price: 175.88,
            number: 1
        },
        {
            id: 5,
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552410549432&di=06dd3758053fb6d6362516f30a42d055&imgtype=0&src=http%3A%2F%2Fimgcache.mysodao.com%2Fimg3%2FM0A%2F67%2F42%2FCgAPD1vNSsHNm-TnAAEy61txQb4543_400x400x2.JPG',
            attr_val: '520 #粉红色',
            stock: 15,
            title: '迪奥（Dior）烈艳唇膏',
            price: 1089.00,
            number: 1
        },
        {
            id: 6,
            image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1031875829,2994442603&fm=26&gp=0.jpg',
            attr_val: '樱花味润手霜 30ml',
            stock: 15,
            title: "欧舒丹（L'OCCITANE）乳木果",
            price: 128,
            number: 1
        },
        {
            id: 7,
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553007107&di=390915aa8a022cf0b03c03340881b0e7&imgtype=jpg&er=1&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn0%2Fjfs%2Ft646%2F285%2F736444951%2F480473%2Faa701c97%2F548176feN10c9ed7b.jpg',
            attr_val: '特级 12个',
            stock: 7,
            title: '新疆阿克苏苹果 特级',
            price: 58.8,
            number: 10
        },
        {
            id: 8,
            image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2319343996,1107396922&fm=26&gp=0.jpg',
            attr_val: '激光导航 扫拖一体',
            stock: 15,
            title: '科沃斯 Ecovacs 扫地机器人',
            price: 1348.00,
            number: 1
        },
        {
            id: 9,
            image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2668268226,1765897385&fm=26&gp=0.jpg',
            attr_val: 'XL',
            stock: 55,
            title: '朵绒菲小西装',
            price: 175.88,
            number: 1
        },
        {
            id: 10,
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552410549432&di=06dd3758053fb6d6362516f30a42d055&imgtype=0&src=http%3A%2F%2Fimgcache.mysodao.com%2Fimg3%2FM0A%2F67%2F42%2FCgAPD1vNSsHNm-TnAAEy61txQb4543_400x400x2.JPG',
            attr_val: '520 #粉红色',
            stock: 15,
            title: '迪奥（Dior）烈艳唇膏',
            price: 1089.00,
            number: 1
        },
        {
            id: 11,
            image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1031875829,2994442603&fm=26&gp=0.jpg',
            attr_val: '樱花味润手霜 30ml',
            stock: 15,
            title: "欧舒丹（L'OCCITANE）乳木果",
            price: 128,
            number: 1
        },
        {
            id: 12,
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553007107&di=390915aa8a022cf0b03c03340881b0e7&imgtype=jpg&er=1&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn0%2Fjfs%2Ft646%2F285%2F736444951%2F480473%2Faa701c97%2F548176feN10c9ed7b.jpg',
            attr_val: '特级 12个',
            stock: 7,
            title: '新疆阿克苏苹果 特级',
            price: 58.8,
            number: 10
        },
        {
            id: 13,
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552405266625&di=a703f2b2cdb0fe7f3f05f62dd91307ab&imgtype=0&src=http%3A%2F%2Fwww.78.cn%2Fzixun%2Fnews%2Fupload%2F20190214%2F1550114706486250.jpg',
            attr_val: '春装款/m',
            stock: 15,
            title: '女装2019春秋新款',
            price: 420.00,
            number: 1
        }
    ])
    const [titleNViewBackground,setTitleNViewBackground] = useState(carouselList[0].background)
    const [loop,setLoop] = useState(true)

    const swiperItems = carouselList.map((item, index) => (
        <Swiper.Item key={index}>
            <div
                className="content"
                onClick={() => {
                    // setTitleNViewBackground(()=>item.background)
                    // Toast.show(`你点击了卡片 ${index + 1}`)
                }}
            >
                <Image src={item.src} width={100+'%'} height={100+'%'} />
            </div>
        </Swiper.Item>
    ))

    //详情页
    const navToDetailPage = (item) =>{
        //测试数据没有写id，用title代替
        let id = item.title;
        navigate({
            url: `/pages/product/product?id=${id}`
        })
    }
    return (<div className="hm-wrapper">
        <div style={{ background: '#ace0ff' }}>
            <SafeArea position='top' />
        </div>
        <div className="hm-container has-footer" >
            <div className="carousel-section">
                        <div className='titleNview-placing'></div>
                        <div className='titleNview-background' style={{backgroundColor:titleNViewBackground}}></div>
               <div className="swiper-box">
                   <Swiper
                       indicator={(total, current) => (
                           <div className="customIndicator">
                               <span className="num">{current + 1}</span>
                               <span  className="sign">/</span>
                               <span className="num">{total}</span>
                               {/*{`${current + 1} / ${total}`}*/}
                           </div>
                       )}
                       loop={{loop}}
                       defaultIndex={0}
                       onIndexChange={(index)=>{
                           setTitleNViewBackground(()=>carouselList[index].background)
                       }}
                   >
                       {swiperItems}
                   </Swiper>
               </div>
            </div>
            <div className="cate-section">
                <div className="cate-item">
                    <Image src="/temp/c3.png"></Image>
                    <span>环球美食</span>
                </div>
                <div className="cate-item">
                    <Image src="/temp/c5.png"></Image>
                    <span>个护美妆</span>
                </div>
                <div className="cate-item">
                    <Image src="/temp/c6.png"></Image>
                    <span>营养保健</span>
                </div>
                <div className="cate-item">
                    <Image src="/temp/c7.png"></Image>
                    <span>家居厨卫</span>
                </div>
                <div className="cate-item">
                    <Image src="/temp/c8.png"></Image>
                    <span>速食生鲜</span>
                </div>
            </div>
            <div className="ad-1">
                <Image src="/temp/ad1.jpg" fit="fill"></Image>
            </div>
            <div className="seckill-section m-t">
                <div className="s-header">
                    <Image className="s-img" src="/temp/secskill-img.jpg" fit="fill"/>
                    <span className="tip">8点场</span>
                    <span className="hour timer">07</span>
                    <span className="minute timer">13</span>
                    <span className="second timer">55</span>
                    <span className="yticon icon-you"></span>
                </div>
                <scroll-view className="floor-list" scroll-x>
                    <div className="scoll-wrapper">
                        {
                            goodsList.map((item, index) => (
                                <div key={index} className="floor-item" onClick={(item)=>navToDetailPage(item)}>
                                    <Image src={item.image} fit="fill"/>
                                    <span className="title clamp">{item.title}</span>
                                    <span className="price">￥{item.price}</span>
                                </div>
                            ))
                        }
                    </div>
                </scroll-view>
            </div>
        </div>
        <div>
            <SafeArea position='bottom' />
        </div>
    </div>)
}
export default Home
