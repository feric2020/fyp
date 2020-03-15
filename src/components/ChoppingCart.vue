<template>
<div>
    <!-- header 1 -->
    <van-row type="flex" justify="space-between">
      <van-col span="4" class="shop-a">购物车</van-col>
      <van-col span="10" offset="4" class="shop-b">领券</van-col>
    </van-row>  
     <!--header 2  -->
    <van-row type="flex" justify="center" class="biaoyu">
      <van-col span="8"><van-icon name="circle" />30天无忧退货</van-col>
      <van-col span="8"><van-icon name="circle" />48小时快速退款</van-col>
      <van-col span="8"><van-icon name="circle" />满88元免邮费</van-col>
    </van-row>
<div class="content">
    <img src="../assets/images-login/shopping-1.png">
    <div>去添加点什么吧</div>
</div>
<div class="button">
    <router-link to="./personal">
        <van-button type="danger" >登录</van-button>
    </router-link>
</div>

<!-- 吸底-footer -->
    <footer_bar></footer_bar>   
</div>
</template>

<script>
import footer_bar from './footer_bar'
export default {
    name:'ChoppingCart',
    data() {
        return{

        }
    },
    components:{footer_bar}
}
</script>
<style scoped>
/* header 1 */
.shop-a{
    font-size: .287rem;
    height: 1.17333rem;
    line-height: .8rem;
    text-align: center;
    position: relative;
    margin-left: .2rem;
}
.shop-b{
    font-size: .25rem;
    color: red;
    text-align: right;
    padding: .25rem .5rem;
}
/* header 2 */
.biaoyu{
    text-align: center;
    margin-top: -.2rem;
}
/* content */
.content{
    margin: 3rem 0 .4rem;
    text-align: center;
}
.content img{
    width: 2rem;
    height: 2rem;
}
.content div{
    margin-bottom: .66667rem;
    line-height: .05rem;
    font-size: .24rem;
    color: #999;
}
/* button */
.button{ text-align: center; }
.button button{ width: 4rem; }
</style>