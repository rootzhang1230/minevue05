import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import vuetify from './plugins/vuetify';
import vmodal from 'vue-js-modal';
import VueCarousel from 'vue-carousel';


// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(vmodal);
Vue.use(VueCarousel);


import MakeMoney from "@/screens/MakeMoney";
import BeginnerTutorial from "@/screens/BeginnerTutorial";
import InviteSettle from "@/screens/InviteSettle";
import BusinessPartner from "@/screens/BusinessPartner";
import SharingGoods from "@/screens/SharingGoods";
import PartnerAgreement from "@/screens/PartnerAgreement";
import LifeBusinessPartner from "@/screens/LifeBusinessPartner";

const routes = [
  { path: '/',
    name: 'MakeMoney',
    component: MakeMoney,
  },

  { path: '/BeginnerTutorial',
    name: 'BeginnerTutorial',
    component: BeginnerTutorial,
  },

  { path: '/InviteSettle',
    name: 'InviteSettle',
    component: InviteSettle,
  },

  { path: '/BusinessPartner',
    name: 'BusinessPartner',
    component: BusinessPartner,
  },

  { path: '/SharingGoods',
    name: 'SharingGoods',
    component: SharingGoods,
  },

  { path: '/PartnerAgreement',
    name: 'PartnerAgreement',
    component: PartnerAgreement,
  },

  { path: '/LifeBusinessPartner',
    name: 'LifeBusinessPartner',
    component: LifeBusinessPartner,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
});


new Vue(Vue.util.extend({ vuetify, router }, App)).$mount('#app');