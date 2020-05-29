<template>
    <div class="round-button" :style="getButtonStyle">
        <h4 v-if="type == 'white-yellow'">{{text}}</h4>
        <p v-if="type == 'brown'">{{text}}</p>
        <p v-if="type == 'white'">{{text}}</p>
    </div>
</template>

<script>
    export default {
        name: "Button",
        data: () => ({
        }),
        props: {
            type : { type: String },
            text : { type: String },
        },
        computed : {
            getButtonStyle(){
                let buttonStyle = '';
                if( this.type == "brown" )
                    buttonStyle = 'background:linear-gradient(270deg,rgba(255,125,0,1),rgba(255,76,0,1)); color:rgba(255,255,255,1);'
                else if( this.type == "white-yellow" ){
                    buttonStyle = 'background:linear-gradient(90deg,rgba(255,231,211,1),rgba(255,255,255,1)); color:rgba(255,84,0,1);'
                }
                else if( this.type == "white" ){
                    buttonStyle = 'background:rgba(255,255,255,1); border:1px solid rgba(229, 229, 229, 1); color:rgba(0,0,0,1);'
                }
                return buttonStyle;
            }
        },
        methods: {
        }


    }
</script>

<style lang="scss" scoped>

</style>