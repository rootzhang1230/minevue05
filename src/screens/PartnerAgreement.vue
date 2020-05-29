<template>
    <div class="mobile-view">
        <div class="partner-agreement">
            <div class="contents">
                <HeaderBar back-url="" title="HUI盟商家合伙人协议" sub-title="" :color="'black-color'"></HeaderBar>
            </div>
            <div class="agreement-container">
                <h4>
                    1969年12月，美国国防部高级计划研究署的分组交换网ARPANET投入运行，从此计算机网络发展进入新纪元。ARPANET当时仅有4个结点，分别在美国国防部、原子能委员会、麻省理工学院和加利福利亚。这4台计算机之间进行数据通信仅有传送数据的通路是不够的，还必须遵守一些事先约定好的规则，由这些规则明确所交换数据的格式及有关同步问题。人与人之间交谈需要使用同一种语言，如果语言不同则需要翻译，否则两人之间无法沟通。计算机之间的通信过程和人与人之间的交谈过程非常相似，前者由计算机控制，后者由参加交谈的人控制。
                    计算机通信网是由许多具有信息交换和处理能力的节点互连而成的。要使整个网络有条不紊地工作, 就要求每个节点必须遵守一些事先约定好的有关数据格式及时序等的规则。 这些为实现网络数据交换而建立的规则、约定或标准就称为网络协议。协议是通信双方为了实现通信而设计的约定或通话规则。
                    协议总是指某一层的协议。准确地说，它是在同等层之间的实体通信时，有关通信规则和约定的集合就是该层协议，例如物理层协议、传输层协议、应用层协议。
                    网络协议，也可简称协议，通常由三要素组成：
                    (1)语法：即数据与控制信息的结构或格式；
                    (2)语义：即需要发出何种控制信息，完成何种动作以及做出何种响应；
                    (3)时序（同步），即事件实现顺序的详细说明。 [1]
                    是一系列的步骤： 它包括两方或多方，设计它的目的是要完成一项任务！
                </h4>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderBar from "@/components/HeaderBar";
    export default {
        name: "PartnerAgreement",
        components: {
            HeaderBar
        },

    }
</script>

<style scoped>

</style>