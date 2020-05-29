<template>
    <div class="mobile-view">
        <section class="banner-section">
            <img src="../assets/img/make_money/组 49 (1).png" alt="">
            <div class="contents make-money">
                <div class="circle"></div>
                <HeaderBar back-url="" title="赚呗赚钱" sub-title="我的账单" :color="'white-color'"></HeaderBar>
            </div>
            <div class="cash">
                <div class="income">
                    <div class="left">
                        <h1>188.35</h1>
                        <p>我的收益 (元)</p>
                    </div>
                    <div class="right">
                        <RoundButton type="white-yellow" text="提现"></RoundButton>
                    </div>
                </div>
                <img src="../assets/img/make_money/赚呗得现金，收益可提现@3x.png" alt="">
            </div>
        </section>
        <section class="image-text-grounp-section">
            <ImageText v-for="(item, index) in earningImages" :key="index" :img-src="item.imgSrc" :text="item.text"></ImageText>
        </section>
        <section class="top-earning-section">
            <div class="title">
                <div class="vertical-line"></div>
                <h4>上周收益前三名</h4>
                <div class="vertical-line"></div>
            </div>
            <div class="earning-card-container">
                <EarningCard v-for="(item, index) in earningCards" :key="index" :info="item" :rank="index"></EarningCard>
            </div>
        </section>
        <section class="preferred-section" id="preferred-section">
            <div class="header">
                <div class="left">
                    <h2>优选好赚</h2>
                </div>
                <div class="right">
                    <img src="../assets/img/make_money/形状 12.png" alt="">
                    <span><p>新手分享教程</p></span>
                </div>
            </div>
            <div class="preferred-card-group">
                <PreferredCard v-for="(item, index) in preferredCards" :key="index" :info="item"></PreferredCard>
            </div>
        </section>
    </div>
</template>

<script>

    import HeaderBar from "@/components/HeaderBar";
    import RoundButton from "@/components/RoundButton";
    import ImageText from "@/components/ImageText";
    import EarningCard from "@/components/EarningCard";
    import PreferredCard from "@/components/PreferredCard";

    export default {
        name: "MakeMoney",
        components: {
            PreferredCard,
            EarningCard,
            ImageText,
            RoundButton,
            HeaderBar
        },
        data() {
            return {
                earningImages: [],
                earningCards: [],
                preferredCards: [],
            };
        },
        methods:{

        },
        mounted() {
            this.earningImages.push({
                imgSrc: require('../assets/img/make_money/组 27.png'),
                text: "签到赚",
            });
            this.earningImages.push({
                imgSrc: require('../assets/img/make_money/组 26.png'),
                text: "邀好友",
            });
            this.earningImages.push({
                imgSrc: require('../assets/img/make_money/组 26 拷贝.png'),
                text: "邀商家",
            });
            this.earningImages.push({
                imgSrc: require('../assets/img/make_money/组 31.png'),
                text: "分享赚",
            });
            this.earningImages.push({
                imgSrc: require('../assets/img/make_money/组 49.png'),
                text: "社区合伙人",
            });

            this.earningCards.push({
                avatar: require('../assets/img/make_money/组 52@2x.png'),
                phone: "150**4931",
                earning: 778.6,
            });

            this.earningCards.push({
                avatar: require('../assets/img/make_money/组 52@2x.png'),
                phone: "150**4931",
                earning: 778.6,
            });

            this.earningCards.push({
                avatar: require('../assets/img/make_money/组 52@2x.png'),
                phone: "150**4931",
                earning: 778.6,
            });

            for( let i = 0; i < 3; i++ ){
                this.preferredCards.push({
                    shippingIcon: require('../assets/img/make_money/组 50.png'),
                    shippingMethod: '京东优选',
                    price: '0.8-38',
                    productName: '云南青芒果中大芒果',
                    productDetail: '云南青芒果中大芒果9斤仅¥34.8，芒果控绝 能错过它切开大口大口的果肉 <br>一口下去超级过瘾',
                    productImages: [
                        require('../assets/img/make_money/组 51.png'),
                        require('../assets/img/make_money/组 51.png'),
                        require('../assets/img/make_money/组 51.png'),
                        require('../assets/img/make_money/组 51.png'),
                        require('../assets/img/make_money/组 51.png'),
                        require('../assets/img/make_money/组 51.png'),
                    ],
                    visitorImages: [
                        require('../assets/img/make_money/组 52@2x.png'),
                        require('../assets/img/make_money/组 52@2x.png'),
                        require('../assets/img/make_money/组 52@2x.png'),
                        require('../assets/img/make_money/组 52@2x.png'),
                    ],
                    sharedNumber: '322+',
                    commission: '333'
                });
            }

        },
    }
</script>

<style scoped>

</style>