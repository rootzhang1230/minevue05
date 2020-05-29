<template>
    <div class="earning-card">
        <div class="logo">
            <img class="crown" src="../assets/img/make_money/crown.png" alt="">
            <img class="avatar" :src="info.avatar" alt="">
            <div class="rank">{{rank+1}}</div>
        </div>
        <div class="card-contents">
            <p class="phone-number">{{info.phone}}</p>
            <h3 class="earning-value">{{info.earning}}</h3>
            <p class="yuan">收益(元)</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EarningCard",
        props: {
            info: { type: Object },
            rank : { type : Number },
        },
    }
</script>

<style scoped>

</style>