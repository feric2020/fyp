<template>
  <div>
   <van-sticky>
    <!-- header -->
    <van-row style="background:#fff;">
      <van-col>
        <h1>网易严选</h1>
      </van-col>
      <van-col>
        <van-search 
          class="search_header"
          placeholder="搜索商品，诸多好货供您选择" 
          v-model="search_a" />
      </van-col>
      <van-col> 
        <router-link to="./personal"><div class="btn_login">登录</div></router-link>
      </van-col>
    </van-row>
    <!-- 滚动的列表按钮 -->
    <van-tabs>
      <van-tab v-for="(n, inx) in loginBtnList" :key="inx" :title="n">
        <!-- 内容 
         {{ n }}-->
      </van-tab>
    </van-tabs>
  </van-sticky>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
      <van-swipe-item v-for="(n, inx) in imgObj" :key="inx">
        <img :src=n />
      </van-swipe-item>
    </van-swipe>
    <!-- 内容标签 -->
    <van-row class="moviepic">
      <van-col span="6">
        <i class="icon icon-1"></i>
        <span>自营品牌</span>
      </van-col>
      <van-col span="10">
        <i class="icon icon-2"></i>
        <span>30天无忧退货</span>
      </van-col>
      <van-col span="8">
        <i class="icon icon-3"></i>
        <span>48小时快速退款</span>
      </van-col>
    </van-row>
    <!-- 主菜单栏 -->
    <van-grid :column-num="4">
      <van-grid-item v-for="(n, inx) in shoppinglabel" :key="inx">
        <img :src=n.imgurl />
        <div> {{ n.pic_txt }} </div>
      </van-grid-item>
    </van-grid>
    <!-- 商品列表 -->
    <van-row type="flex" justify="space-between">
      <van-col class="shopfirst">
        <h1>人气推荐</h1>
      </van-col>
      <van-col class="_shopfirst">
        <a href="#">更多 > </a>
      </van-col>
    </van-row>

    <van-grid :center="false"  :border="false" :column-num="3">
      <van-grid-item v-for="(n, inx) in shoppingList" :key="inx">
        <div class="shopDiv">
          <img :src=n.imgurl />
        </div>
        <div> {{ n.txt }} </div>
      </van-grid-item>
    </van-grid>
    <!-- 黑色footer -->
    <div class="footer">
      <div class="footer-button">
        <van-button plain hairline size="small" class="button_a">下载APP</van-button>
        <van-button plain hairline size="small" >电脑版</van-button><br><br>
        <span>网易公司版权所有 © 1997-2020</span><br>
        <span>食品经营许可证：JY1330101080111719</span>
      </div>
      
    </div>
    <!-- 吸底-footer -->
    <footer_bar></footer_bar>
  </div>
</template>

<script>
import axios from 'axios'
import footer_bar from './footer_bar'

export default {
  name: 'index_app',
  data () {
    return {
      search_a : '',
      loginBtnList:'',
      imgObj:[
          'https://yanxuan.nosdn.127.net/8c5af34810092b0cfe59d1020b28bcfe.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/bf468e6d4fc51b0c60118e670ea341fa.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/97526e8f2e7bd89abf9496134ba2a1d5.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/b3782def13e1fbba9f08bf8545be15d0.png?type=webp&imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/71b5fe1a856106638e3f9cd6fd163ee3.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/535bc05ed9c25cadb5f195f549040a72.jpg?type=webp&imageView&quality=75&thumbnail=750x0'
      ],
      shoppinglabel:[
        {
          imgurl:require('../assets/shoppinglabel/p1.png'),
          pic_txt:'推荐'
        },
          {
          imgurl:require('../assets/shoppinglabel/p2.png'),
          pic_txt:'居家生活'
        },
          {
          imgurl:require('../assets/shoppinglabel/p3.png'),
          pic_txt:'服饰鞋包'
        },
          {
          imgurl:require('../assets/shoppinglabel/p4.png'),
          pic_txt:'美食酒水'
        },
          {
          imgurl:require('../assets/shoppinglabel/p5.png'),
          pic_txt:'母婴亲子'
        },
          {
          imgurl:require('../assets/shoppinglabel/p6.png'),
          pic_txt:'运动旅行'
        },
          {
          imgurl:require('../assets/shoppinglabel/p7.png'),
          pic_txt:'数码家电'
        },
          {
          imgurl:require('../assets/shoppinglabel/p8.png'),
          pic_txt:'全球特色'
        },
      ],
      active:'',
      shoppingList:[
        {
          imgurl:require('../assets/shoppingList/1.jpg'),
          txt:'咸香酥脆，肉松满满烘焙燕麦片 600克',
          price:'¥52.9',
          gradientPrice:0
        },
        {
          imgurl:require('../assets/shoppingList/2.jpg'),
          txt:'停课不停学 网课神器 小白智能打印机',
          price:'¥1899',
          gradientPrice:0
        },
        {
          imgurl:require('../assets/shoppingList/3.jpg'),
          txt:'暴击式的甜蜜，云南高原沃柑 8斤',
          price:'¥78',
          gradientPrice:0
        },
        {
          imgurl:require('../assets/shoppingList/4.jpg'),
          txt:'75%酒精消毒湿巾囤货装 居家出行必备',
          price:'¥39',
          gradientPrice:0
        },
        {
          imgurl:require('../assets/shoppingList/5.jpg'),
          txt:'18小时持续抑菌，口罩抗菌抑菌喷雾',
          price:'¥45',
          gradientPrice:0
        },
        {
          imgurl:require('../assets/shoppingList/6.jpg'),
          txt:'高温蒸汽清洁机',
          price:'¥129',
          gradientPrice:0
        } 
      ]
    }
  },
  components:{footer_bar},
  created(){
    axios.get('http://localhost:5454/get_loginbtnlist')
      .then( _d =>{
        console.log( _d.data );
        this.loginBtnList = _d.data;
      });
  }
}
</script>

<style scoped>
h1{
  width: 1.85rem;display: inline-block;
  margin: .12rem 0 0 .3rem;
  font-size: .35rem;
}
.search_header{
  width: 3rem; border:0; 
  margin: .1rem 0 0 .1rem; 
  padding: 0;
}
.van-search__content{
  background: #ededed;
  border-radius:  .15rem;
}
.btn_login {
  margin: .1rem 0 0 .2rem;
  width: .8rem; height: .5rem;
  line-height: .5rem;
  text-align: center;
  font-size: .25rem;
  color: #f00;
  border: 1px solid #f00;
}
.moviepic {
  text-align: center;
  height: .6rem;
  line-height: .6rem;
  margin-top: .1rem;
}
.moviepic i.icon{
  display: inline-block;
  background-repeat: no-repeat;
  background-size: .35rem;
  vertical-align: middle;
  width: .3rem; height: .5rem;
}
.moviepic i.icon-1 {
  background-image: url('../assets/icon-1.png');
}
.moviepic i.icon-2 {
  background-image: url('../assets/icon-2.png');
}
.moviepic i.icon-3 {
  background-image: url('../assets/icon-3.png');
}
.moviepic span{
  vertical-align:initial;
}
.shopfirst h1 {
  display: block;clear: both;
  margin:0 0.2rem;
  height: .5rem;line-height: .5rem;
  float: left;font-size: .3rem;
}
._shopfirst a{float: right;font-size: .25rem;}
.shopDiv{
  width: 100%;background: #f5f5f5;
}
.footer{
  height: 2.5rem;
  background: #333;
  font-size:.1rem;color: #999999;
  text-align: center;
  padding: .54rem .2rem .2rem .2rem;
}
.footer-button button{
  width: 1.7rem;height: .6rem;
  background-color: #333;
  color: #ffff;
  font-size:.24rem; 
}
.button_a{
  margin-right: .5rem;
}
</style>
