<template>
    <div class="mobile-view">
        <div class="business-partner">
            <div class="contents">
                <HeaderBar back-url="" title="商家合伙人" sub-title="" :color="'black-color'"></HeaderBar>
            </div>
            <div class="banner">
                <img src="../assets/img/business_partner/banner.png">
                <div class="banner-contents">
                    <div class="city-selection">
                        <div class="location-img">
                            <img src="../assets/img/business_partner/形状 11@2x.png" alt="">
                        </div>
                        <div class="select">
                            <select name="slct" id="slct">
                                <option v-for="(item, index) in city" :key="index"  :value="item">{{item}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="joined-counter">
                        <h4>已有</h4>
                        <div class="counter">
                            <div class="counter-item" v-for="(item, index) in getSeparatedJoin" :key="index">
                                <h4>{{item}}</h4>
                            </div>
                        </div>
                        <h4>位商家加入HUI盟</h4>
                    </div>
                    <div class="post-sheep-container">
                        <carousel :autoplay="true" :items="3" :nav="false" :dots="false">
                            <div class="post-sheep-item" v-for="(item, index) in postSheepItems" :key="index">
                                <img :src="item.imgSrc" alt="">
                                <h5>{{item.text}}</h5>
                            </div>
                        </carousel>
                    </div>
                </div>
            </div>
            <div class="tutorial-container">
                <div class="video-area">
                    <div id="play-video" @click="playVideo">
                        <img src="../assets/img/beginner_tutorial/play-button-arrowhead.png" alt="">
                    </div>
                    <div class="video-comment">
                        <p>HUI盟商家合伙人介绍</p>
                    </div>
                    <video id="video-player-for-mobile" poster="../assets/img/business_partner/组 58.png">
                        <source src="../assets/img/beginner_tutorial/mov_bbb.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div class="merchant-partner-area">
                <div class="title-bar">
                    <img src="../assets/img/business_partner/组 59@2x.png" alt="">
                    <h3>商家合伙人权益</h3>
                    <img src="../assets/img/business_partner/组 59@2x(4).png" alt="">
                </div>
                <div class="partners">
                    <ImageText v-for="(item, index) in merchantPartners" :key="index" :img-src="item.imgSrc" :text="item.text"></ImageText>
                </div>
            </div>
            <div class="gift-pack">
                <div class="title-bar">
                    <img src="../assets/img/business_partner/组 59@2x.png" alt="">
                    <h3>商家大礼包</h3>
                    <img src="../assets/img/business_partner/组 59@2x(4).png" alt="">
                </div>
                <div class="gifts">
                    <div class="gift" v-for="(item, index) in giftPacks" :key="index">
                        <img :src="item.background" alt="">
                        <div class="contents">
                            <h3>{{item.title}}</h3>
                            <h5 :class="item.color">商家推广获客神器</h5>
                        </div>
                        <div class="footer">
                            <h5>价值<span>{{item.price}}</span> 元</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div class="our-brand">
                <div class="title-bar">
                    <img src="../assets/img/business_partner/组 59@2x.png" alt="">
                    <h3>我们的品牌</h3>
                    <img src="../assets/img/business_partner/组 59@2x(4).png" alt="">
                </div>
                <div class="brands">
                    <ImageText v-for="(item, index) in ourBrand" :key="index" :img-src="item.imgSrc" :text="item.text"></ImageText>
                </div>
            </div>
            <div class="footer">
                <div class="radio-button">
                    <input type="radio" id="agree-sign">
                    <label for="agree-sign">我同意并签约<span @click="movePartnerAgreement">《HUI盟商家合伙人协议》</span></label>
                </div>
                <RoundButton type="brown" text="¥398/年 立即开通"></RoundButton>
            </div>
        </div>
    </div>
</template>

<script>

    import HeaderBar from "@/components/HeaderBar";
    import carousel from 'vue-owl-carousel';
    import ImageText from "@/components/ImageText";
    import RoundButton from "@/components/RoundButton";

    export default {
        name: "BusinessPartner",
        components : {
            HeaderBar,
            carousel,
            ImageText,
            RoundButton
        },
        data() {
            return {
                city : [
                    '常宁',
                    '北京',
                    '延吉'
                ],
                joined : 2082,
                postSheepItems : [
                    {
                        imgSrc : require('../assets/img/business_partner/组 57(1).png'),
                        text : '老诚一锅羊蝎子',
                    },
                    {
                        imgSrc : require('../assets/img/business_partner/组 57(1).png'),
                        text : '盖式烤肉',
                    },
                    {
                        imgSrc : require('../assets/img/business_partner/组 57(1).png'),
                        text : '逍遥火锅串串香',
                    },
                    {
                        imgSrc : require('../assets/img/business_partner/组 57(1).png'),
                        text : '老诚一锅羊蝎子',
                    },
                    {
                        imgSrc : require('../assets/img/business_partner/组 57(1).png'),
                        text : '盖式烤肉',
                    },
                    {
                        imgSrc : require('../assets/img/business_partner/组 57(1).png'),
                        text : '逍遥火锅串串香',
                    },
                ],
                merchantPartners : [
                    {
                        imgSrc : require('../assets/img/business_partner/组 59.png'),
                        text : '0元抽佣',
                    },
                    {
                        imgSrc : require('../assets/img/business_partner/组 59(1).png'),
                        text : '社区推广',
                    },
                    {
                        imgSrc : require('../assets/img/business_partner/组 59(2).png'),
                        text : '商家礼包',
                    },
                    {
                        imgSrc : require('../assets/img/business_partner/组 59(3).png'),
                        text : '0佣金外卖',
                    },
                    {
                        imgSrc : require('../assets/img/business_partner/组 59(2).png'),
                        text : '直播带货',
                    },
                    {
                        imgSrc : require('../assets/img/business_partner/组 59(5).png'),
                        text : '短视频带货',
                    },
                    {
                        imgSrc : require('../assets/img/business_partner/组 59(6).png'),
                        text : '爆客推广',
                    },
                    {
                        imgSrc : require('../assets/img/business_partner/组 59(7).png'),
                        text : '专业培训',
                    },
                ],
                giftPacks : [
                    {
                        background : require('../assets/img/business_partner/组 59@2x(5).png'),
                        title : '商+号爆客营销工具1套',
                        price : 1680,
                        color : 'blue-color',
                    },
                    {
                        background : require('../assets/img/business_partner/组 60@2x.png'),
                        title : '10场大咖直播培训课',
                        price : 1680,
                        color : 'yellow-color',
                    },
                ],
                ourBrand: [
                    {
                        imgSrc : require('../assets/img/business_partner/组 61.png'),
                        text : '优HUI生活'
                    },
                    {
                        imgSrc : require('../assets/img/business_partner/组 62.png'),
                        text : '商+号'
                    },
                    {
                        imgSrc : require('../assets/img/business_partner/组 63.png'),
                        text : 'HUI到家'
                    },
                ],
            };
        },

        computed : {
            getSeparatedJoin(){
                let result = [];
                let joined = this.joined.toString();
                for( let i = 0; i < joined.length; i++ )
                    result.push( joined.charAt(i) );

                return result;
            }
        },

        methods : {
            playVideo(){
                var mediaVideo = document.getElementById("video-player-for-mobile");
                var duration = mediaVideo.duration * 1000;
                setTimeout(function () {
                    document.getElementById("play-video").style.visibility="visible";
                }, duration);

                if (mediaVideo.paused){
                    mediaVideo.play();
                    document.getElementById("play-video").style.visibility="hidden";
                }
            },

            movePartnerAgreement(){
                this.$router.push({name: 'PartnerAgreement'});
            }
        }
    }
</script>

<style scoped>

</style>