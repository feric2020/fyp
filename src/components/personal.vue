<template>
<div>
    <!-- header -->
    <van-row class="row" type="flex" justify="space-between">
        <van-col class="login-a" span="6">
            <router-link to="./"><van-icon name="wap-home-o" size=".5rem" /></router-link> 
        </van-col>
        <van-col class="login-b" span="6">
            <h1>网易严选</h1>
        </van-col>
        <van-col class="login-c" span="6">
            <router-link to="./cateList"><van-icon name="search" size=".5rem" /></router-link>&nbsp;&nbsp;&nbsp;   
            <router-link to="./ChoppingCart"><van-icon name="shopping-cart-o" size=".5rem" /></router-link>
        </van-col>
    </van-row>
    <!-- body -->
        <div class="body-a">
            <van-image
            width="2.68rem"
            height=".9rem" 
            :src="require('../assets/images-login/login-a.png')" />
        </div>
    <!-- 登录表单验证 -->
    <div>
        <van-form @submit="onSubmit">
          <van-field
            v-model="username"
            name="账号"
            label="账号"
            placeholder="请输入账号"
            :rules="[{ required: true, message: '请填写账号' }]"
        />
        <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="请输入密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
            <van-button  block type="danger" native-type="submit">登录</van-button><br>
            <van-button  block native-type="submit" style="border:.5px solid red;">重置</van-button>
            <van-row type="flex" 
                justify="space-between"
                style="color: #7f7f7f;padding:.2rem;">
                <van-col span="6">手机验证登录</van-col>
                <van-col span="9">邮箱验证登录</van-col>
                <van-col span="8" style="text-align:right;">注册</van-col>
            </van-row>
        </div>
        </van-form>
    </div>
    <!-- 底部图标 -->
    <div class="foot-pic">
    <van-row type="flex" justify="center" >
        <van-col span="6">
            <img
                width="20px"
                height="20px" 
                :src="require('../assets/images-login/1.png')" />
            <span class="name">微信</span>
        </van-col>
        &nbsp;&nbsp;&nbsp;
        <div style="width:1px;border:0.2px solid #7f7f7f"></div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <van-col span="6">
            <img
                width="20px"
                height="20px" 
                :src="require('../assets/images-login/2.png')" />
            <span class="name">QQ</span>
        </van-col>
        &nbsp;&nbsp;&nbsp;
        <div style="width:.6px;border:0.2px solid #7f7f7f"></div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <van-col span="6">
            <img
                width="20px"
                height="20px" 
                :src="require('../assets/images-login/3.png')" />
            <span class="name">微博</span>
        </van-col>
    </van-row>
    </div>
</div>
</template>

<script>

export default {
    name:'personal',
    data() {
        return{
          username:'',
          password:'' 
        }
    },
    methods: {
        onSubmit(values) {
            console.log('submit', values)
        },
        bot(values){}
    },
}
</script>
<style scoped>
/* header */
.row van-row{
    height: .44rem;
    background-color: aqua;
    padding: 0 0.8rem 0 0.12rem;
}
.login-a{
    padding: .15rem .12rem 0 .2rem;
}
.login-b h1{
    font-size: .282rem;
    font-family: Georgia, serif;
    font-weight: bold;
    padding: .2rem;
}
.login-c{
    padding: .15rem .12rem 0 .10rem;
}
/* 中间商标 */
.body-a {
    padding: 1.6rem 0 .5rem;
    text-align: center;
}
/* 底部 */
.foot-pic{
    width: 3.75rem;
    margin: 2.4rem 1.3rem;
}

.name{
    font-size: .22rem;
    height: .26rem;
    color: #7f7f7f;
    margin-right: .08667rem;
    vertical-align: -3%;
}
</style>