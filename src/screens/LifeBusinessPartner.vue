<template>
    <div class="mobile-view">
        <div class="life-business-partner">
            <div class="contents">
                <HeaderBar back-url="" title="商家合伙人" sub-title="" :color="'black-color'"></HeaderBar>
            </div>
            <div class="banner">
                <img src="../assets/img/life_business_partner/组 35@2x.png" alt="">
                <div class="banner-title">
                    <p>已有<span>3999</span>人成为HUI生活社区合伙人</p>
                </div>
            </div>
            <div class="partner-area">
                <div class="item">
                    <div class="round-item">
                        <img src="../assets/img/life_business_partner/组 36@2x.png" alt="">
                        <h4>初级<p>合伙人</p></h4>
                    </div>
                    <p>还差<span>3</span>人</p>
                </div>
                <div class="item">
                    <img src="../assets/img/life_business_partner/形状 8@2x.png" alt="">
                </div>
                <div class="item">
                    <div class="round-item">
                        <img src="../assets/img/life_business_partner/组 37@2x.png" alt="">
                        <h4>中级<p>合伙人</p></h4>
                    </div>
                    <p>还差<span>15</span>人</p>
                </div>
                <div class="item">
                    <img src="../assets/img/life_business_partner/形状 8@2x.png" alt="">
                </div>
                <div class="item">
                    <div class="round-item">
                        <img src="../assets/img/life_business_partner/组 38@2x.png" alt="">
                        <h4>高牌<p>合伙人</p></h4>
                    </div>
                    <p>还差<span>30</span>人</p>
                </div>
            </div>
            <div class="partner-contents">
                <div class="community-partner">
                    <img src="../assets/img/life_business_partner/privilege@2x.png" alt="">
                    <div class="community-content">
                        <img src="../assets/img/life_business_partner/组 25 拷贝@2x.png" alt="">
                        <h2>社群合伙人权益</h2>
                        <img src="../assets/img/life_business_partner/组 25 拷贝@2x.png" alt="">
                    </div>
                </div>
                <div class="community-card-container">
                    <div class="community-card">
                        <img src="../assets/img/life_business_partner/形状 5@2x.png" alt="">
                        <div class="text-area">
                            <h3>收益更高</h3>
                            <p>成为社群合伙人尊享更高收益</p>
                        </div>
                    </div>
                    <div class="community-card">
                        <img src="../assets/img/life_business_partner/形状 6@2x.png" alt="">
                        <div class="text-area">
                            <h3>学习培训</h3>
                            <p>
                                社群合伙人经营和服务培训<br>
                                如：如何拓客？如何提高收入...
                            </p>
                        </div>
                    </div>
                    <div class="community-card">
                        <img src="../assets/img/life_business_partner/形状 7@2x.png" alt="">
                        <div class="text-area">
                            <h3>员工福利</h3>
                            <p>尊享HUI生活员工福利如：全勤奖鼓励奖等。</p>
                        </div>
                    </div>
                </div>
                <div class="qr-code-area">
                    <h4>了解社群合伙人更多权益</h4>
                    <img class="down-arrow" src="../assets/img/life_business_partner/组 39@2x.png" alt="">
                    <img class="qr-code" src="../assets/img/invite_settle/组 47@2x.png" alt="">
                    <div class="save-qr-code-button">
                        <p>保存二维码</p>
                    </div>
                    <h4 class="startup-mentor">添加您的创业导师</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import HeaderBar from "@/components/HeaderBar";

    export default {
        name: "LifeBusinessPartner",
        components: {
            HeaderBar,
        },
        data() {
            return {

            };
        },
    }
</script>

<style scoped>

</style>