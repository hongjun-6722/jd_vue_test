import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hotword:['手机11. 11','爆品3折','开关插座','爆款5折','进口好物','大粉水','300减40','低至9.9'],
    list:{
      1:'AA/BB',
      2:'CC/DD'
    },
    textname:"textname",
    CSboxdata:[
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
    ],
    SMboxdata:[
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
    EPboxdata:[
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
    MJboxdata:[
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
    }]
    
  },
  mutations: {

  },
  actions: {

  }
})
