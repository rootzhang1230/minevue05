<template>
    <div class="image-text">
        <img :src="imgSrc" alt="">
        <p>{{text}}</p>
    </div>
</template>

<script>
    export default {
        name: "ImageText",
        props: {
            imgSrc : { type: String },
            text : { type: String },
        },
    }
</script>

<style scoped>

</style>