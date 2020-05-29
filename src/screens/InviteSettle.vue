<template>
    <div class="mobile-view">
        <div class="invite-settle">
            <div class="contents">
                <HeaderBar back-url="" title="邀请商家入驻平台" sub-title="邀请明细" :color="'black-color'"></HeaderBar>
            </div>
            <div class="container">
<!--                <img src="../assets/img/invite_settle/组 27.png" alt="">-->
                <div class="invitation-area" id="invitation-area">
                    <div class="cumulative-panel">
                        <div class="item">
                            <h2>{{invitationSend}}</h2>
                            <p>邀请发送(元)</p>
                        </div>
                        <div class="item">
                            <h2>{{cumulativeInvitation}}</h2>
                            <p>累计邀请(个）</p>
                        </div>
                        <div class="item">
                            <h2>{{cumulativeSharing}}</h2>
                            <p>累计分享(次)</p>
                        </div>
                    </div>
                    <div class="simple-step-area">
                        <div class="bar">
                            简单几步  轻松赚钱
                        </div>
                        <div class="simple-step-panel">
                            <div class="item">
                                <ImageText :img-src="simpleStep[0].imgSrc" :text="simpleStep[0].text"></ImageText>
                            </div>
                            <div class="item">
                                <img src="../assets/img/invite_settle/组 18.png" alt="">
                            </div>
                            <div class="item">
                                <ImageText :img-src="simpleStep[1].imgSrc" :text="simpleStep[1].text"></ImageText>
                            </div>
                            <div class="item">
                                <img src="../assets/img/invite_settle/组 18.png" alt="">
                            </div>
                            <div class="item">
                                <ImageText :img-src="simpleStep[2].imgSrc" :text="simpleStep[2].text"></ImageText>
                            </div>
                        </div>
                    </div>
                    <div class="qr-code-area">
                        <h3>邀请商家扫描二维码，进入开店流程</h3>
                        <div class="scan-wechat">
                            <p>微信扫一扫</p>
                        </div>
                        <img src="../assets/img/invite_settle/组 47@2x.png" alt="" @click="showQRCodeDialog">
                        <h4>
                            商家填写店铺信息时，填入以下邀请码<br>
                            入驻成功你即可获得奖励
                        </h4>
                        <div class="invite-code">
                            <h2>邀请码：{{inviteCode}}</h2>
                            <div class="invite-code-copy">
                                复制
                            </div>
                        </div>
                        <RoundButton type="brown" text="分享海报邀请商家" @click.native="showPosterDialog"></RoundButton>
                        <a href=""><h4>我是商家自助入驻></h4></a>
                    </div>
                </div>
            </div>
            <div class="product-slider-dialog" v-if="showQRDialogFlag" :style="{top: top}">
                <div class="header">
                    <div class="left">
                    </div>
                    <div class="right" @click="hideQRCodeDialog">
                        <img src="../assets/img/make_money/圆角矩形 16 拷贝@2x.png" alt="">
                    </div>
                </div>
                <div class="slider-show">
                    <img src="../assets/img/invite_settle/组 47@2x.png" alt="">
                    <RoundButton type="brown" text="快速保存到相册"></RoundButton>
                </div>
            </div>

            <div class="product-slider-dialog" v-if="showPosterDialogFlag" :style="{top: top}">
                <div class="header">
                    <div class="left">
                    </div>
                    <div class="right" @click="hidePosterDialog">
                        <img src="../assets/img/make_money/圆角矩形 16 拷贝@2x.png" alt="">
                    </div>
                </div>
                <div class="slider-show">
                    <h3>选择任意一张海报即可分享</h3>
                    <Carousel3d :perspective="0" :space="carouselItemSpacing" :display="3" :width="carouselItemWidth" :height="carouselItemHeight" :inverse-scaling="50">
                        <Slide v-for="(slide, i) in slides" :key="i" :index="i">
                            <div class="mobile-swipe-item">
                                <div class="id-area">
                                    <p>ID：665800</p>
                                </div>
                                <div class="footer">
                                    <p>好友邀请您免费申请入驻享优惠</p>
                                    <div class="image-area"></div>
                                    <p>长按识别 码上查看</p>
                                </div>
                            </div>
                        </Slide>
                    </Carousel3d>
                    <div class="footer">
                        <h3>成功邀请1个商家 立得<span>¥88.88</span>元</h3>
                        <div class="payment-method">
                            <div class="item">
                                <ImageText :img-src="paymentMethods[0].imgSrc" :text="paymentMethods[0].text"></ImageText>
                            </div>
                            <div class="item">
                                <ImageText :img-src="paymentMethods[1].imgSrc" :text="paymentMethods[1].text"></ImageText>
                            </div>
                            <div class="item">
                                <ImageText :img-src="paymentMethods[2].imgSrc" :text="paymentMethods[2].text"></ImageText>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderBar from "@/components/HeaderBar";
    import ImageText from "@/components/ImageText";
    import RoundButton from "@/components/RoundButton";
    import { Carousel3d, Slide } from 'vue-carousel-3d';

    export default {
        name: "InviteSettle",
        components: {
            ImageText,
            HeaderBar,
            RoundButton,
            Carousel3d,
            Slide,
        },
        data() {
            return {
                invitationSend : '0.00',
                cumulativeInvitation : 3,
                cumulativeSharing : 6,
                simpleStep : [
                    {
                        imgSrc : require('../assets/img/invite_settle/组 28.png'),
                        text : '邀请发送'
                    },
                    {
                        imgSrc : require('../assets/img/invite_settle/组 28(1).png'),
                        text : '商家入驻成功'
                    },
                    {
                        imgSrc : require('../assets/img/invite_settle/组 28(2).png'),
                        text : '收益到账'
                    }
                ],
                paymentMethods : [
                    {
                        imgSrc : require('../assets/img/invite_settle/组 48@2x.png'),
                        text : '分享微信好友'
                    },
                    {
                        imgSrc : require('../assets/img/invite_settle/组 48@2x(1).png'),
                        text : '分享到朋友圈'
                    },
                    {
                        imgSrc : require('../assets/img/invite_settle/组 48@2x(2).png'),
                        text : '保存到相册'
                    },
                ],
                inviteCode : 665800,
                showQRDialogFlag : false,
                showPosterDialogFlag : false,
                top : '0px',
                slides : 7,
            };
        },

        computed : {
            carouselItemWidth(){
                return screen.width * 0.68;
            },
            carouselItemHeight(){
                return screen.width;
            },
            carouselItemSpacing(){
                return screen.width * 0.7911;
            }
        },

        methods : {
            showQRCodeDialog(){

                this.showQRDialogFlag = true;
                this.top = '0px';

                document.documentElement.style.overflow = 'hidden';
                // this.disableScroll();
            },
            hideQRCodeDialog(){
                // this.$modal.hide("product-slider-dialog");
                this.showQRDialogFlag = false;
                this.selectedProductIndex = 0;

                document.documentElement.style.overflow = 'auto';
                // this.enableScroll();
            },

            showPosterDialog(){

                this.showPosterDialogFlag = true;
                this.top = '0px';

                document.documentElement.style.overflow = 'hidden';
                // this.disableScroll();
            },

            hidePosterDialog(){
                // this.$modal.hide("product-slider-dialog");
                this.showPosterDialogFlag = false;
                this.selectedProductIndex = 0;

                document.documentElement.style.overflow = 'auto';
                // this.enableScroll();
            },
        }
    }
</script>

<style scoped>

</style>