<template>
    <div class="header">
        <div class="back">
            <a v-if="color=='white-color'" :href="backUrl"><img src="../assets/img/make_money/矩形 2.png" alt=""></a>
            <a v-if="color=='black-color'" :href="backUrl"><img src="../assets/img/make_money/矩形 2_black.png" alt=""></a>
        </div>
        <div class="title-area">
            <div class="title" :class="color"><h3>{{title}}</h3></div>
            <div class="sub-title" :class="color"><h4>{{subTitle}}</h4></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "header",
        props: {
            backUrl : { type: String },
            title : { type: String },
            subTitle : { type : String },
            color: { type : String }
        },
    }
</script>

<style lang="scss" scoped>

</style>