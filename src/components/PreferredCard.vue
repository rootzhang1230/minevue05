<template>
    <div class="preferred-card">
        <div class="header">
            <div class="left">
                <div class="shipping-method">
                    <img :src="info.shippingIcon" alt="">
                </div>
                <div class="productName">
                    <h4>{{info.shippingMethod}}</h4>
                    <p>{{info.productName}}</p>
                </div>
            </div>
            <div class="right">
                <h4>{{info.price}}元</h4>
                <p>分享赚</p>
            </div>
        </div>
        <div class="card-contents">
            <h4 v-html="info.productDetail"></h4>
            <div class="product-image-group">
                <img v-for="(item, index) in info.productImages" :key="index" :src="item" alt="" @click="sliderShowDialog(index)">
            </div>

            <div class="product-slider-dialog" v-if="showDialog" :style="{top: top}">
                <div class="header">
                    <div class="left">
                        <span>{{selectedProductIndex+1}}</span> /{{info.productImages.length}}
                    </div>
                    <div class="right" @click="hideSliderDialog">
                        <img src="../assets/img/make_money/圆角矩形 16 拷贝@2x.png" alt="">
                    </div>
                </div>
                <div class="slider-show">
                    <carousel :autoplay="false" :items="1" :start-position="selectedProductIndex" :nav="false" :dots="false" @changed="changeSlider">
                        <div class="post-sheep-item" v-for="(item, index) in info.productImages" :key="index">
                            <img :src="item" alt="">
                        </div>
                    </carousel>
                </div>
            </div>

<!--            <modal name="product-slider-dialog" :clickToClose="false" class="product-slider-dialog">-->
<!--                <div class="modal-header">-->
<!--                </div>-->
<!--                <div class="modal-body">-->
<!--                    <div class="header">-->
<!--                        <div class="left">-->
<!--                            <span>{{selectedProductIndex}}</span> /{{info.productImages.length}}-->
<!--                        </div>-->
<!--                        <div class="right" @click="hideModal">-->
<!--                            <img src="../assets/img/make_money/圆角矩形 16 拷贝@2x.png" alt="">-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="slider-show">-->
<!--                        <carousel :autoplay="false" :items="1" :nav="false" :dots="false" @changed="changeSlider">-->
<!--                            <div class="post-sheep-item" v-for="(item, index) in info.productImages" :key="index">-->
<!--                                <img :src="item" alt="">-->
<!--                            </div>-->
<!--                        </carousel>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="modal-footer">-->
<!--                </div>-->
<!--            </modal>-->
            <modal name="withdraw-confirm-dialog" :clickToClose="false">
                <div class="modal-header"></div>
                <div class="modal-body">
                    <p>系统将为您自动复制分享文案和下载图片素材</p>
                    <h4>是否继续操作？</h4>
                    <div class="confirm-button-group">
                        <RoundButton type="white" text="否" @click.native="hideModal"></RoundButton>
                        <RoundButton type="brown" text="是" @click.native="hideModal"></RoundButton>
                    </div>
                    <div class="radio-group">
                        <input type="radio" id="remember-next-time">
                        <label for="remember-next-time">记住操作下次不再提醒</label>
                    </div>
                </div>
                <div class="modal-footer">
                </div>
            </modal>
        </div>
        <div class="footer">
            <div class="left">
                <div class="visitors">
                    <div class="visitor-images">
                        <img v-for="(item, index) in info.visitorImages" :key="index" :src="item">
                    </div>
                    <div class="share-number">
                        <h5>{{info.sharedNumber}}</h5>
                    </div>
                    <div class="share-earn">
                        <p>人已分享</p>
                    </div>
                </div>
                <div class="commission">
                    <p>累计产生佣金 <span>¥{{info.commission}}元</span></p>
                </div>
            </div>
            <div class="right">
                <RoundButton type="brown" text="立即分享" @click.native="showModal"></RoundButton>
            </div>
        </div>
    </div>
</template>

<script>
    import RoundButton from "@/components/RoundButton";
    import carousel from 'vue-owl-carousel';

    export default {
        name: "PreferredCard",
        components:{
          RoundButton,
            carousel,
        },
        data() {
            return {
                selectedProductIndex: 0,
                showDialog : false,
                top : '0px',
            };
        },
        props: {
            info: { type: Object },
        },
        methods:{
            sliderShowDialog(index){
                // this.$modal.show("product-slider-dialog");
                this.selectedProductIndex = index;
                this.showDialog = true;
                var doc = document.documentElement;
                var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
                var parentTop = document.getElementById("preferred-section").offsetTop;
                this.top = top - parentTop + 'px';

                document.documentElement.style.overflow = 'hidden';
                // this.disableScroll();
            },
            hideSliderDialog(){
                // this.$modal.hide("product-slider-dialog");
                this.showDialog = false;
                this.selectedProductIndex = 0;

                document.documentElement.style.overflow = 'auto';
                // this.enableScroll();
            },

            changeSlider(event){
                this.selectedProductIndex = event.item.index;

            },

            showModal(){
                this.$modal.show("withdraw-confirm-dialog");
            },
            hideModal(){
                this.$modal.hide("withdraw-confirm-dialog");
            },

            // // call this to Disable
            // disableScroll() {
            //     window.addEventListener('DOMMouseScroll', 'preventDefault', false); // older FF
            //     window.addEventListener('wheelEvent', 'preventDefault', 'wheelOpt'); // modern desktop
            //     window.addEventListener('touchmove', 'preventDefault', 'wheelOpt'); // mobile
            //     window.addEventListener('keydown', 'preventDefaultForScrollKeys', false);
            // },
            //
            // // call this to Enable
            // enableScroll() {
            //     window.removeEventListener('DOMMouseScroll', 'preventDefault', false);
            //     window.removeEventListener('wheelEvent', 'preventDefault', 'wheelOpt');
            //     window.removeEventListener('touchmove', 'preventDefault', 'wheelOpt');
            //     window.removeEventListener('keydown', 'preventDefaultForScrollKeys', false);
            // },
        }
    }
</script>

<style scoped>

</style>