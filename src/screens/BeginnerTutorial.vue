<template>
    <div class="mobile-view">
        <div class="beginner-tutorial">
            <div class="contents">
                <HeaderBar back-url="" title="新手教程" sub-title="" :color="'black-color'"></HeaderBar>
            </div>
            <div class="tutorial-container">
                <img src="../assets/img/beginner_tutorial/banner.png" alt="">
                <div class="video-area">
                    <img src="../assets/img/beginner_tutorial/组 23@2x.png" alt="">
                    <div id="play-video" @click="playVideo">
                        <img src="../assets/img/beginner_tutorial/play-button-arrowhead.png" alt="">
                    </div>
                    <video id="video-player-for-mobile" poster="../assets/img/business_partner/组 58.png">
                        <source src="../assets/img/beginner_tutorial/movie.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <div class="share-money">
                        学会了，立即去分享赚钱
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderBar from "@/components/HeaderBar";
    export default {
        name: "BeginnerTutorial",
        components: {
            HeaderBar
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
            }
        }

    }
</script>

<style scoped>

</style>