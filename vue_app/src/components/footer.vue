<template>
  <div class="container">
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="网站首页">
        <div class="flo1">
          <video src="../assets/video.mp4" class="myvideo w-100" autoplay="autoplay" loop="loop"></video>
          <img src="../assets/logo.png" class="mylogo">
          <span class="myTopLogo w-100"></span>
          <img src="../assets/page1_title.png" class="mypage1">
        </div>
        <div class="flo2">
          <img src="../assets/bg.png" class="mypage2 w-100">
          <div class=news_main>
            <mt-swipe :auto="2000" class="flo2_lb">
              <mt-swipe-item><img src="../assets/news1.jpg" class="news_lb"></mt-swipe-item>
              <mt-swipe-item><img src="../assets/news2.jpg" class="news_lb"></mt-swipe-item>
              <mt-swipe-item><img src="../assets/news3.jpg" class="news_lb"></mt-swipe-item>
            </mt-swipe>
            <div class="news_right">
              <mt-navbar v-model="newsselected" class="news_nav">
                <mt-tab-item id="新闻">新闻</mt-tab-item>
                <mt-tab-item id="公告">公告</mt-tab-item>
                <mt-tab-item id="活动">活动</mt-tab-item>
              </mt-navbar>
              <mt-tab-container v-model="newsselected" class="news_right_main">
                <mt-tab-container-item id="新闻">
                  <router-link to="/detail">
                    <mt-cell v-for="(n,i) of 10" :key="i" title="123123">09-16</mt-cell>  
                  </router-link>
                </mt-tab-container-item>
                <mt-tab-container-item id="公告">
                  <router-link to="/detail">
                    <mt-cell v-for="(n,i) of 10" :key="i" title="234234">10-04</mt-cell>  
                  </router-link>
                </mt-tab-container-item>
                <mt-tab-container-item id="活动">
                  <router-link to="/detail">
                    <mt-cell v-for="(n,i) of 10" :key="i"  title="345345">05-24</mt-cell>  
                  </router-link>
                </mt-tab-container-item>
              </mt-tab-container>
            </div>
          </div>
        </div>
        <div class="flo3">
          <img src="../assets/bg3.png" class="mypage3 w-100">
          <mt-swipe  :show-indicators="false" v-model="time" class="flo3_lb">
            <mt-swipe-item>
              <img src="../assets/huanying.png" class="hero_lb">
              <div class="hero_right_main">
                <div class="hero_name">
                  <img src="../assets/chengbao.png" class="tb">
                  <span>幻影</span>
                </div>
                <img src="../assets/from.png" class="jnlb" @click="clickImg($event)">
              </div>
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="../assets/keluosi.png" class="hero_lb">
              <div class="hero_right_main">
                <div class="hero_name">
                  <img src="../assets/shenyuan.png" class="tb">
                  <span>克罗斯</span>
                </div>
                <img src="../assets/from(1).png" class="jnlb" @click="clickImg($event)">
              </div>
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="../assets/bade.png" class="hero_lb">
              <div class="hero_right_main">
                <div class="hero_name">
                  <img src="../assets/youan.png" class="tb">
                  <span>巴德</span>
                </div>
                <img src="../assets/from(2).png" class="jnlb" @click="clickImg($event)">
              </div>
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="../assets/bumianzhe.png" class="hero_lb">
              <div class="hero_right_main">
                <div class="hero_name">
                  <img src="../assets/anying.png" class="tb">
                  <span>不眠者</span>
                </div>
                <img src="../assets/from(3).png" class="jnlb" @click="clickImg($event)">
              </div>
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="../assets/emolieshou.png" class="hero_lb">
              <div class="hero_right_main">
                <div class="hero_name">
                  <img src="../assets/senglin.png" class="tb">
                  <span>恶魔猎手</span>
                </div>
                <img src="../assets/from(4).png" class="jnlb" @click="clickImg($event)">
              </div>
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="../assets/mijiale.png" class="hero_lb">
              <div class="hero_right_main">
                <div class="hero_name">
                  <img src="../assets/shengguang.png" class="tb">
                  <span>米迦勒</span>
                </div>
                <img src="../assets/from(5).png" class="jnlb" @click="clickImg($event)">
              </div>
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="../assets/xigemengde.png" class="hero_lb">
              <div class="hero_right_main">
                <div class="hero_name">
                  <img src="../assets/chengbao.png" class="tb">
                  <span>西格蒙德</span>
                </div>
                <img src="../assets/from(6).png" class="jnlb" @click="clickImg($event)">
              </div>
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="../assets/guanxinzhe.png" class="hero_lb">
              <div class="hero_right_main">
                <div class="hero_name">
                  <img src="../assets/senglin.png" class="tb">
                  <span>观心者</span>
                </div>
                <img src="../assets/from(7).png" class="jnlb" @click="clickImg($event)">
              </div>
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="../assets/asimode.png" class="hero_lb">
              <div class="hero_right_main">
                <div class="hero_name">
                  <img src="../assets/shengguang.png" class="tb">
                  <span>阿斯莫德</span>
                </div>
                <img src="../assets/from(8).png" class="jnlb" @click="clickImg($event)">
              </div>
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="../assets/heianaxinduo.png" class="hero_lb">
              <div class="hero_right_main">
                <div class="hero_name">
                  <img src="../assets/anying.png" class="tb">
                  <span>黑暗阿辛多</span>
                </div>
                <img src="../assets/from(9).png" class="jnlb" @click="clickImg($event)">
              </div>
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <div class="flo4">
          <img src="../assets/bg4.png" class="mypage4 w-100">
          <mt-swipe  :show-indicators="false" :auto="0" class="flo4_lb">
            <mt-swipe-item><img src="../assets/1.jpg"  @click="clickImg($event)" class="lbt"></mt-swipe-item>
            <mt-swipe-item><img src="../assets/2.jpg"  @click="clickImg($event)" class="lbt"></mt-swipe-item>
            <mt-swipe-item><img src="../assets/3.jpg"  @click="clickImg($event)" class="lbt"></mt-swipe-item>
            <mt-swipe-item><img src="../assets/4.jpg"  @click="clickImg($event)" class="lbt"></mt-swipe-item>
            <mt-swipe-item><img src="../assets/5.jpg"  @click="clickImg($event)" class="lbt"></mt-swipe-item>
          </mt-swipe>
        </div>
        <big-img v-if="showImg" @clickit="viewImg" :imgSrc="imgSrc"></big-img>
      </mt-tab-container-item>
      <mt-tab-container-item id="新闻资讯">
        <img src="../assets/video_playBg.png" class="w-100">
        <div class="sec_main">
          <div class="sec_news" v-for="(item,index) in 100" :key="index">
            <router-link to="/detail">
              <span>《放置奇兵》09.16下午更新公告</span>
              <span class="date">09-16</span>
            </router-link>
          </div>
          <div style="margin-bottom:50px"></div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar class="foot_fixed" v-model="selected">
      <mt-tab-item id="网站首页">
        <span class="iconfont" :class="selected == '网站首页' ? 'icon-wangzhanshouye':'icon-shouye'"></span><br>
        网站首页
      </mt-tab-item>
      <mt-tab-item id="新闻资讯">
        <span class="iconfont" :class="selected == '新闻资讯' ? 'icon-shequ-':'icon-shequ'"></span><br>
        <span>新闻资讯</span>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import BigImg from './bigImg.vue';
export default {
  data(){
    return{
      selected:"网站首页",
      showImg:false,
      imgSrc: "",
      time:4000,
      newsselected:'新闻'
    }
  },
  components: {
    'big-img':BigImg
  },
  methods: {
    clickImg(e) {
        this.showImg = true;
        // 获取当前图片地址
        this.imgSrc = e.currentTarget.src;
    },
    viewImg(){
        this.showImg = false;
    },
  }
}
</script>

<style scoped>
  .iconfont{
   font-size:20px;
  }
  .mint-tabbar{
    background-color:#a43b2f;
  }
  .foot_fixed{
    position:fixed;
    z-index:1000;
  }
  /* 通用样式 */
  .w-100{
    width:100%;
  }
  /* 一楼 */
  .flo1{
    position:relative;
    z-index: 100;
  }
  /* 背景视频 */
  .myvideo{
    position:relative;
    z-index:1;
  }
  /* logo */
  .mylogo{
    position:fixed;
    z-index:100;
    top:0;
    left:40%;
    width:20%;
  }
  /* logo背景样式 */
  .myTopLogo{
    position: absolute;
    left: 0;
    top: 4%;
    height: 10%;
    background-color: #a43b2f;
    opacity: .75;
    z-index: 9;
  }
  /* 文字图片样式 */
  .mypage1{
    position:absolute;
    z-index:100;
    top:67%;
    left:31%;
    width:38%;
  }
  /* 二楼 */
  /* 二楼背景图片 */
  .flo2{
    position: relative;
    margin-top:-3%;
    z-index:101;
    height:197px;
  }
  .flo2 .news_main{
    background-color:rgba(37,42,48,0.8);
    width:90%;
    height:65%;
    position:relative;
    z-index: 101;
    top:-82%;
    left:5%;
  }
  .flo2_lb{
    position: relative;
    z-index:102;
    top:7%;
    left:3%;
    height:95%;
    width:45%;
  }
  .flo2 .news_lb{
    width:100%;
  }
  /* 消息导航栏 */
  .flo2 .news_right{
    position:relative;
    top:-87%;
    width: 48%;
    left:50%;
    height:100px;
  }
  .flo2 .mint-navbar .mint-tab-item{
    padding:0;
  }
  .flo2 .mint-navbar .mint-tab-item.is-selected{
    color:#000;
    border:none;
    background-color:#fff;
    border-radius:3px;
  }
  .flo2 .mint-cell{
    min-height: 16px;
  }
  .flo2 .mint-cell,.mint-navbar{
    background-color:rgba(0,0,0,0);
    color:#d7d7d7;
  }
  .flo2 .news_nav{
    height:10%;
  }
  /* 右侧新闻消息内容 */
  .flo2 .news_right_main{
    position:relative;
    height:100%;
    z-index:110;
    overflow: auto; 
    top:5%;
  }
  /* 三楼 */
  .flo3{
    position:relative;
    z-index: 101;
    top:-1.5%;
    height:198px;
  }
  .flo3_lb{
    position: relative;
    z-index:102;
    top:-96%;
    left:11%;
  }
  .hero_lb{
    height:70%;
  }
  .hero_right_main{
    width: 28%;
    height: 60%;
    float: right;
    position: relative;
    background-color: rgba(9,19,35,0.7);
    border: 2px solid #bdac77;
    border-radius: 10px;
    right:23%;
    top:10%;
    overflow: auto;
  }
  .hero_name{
    margin-bottom:5%;
  }
  .tb{
    width:10%;
    margin-left:25%;
    display:inline-block;
  }
  .flo3 span{
    color:#e4cd7c;
    font-size:12px;
  }
  .jnlb{
    width:90%;
    margin:0 8% 0 2%;
  }
  /* 四楼 */
  .flo4{
    position:relative;
    z-index: 101;
    top:-2.4%;
    margin-bottom:5%;
    height:216px;
  }
  .flo4_lb{
    position: relative;
    top:-88%;
    z-index: 102;
    left:36%;
  }
  .lbt{
    height:80%;
  }
    /* 新闻资讯 */
  .sec_main{
  background-color:rgb(37,34,52);
  width:100%;
  position:relative;
  top:-5px;
  box-shadow:0 0 40px 40px #252234;
  }
  /* 内容区域样式 */
  a:-webkit-any-link {
    color:#fff;
    text-decoration:none;
  }
  .sec_news{
    width:90%;
    margin-left:5%;
    /* color:#fff !important; */
    padding-top:10px;
    padding-bottom:10px;
    border-bottom:1px dashed #fff;
    font-size:14px;
  }
  /* 时间样式 */
  .date{
    float:right; 
  }
</style>
<style>
  .flo2 .mint-cell-wrapper{
    font-size:12px !important;
  }
</style>