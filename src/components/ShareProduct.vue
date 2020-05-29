<template>
    <div class="share-product">
        <div class="product-info">
            <div class="product-image">
                <img :src="info.imgSrc" alt="">
            </div>
            <div class="product-detail">
                <h4>{{info.name}}</h4>
                <h5>市场价：¥{{info.marketPrice}}</h5>
                <p>特惠价 ¥</p><span><h2>{{info.specialPrice}}</h2></span>
            </div>
            <div class="product-buy">
                <img src="../assets/img/sharing_goods/组 16(1).png">
            </div>
        </div>
        <div class="product-price">
            <div class="earn">
                <img src="../assets/img/sharing_goods/组 16.png">
                <p>赚¥{{info.earn}}佣金</p>
            </div>
            <div class="promoted">
                <p>已有{{info.promotedPeople}}人推广赚钱</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ShareProduct",
        props: {
            info: { type: Object },
        },
    }
</script>

<style scoped>

</style>