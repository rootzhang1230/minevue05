<template>
    <div class="mobile-view">
        <div class="sharing-goods">
            <img src="../assets/img/sharing_goods/矩形 1 拷贝 2@2x.png" alt="">
            <div class="contents">
                <HeaderBar back-url="" title="分享商品得现金" sub-title="收益明细" :color="'white-color'"></HeaderBar>
            </div>
            <div class="goods-select-panel">
                <div class="select-item" @click="selectPanel(1)">
                    <h4 :class="selectedPanel == 1 ? 'active' : ''">综合排序</h4>
                    <div class="active" v-if="selectedPanel == 1"></div>
                </div>
                <div class="select-item" @click="selectPanel(2)">
                    <h4 :class="selectedPanel == 2 ? 'active' : ''">赚钱最快</h4>
                    <div class="active" v-if="selectedPanel == 2"></div>
                </div>
                <div class="select-item" @click="selectPanel(3)">
                    <h4 :class="selectedPanel == 3 ? 'active' : ''">赚钱最多</h4>
                    <div class="active" v-if="selectedPanel == 3"></div>
                </div>
                <div class="select-item" @click="selectPanel(4)">
                    <h4 :class="selectedPanel == 4 ? 'active' : ''">分享最多</h4>
                    <div class="active" v-if="selectedPanel == 4"></div>
                </div>
            </div>
            <div class="share-product-container">
                <carousel :autoplay="false" :items="1" :slide-by="selectedPanel" :nav="false" :dots="true"  @changed="changeSlider">
                    <div class="share-product-item" v-for="(item, index) in panels" :key="index">
                        <ShareProduct v-for="(item, index1) in sharingProducts" :key="index1" :info="item"></ShareProduct>
                    </div>
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderBar from "@/components/HeaderBar";
    import ShareProduct from "@/components/ShareProduct";
    import carousel from 'vue-owl-carousel';
    export default {
        name: "SharingGoods",
        components: {
            HeaderBar,
            ShareProduct,
            carousel,
        },
        data() {
            return {
                selectedPanel : 1,
                panels : 4,
                sharingProducts : [
                    {
                        imgSrc : require('../assets/img/sharing_goods/组 16(2).png'),
                        name : '过山车麦糯糯牛奶味蛋糕卷',
                        marketPrice : '128.00',
                        specialPrice : '37.8',
                        earn : '88.88～199.99',
                        promotedPeople : 22
                    },
                    {
                        imgSrc : require('../assets/img/sharing_goods/组 16(2).png'),
                        name : '过山车麦糯糯牛奶味蛋糕卷',
                        marketPrice : '128.00',
                        specialPrice : '37.8',
                        earn : '88.88～199.99',
                        promotedPeople : 22
                    },
                    {
                        imgSrc : require('../assets/img/sharing_goods/组 16(2).png'),
                        name : '过山车麦糯糯牛奶味蛋糕卷',
                        marketPrice : '128.00',
                        specialPrice : '37.8',
                        earn : '88.88～199.99',
                        promotedPeople : 22
                    },
                    {
                        imgSrc : require('../assets/img/sharing_goods/组 16(2).png'),
                        name : '过山车麦糯糯牛奶味蛋糕卷',
                        marketPrice : '128.00',
                        specialPrice : '37.8',
                        earn : '88.88～199.99',
                        promotedPeople : 22
                    },
                    {
                        imgSrc : require('../assets/img/sharing_goods/组 16(2).png'),
                        name : '过山车麦糯糯牛奶味蛋糕卷',
                        marketPrice : '128.00',
                        specialPrice : '37.8',
                        earn : '88.88～199.99',
                        promotedPeople : 22
                    },
                ],
            };
        },
        methods: {
            changeSlider(event){
                this.selectedPanel = event.item.index+1;
            },
            selectPanel(index){
                this.selectedPanel = index;
                let owlButtons = document.getElementsByClassName("owl-dot");
                for( let i = 0; i < owlButtons.length; i++ ){
                    if( index == i+1 ){
                        owlButtons[i].click();
                    }
                }

            }
        },
    }
</script>

<style scoped>

</style>