<template>
  <div class="sec_main">
    <img src="../assets/video_playBg.png" style="width:100%">
    <div class="sec_main">
      <div class="sec_news">
        <div class="detnav">
          >>
          <router-link to="/">首页</router-link>
        </div>
        <h2>《放置奇兵》09.16下午更新公告</h2>
        <p>发布时间:&nbsp;&nbsp;2018-09-16&nbsp;16:31:14</p>
        <img src="../assets/detail.jpg" style="width:100%">
        <div class="nr">
          <span>1.金色鱼骨币上限英文描述修改</span>
          <span>2.锦鲤超过10000不再用k为单位显示</span>
          <span>3.修改每日任务领取后显示问题</span>
        </div>
      </div>
    </div>
    <div class="det_foot">
      <div>
        <router-link to="/" style="color:#000">
          <span class="iconfont icon-shouye"></span>
          <span>网站首页</span>
        </router-link>
      </div>
      <div>
        <router-link to="/" style="color:#000">
          <span class="iconfont icon-shequ"></span>
          <span>新闻资讯</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  }
}
</script>

<style scoped>
.detnav{
  text-align:right;
  color:#fff;
}
h2{
  color:#fff;
  margin:0;
}
p{
  margin:5px 0 20px 0;
  padding-bottom:10px;
  text-align:center;
  color: #C1C0C5;
  border-bottom:1px dashed #fff;
}
.nr span{
  color:#fff;
  display:block;
  margin-top:15px
}
.nr{
  margin-left:10%;
}
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
    padding-top:10px;
    padding-bottom:10px;
    font-size:14px;
  }
  .det_foot{
    width:100%;
    height:46px;
    background-color:#a43b2f;
    position: fixed;
    bottom:0;
  }
  .det_foot div{
    width:50%;
    float:left;
    text-align:center;
  }
  .det_foot div span:first-child{
    font-size:20px;
    margin-top:4px;
    display:block;
  }
  .det_foot div span:last-child{
    font-size:12px;
  }
</style>