import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hotword:['手机11. 11','爆品3折','开关插座','爆款5折','进口好物','大粉水','300减40','低至9.9'],//热词
    FsCol1list:[
        {
            keyword:{家用电器:"#"},
            boxdata:{
                channel:{
                    家电馆:"#",
                    家电专卖店:"#",
                    家电服务:"#",
                    企业采购:"#",
                    商用电器:"#",
                    高价回收:"#",
                },
                detail:[
                {
                    detailtit:'电视',
                    detailcontent:{
                        '全面屏电视':"#",
                        '教育电视':"#",
                        'OLED电视':"#",
                        '智慧屏':"#",
                        '4K超清电视':"#",
                        '55英寸':"#",
                    }
                },
                {
                    detailtit:'空调',
                    detailcontent:{
                        '空调挂机':"#",
                        '空调柜机':"#",
                        '中央空调':"#",
                        '变频空调':"#",
                        '一级能效':"#",
                        '移动空调':"#",
                    }
                }],
                brand:{
                        '西门子':'img/First/FsCol1/ximenzi.jpg',
                        '万和':'img/First/FsCol1/ximenzi.jpg',
                        '惠普':'img/First/FsCol1/ximenzi.jpg',
                        'LETV':'img/First/FsCol1/ximenzi.jpg',
                        '海尔':'img/First/FsCol1/ximenzi.jpg',
                        '格力':'img/First/FsCol1/ximenzi.jpg',
                        '飞利浦':'img/First/FsCol1/ximenzi.jpg',
                        '海信':'img/First/FsCol1/ximenzi.jpg'
                    },
                promotion:
                    {
                        AD1:'img/First/Recommend1.jpg',
                        AD2:'img/First/Recommend2.jpg'
                    }
                
            }  
        },
        {
            keyword:{
                手机:"#",
                运营商:"#",
                数码:"#"
            },
            boxdata:{
                channel:{
                    家电馆:"#",
                    家电专卖店:"#",
                    家电服务:"#",
                    企业采购:"#",
                    商用电器:"#",
                    高价回收:"#",
                },
                detail:[
                {
                    detailtit:'电视1',
                    detailcontent:{
                        '全面屏电视':"#",
                        '教育电视':"#",
                        'OLED电视':"#",
                        '智慧屏':"#",
                        '4K超清电视':"#",
                        '55英寸':"#",
                    }
                },
                {
                    detailtit:'空调1',
                    detailcontent:{
                        '空调挂机':"#",
                        '空调柜机':"#",
                        '中央空调':"#",
                        '变频空调':"#",
                        '一级能效':"#",
                        '移动空调':"#",
                    }
                }],
                brand:{
                        '西门子':'img/First/FsCol1/ximenzi.jpg',
                        '万和':'img/First/FsCol1/ximenzi.jpg',
                        '惠普':'img/First/FsCol1/ximenzi.jpg',
                        'LETV':'img/First/FsCol1/ximenzi.jpg',
                        '海尔':'img/First/FsCol1/ximenzi.jpg',
                        '格力':'img/First/FsCol1/ximenzi.jpg',
                        '飞利浦':'img/First/FsCol1/ximenzi.jpg',
                        '海信':'img/First/FsCol1/ximenzi.jpg'
                },
                promotion:
                    {
                        AD1:'img/First/Recommend1.jpg',
                        AD2:'img/First/Recommend2.jpg'
                    }
            }   
        }
    ],//品类选择列表
    textname:"textname",
    Navigation:[
        {
            navtagName:"网站导航",
            boxdata:[
                {
                    title:"京东生活1",
                    menuitem:{
                        "新品首发1":"#",
                        "新品首发2":"#",
                        "新品首发4":"#",
                        "新品首发5":"#",
                        "新品首发6":"#",
                        "新品首发7":"#",
                        "新品首发8":"#",
                        "新品首发9":"#",
                        "新品首发11":"#",
                        "新品首发12":"#",
                        "新品首发13":"#",
                        "新品首发14":"#"
                    }                    
                },
                {
                title:"京东生活2",
                menuitem:{
                    "新品首发1":"#",
                    "新品首发2":"#",
                    "新品首发4":"#",
                    "新品首发5":"#",
                    "新品首发6":"#",
                    "新品首发7":"#",
                    "新品首发8":"#",
                    "新品首发9":"#",
                    "新品首发11":"#",
                    "新品首发12":"#",
                    "新品首发13":"#",
                    "新品首发14":"#"
                }                    
                },
                {
                title:"京东生活3",
                menuitem:{
                    "新品首发1":"#",
                    "新品首发2":"#",
                    "新品首发4":"#",
                    "新品首发5":"#",
                    "新品首发6":"#",
                    "新品首发7":"#",
                    "新品首发8":"#",
                    "新品首发9":"#",
                    "新品首发11":"#",
                    "新品首发12":"#",
                    "新品首发13":"#",
                    "新品首发14":"#"
                }                    
                },
                {
                title:"京东生活4",
                menuitem:{
                    "新品首发1":"#",
                    "新品首发2":"#",
                    "新品首发4":"#",
                    "新品首发5":"#",
                    "新品首发6":"#",
                    "新品首发7":"#",
                    "新品首发8":"#",
                    "新品首发9":"#",
                    "新品首发11":"#",
                    "新品首发12":"#",
                    "新品首发13":"#",
                    "新品首发14":"#"
                }                    
                }
            ],
            tagClass:"PullList"
        },{
            navtagName:"客户服务",
            boxdata:[
                {
                    title:"京东生活1",
                    menuitem:{
                        "新品首发1":"#",
                        "新品首发2":"#",
                        "新品首发4":"#",
                        "新品首发5":"#",
                        "新品首发6":"#",
                        "新品首发7":"#",
                        "新品首发8":"#",
                        "新品首发9":"#",
                    }                    
                },
                {
                    title:"京东生活2",
                    menuitem:{
                        "新品首发1":"#",
                        "新品首发2":"#",
                        "新品首发4":"#",
                        "新品首发5":"#",
                        "新品首发6":"#",
                        "新品首发7":"#",
                        "新品首发8":"#",
                        "新品首发9":"#",
                    }                    
                },                  
            ],
            tagClass:"PullList"
        },{
            navtagName:"企业采购",
            boxdata:[
                {
                    title:"",
                    menuitem:{
                        "企业购":"#",
                        "商用场景馆":"#",
                        "工业品":"#",
                        "丰客多商城":"#",
                        "礼品卡":"#",
                        "微信企业购":"#",
                        "公品优选":"#",
                        "京东锦礼":"#",
                        "大中型企业采购":"#",
                    }
                }
            ],
            tagClass:"Red PullList"
        },{
            navtagName:"京东会员",
            boxdata:[],
            tagClass:""
        },{
            navtagName:"我的京东",
            boxdata:[
                {
                    title:"",
                    menuitem:{
                        待处理订单:"#",
                        我的问答:"#",
                        返修退换货:"#",
                        我的关注:"#",
                        降价产品:"#",
                    }
                }, {
                    title:"",
                    menuitem:{
                        我的京豆:"#",
                        我的优惠卷:"#",
                        我的白条:"#",
                        我的理财:"#",
                    }
                },
            ],
            tagClass:"PullList"
        },{
            navtagName:"我的订单",
            boxdata:[],
            tagClass:""
        }
    ],//顶部导航
    sitelist:[{
  tit:"",
  list:{
      北京:"#",
      上海:"#",
      天津:"#",
      重庆:"#",
      河北:"#",
      山西:"#",
      河南:"#",
      辽宁:"#",
      吉林:"#",
      黑龙江:"#",
      内蒙古:"#",
      江苏:"#",
      山东:"#",
      安徽:"#",
      浙江:"#",
      福建:"#",
      湖北:"#",
  }
  },{
  tit:"地区专享版本",
  list:{
      中国港澳:"#",
      中国台湾:"#",
      京东全球:"#",
  }
  },{
  tit:"Available Sites",
  list:{
      "Global Site":"#",
  }
    }],//地区组件数据
    newsList:[
        {
            newsTag:"热门",
            newsContent:"大屏全能型办公本，小新Pro 16当仁不让！"
        },
        {
            newsTag:"HOT",
            newsContent:"大屏全能型办公本，小新Pro 16当仁不让！"
        },
        {
            newsTag:"最新",
            newsContent:"大屏全能型办公本，小新Pro 16当仁不让！"
        },
        {
            newsTag:"热议",
            newsContent:"大屏全能型办公本，小新Pro 16当仁不让！"
        },
    ],//新闻组件数据
    serviceList:[
        {
            tag:"话费",
            img1:"img/icon/cat.png",
            img2:"img/icon/camera.png",
            link:"#"
        },
        {
            tag:"话费",
            img1:"img/icon/cat.png",
            img2:"img/icon/camera.png",
            link:"#"
        },
        {
            tag:"话费",
            img1:"img/icon/cat.png",
            img2:"img/icon/camera.png",
            link:"#"
        },

        {
            tag:"话费",
            img1:"img/icon/cat.png",
            img2:"img/icon/camera.png",
            link:"#"
        },

        {
            tag:"话费",
            img1:"img/icon/cat.png",
            img2:"img/icon/camera.png",
            link:"#"
        },

        {
            tag:"话费",
            img1:"img/icon/cat.png",
            img2:"img/icon/camera.png",
            link:"#"
        },
        {
            tag:"话费",
            img1:"img/icon/cat.png",
            img2:"img/icon/camera.png",
            link:"#"
        },
        {
            tag:"话费",
            img1:"img/icon/cat.png",
            img2:"img/icon/camera.png",
            link:"#"
        },
        {
            tag:"话费",
            img1:"img/icon/cat.png",
            img2:"img/icon/camera.png",
            link:"#"
        },
        {
            tag:"话费",
            img1:"img/icon/cat.png",
            img2:"img/icon/camera.png",
            link:"#"
        },
        {
            tag:"话费",
            img1:"img/icon/cat.png",
            img2:"img/icon/camera.png",
            link:"#"
        },
        {
            tag:"话费",
            img1:"img/icon/cat.png",
            img2:"img/icon/camera.png",
            link:"#"
        },
    ],//服务组件数据
    sliderRecommendList:[
        {
            img1:"img/First/Recommend1.jpg",
            img2:"img/First/Recommend1.jpg",
            img3:"img/First/Recommend1.jpg",
        },
        {
            img1:"img/First/Recommend2.jpg",
            img2:"img/First/Recommend2.jpg",
            img3:"img/First/Recommend2.jpg",
        },
        {
            img1:"img/First/Recommend3.jpg",
            img2:"img/First/Recommend3.jpg",
            img3:"img/First/Recommend3.jpg",
        },
    ],//推荐轮播图数据
    footer:{
        footerService:[
            {
                tit:"多",
                txt:"品类齐全，轻松购物"
            }
        ],
        footerHelp:[
            {
                tit:"购物指南",
                con:[
                    {
                        link:"#",
                        txt:"购物流程"
                    }
                ]
            }
        ],
        footerCopyright:[
            {
                link:'#',
                txt:"关于我们"
            }
        ]

    },//底部组件数据
    seckillList:[
        {
            itemnumber:'1',
            itemList:[
                {
                    link:'#',
                    img:'img/Seckill/seckillList01.jpg',
                    desc:'山茶油',
                    priceDiscount:'279.00',
                    priceOrigin:'338.00'
                },
                {
                    link:'#',
                    img:'img/Seckill/seckillList01.jpg',
                    desc:'山茶油',
                    priceDiscount:'279.00',
                    priceOrigin:'338.00'
                },
                {
                    link:'#',
                    img:'img/Seckill/seckillList01.jpg',
                    desc:'山茶油',
                    priceDiscount:'279.00',
                    priceOrigin:'338.00'
                },
                {
                    link:'#',
                    img:'img/Seckill/seckillList01.jpg',
                    desc:'山茶油',
                    priceDiscount:'279.00',
                    priceOrigin:'338.00'
                },
            ]
        },
        {
            itemnumber:'2',
            itemList:[
                {
                    link:'#',
                    img:'img/Seckill/seckillList01.jpg',
                    desc:'山茶油',
                    priceDiscount:'279.00',
                    priceOrigin:'338.00'
                },
                {
                    link:'#',
                    img:'img/Seckill/seckillList01.jpg',
                    desc:'山茶油',
                    priceDiscount:'279.00',
                    priceOrigin:'338.00'
                },
                {
                    link:'#',
                    img:'img/Seckill/seckillList01.jpg',
                    desc:'山茶油',
                    priceDiscount:'279.00',
                    priceOrigin:'338.00'
                },
                {
                    link:'#',
                    img:'img/Seckill/seckillList01.jpg',
                    desc:'山茶油',
                    priceDiscount:'279.00',
                    priceOrigin:'338.00'
                },
            ]
        },
        {
            itemnumber:'3',
            itemList:[
                {
                    link:'#',
                    img:'img/Seckill/seckillList01.jpg',
                    desc:'山茶油',
                    priceDiscount:'279.00',
                    priceOrigin:'338.00'
                },
                {
                    link:'#',
                    img:'img/Seckill/seckillList01.jpg',
                    desc:'山茶油',
                    priceDiscount:'279.00',
                    priceOrigin:'338.00'
                },
                {
                    link:'#',
                    img:'img/Seckill/seckillList01.jpg',
                    desc:'山茶油',
                    priceDiscount:'279.00',
                    priceOrigin:'338.00'
                },
                {
                    link:'#',
                    img:'img/Seckill/seckillList01.jpg',
                    desc:'山茶油',
                    priceDiscount:'279.00',
                    priceOrigin:'338.00'
                },
            ]
        },
        {
            itemnumber:'4',
            itemList:[
                {
                    link:'#',
                    img:'img/Seckill/seckillList01.jpg',
                    desc:'山茶油',
                    priceDiscount:'279.00',
                    priceOrigin:'338.00'
                },
                {
                    link:'#',
                    img:'img/Seckill/seckillList01.jpg',
                    desc:'山茶油',
                    priceDiscount:'279.00',
                    priceOrigin:'338.00'
                },
                {
                    link:'#',
                    img:'img/Seckill/seckillList01.jpg',
                    desc:'山茶油',
                    priceDiscount:'279.00',
                    priceOrigin:'338.00'
                },
                {
                    link:'#',
                    img:'img/Seckill/seckillList01.jpg',
                    desc:'山茶油',
                    priceDiscount:'279.00',
                    priceOrigin:'338.00'
                },
            ]
        },
        {
            itemnumber:'5',
            itemList:[
                {
                    link:'#',
                    img:'img/Seckill/seckillList01.jpg',
                    desc:'山茶油',
                    priceDiscount:'279.00',
                    priceOrigin:'338.00'
                },
                {
                    link:'#',
                    img:'img/Seckill/seckillList01.jpg',
                    desc:'山茶油',
                    priceDiscount:'279.00',
                    priceOrigin:'338.00'
                },
                {
                    link:'#',
                    img:'img/Seckill/seckillList01.jpg',
                    desc:'山茶油',
                    priceDiscount:'279.00',
                    priceOrigin:'338.00'
                },
                {
                    link:'#',
                    img:'img/Seckill/seckillList01.jpg',
                    desc:'山茶油',
                    priceDiscount:'279.00',
                    priceOrigin:'338.00'
                },
            ]
        },
        
    ],//秒杀组件数据  
    SpecialOffer: [
            {
                tag: "精选",
                list: [
                    {
                        slogan: "107",
                        pic: "img/Spec/Spec_SpecialOfffer_01.jpg",
                        desc: "修正维生素",
                        discount: "26.9",
                        origin: "59.9",
                        soldnum: "397",
                    },
                    {
                        slogan: "107",
                        pic: "img/Spec/Spec_SpecialOfffer_01.jpg",
                        desc: "修正维生素",
                        discount: "26.9",
                        origin: "59.9",
                        soldnum: "397",
                    },
                    {
                        slogan: "107",
                        pic: "img/Spec/Spec_SpecialOfffer_01.jpg",
                        desc: "修正维生素",
                        discount: "26.9",
                        origin: "59.9",
                        soldnum: "397",
                    },
                    {
                        slogan: "107",
                        pic: "img/Spec/Spec_SpecialOfffer_01.jpg",
                        desc: "修正维生素",
                        discount: "26.9",
                        origin: "59.9",
                        soldnum: "397",
                    },
                    {
                        slogan: "107",
                        pic: "img/Spec/Spec_SpecialOfffer_01.jpg",
                        desc: "修正维生素",
                        discount: "26.9",
                        origin: "59.9",
                        soldnum: "397",
                    },
                ]
            },
            {
                tag: "美食",
                list: [
                    {
                        slogan: "107",
                        pic: "img/Spec/Spec_SpecialOfffer_01.jpg",
                        desc: "修正维生素",
                        discount: "26.9",
                        origin: "59.9",
                        soldnum: "397",
                    },
                    {
                        slogan: "107",
                        pic: "img/Spec/Spec_SpecialOfffer_01.jpg",
                        desc: "修正维生素",
                        discount: "26.9",
                        origin: "59.9",
                        soldnum: "397",
                    },
                    {
                        slogan: "107",
                        pic: "img/Spec/Spec_SpecialOfffer_01.jpg",
                        desc: "修正维生素",
                        discount: "26.9",
                        origin: "59.9",
                        soldnum: "397",
                    },
                    {
                        slogan: "107",
                        pic: "img/Spec/Spec_SpecialOfffer_01.jpg",
                        desc: "修正维生素",
                        discount: "26.9",
                        origin: "59.9",
                        soldnum: "397",
                    },
                    {
                        slogan: "107",
                        pic: "img/Spec/Spec_SpecialOfffer_01.jpg",
                        desc: "修正维生素",
                        discount: "26.9",
                        origin: "59.9",
                        soldnum: "397",
                    },
                ]
            },

        ],
    LightningBuy:{
        col1Logo:"img/Spec/LightningBuy/LightningBuy_col1_logo01.png",
        col1Name:"男士护肤热卖专场",
        col1Number:"2",
        col1Pic:"img/Spec/LightningBuy/LightningBuy_col1_pic01.jpg",
        col2List:[
            {
                col2Logo:"img/Spec/LightningBuy/LightningBuy_col2_logo01.png",
                col2Name:"苏泊尔清凉节专场"
            },
        ]
    }       
    
  },
  mutations: {

  },
  actions: {

  }
})
