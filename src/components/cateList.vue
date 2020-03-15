<template>
<div>
    <!-- header -->
    <van-sticky>
    <div class="header" style="background:#fff;"><br>
        <van-search 
          class="search_header"
          placeholder="搜索商品,共23889款好物"
          v-model="search_b" />
    </div>
    </van-sticky>    
    <!-- 左分类区 -->
    <van-sidebar v-model="activeKey">
        <van-sidebar-item title="推荐专区" />
        <van-sidebar-item title="宅家防护" />
        <van-sidebar-item title="爆品专区" />
        <van-sidebar-item title="新品专区" />
        <van-sidebar-item title="居家生活" />
        <van-sidebar-item title="服饰鞋包" />
        <van-sidebar-item title="美食酒水" />
        <van-sidebar-item title="个护清洁" />
        <van-sidebar-item title="母婴亲子" />
        <van-sidebar-item title="运动旅行" />
        <van-sidebar-item title="数码家电" />
        <van-sidebar-item title="全球特色" />
    </van-sidebar> 

    <!-- 吸底-footer -->
     <footer_bar></footer_bar>
</div>
</template>

<script>
import axios from 'axios'
import footer_bar from './footer_bar'

export default {
    name: 'cateList',
    data() {
        return{
           search_b:'',
           activeKey:0 
        }
    },
    components:{footer_bar}
}
</script>
<style >
    .header{
        width: 100%;
        position: relative;
    }
    .search_header{ 
        margin: 0 .2rem 0 .2rem; 
        padding: 0 0 0 1.4rem;
    }
   
</style>