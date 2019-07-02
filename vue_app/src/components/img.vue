<template>
    <div>
        <img src="../assets/1.jpg" @click="clickImg($event)" style="width:50%">
        <!-- 放大图片 -->
        <big-img v-if="showImg" @clickit="viewImg" :imgSrc="imgSrc"></big-img>
    </div>
</template>

<script>
import BigImg from './bigImg.vue';
    export default {
        data() {
            return {        
                showImg:false,
                imgSrc: '', 
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

<style>
  
</style>