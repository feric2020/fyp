<template>
    <div style="background:#fff;">
        <van-tabbar 
        route
        active-color="#1989fa"
        inactive-color="#7d7e80"
        >
            <van-tabbar-item to="/" icon="wap-home-o">首页</van-tabbar-item>
            <van-tabbar-item to="/cateList" icon="coupon-o" dot>分类</van-tabbar-item>
            <van-tabbar-item to="/ChoppingCart" icon="shopping-cart-o" >购物车</van-tabbar-item>
            <van-tabbar-item to="/personal" icon="manager-o" >个人</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    name: 'footer_bar',
    data() {
        return{
           
        }
    }
}
</script>