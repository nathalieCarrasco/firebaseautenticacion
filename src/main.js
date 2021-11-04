import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyD2BNx2E91kQxmSWeN3beNlwbfYgG6BLpI",
  authDomain: "practica-mifirebase.firebaseapp.com",
  projectId: "practica-mifirebase",
  storageBucket: "practica-mifirebase.appspot.com",
  messagingSenderId: "661016852444",
  appId: "1:661016852444:web:164cc64ffd1443325b4119"
};
initializeApp(firebaseConfig);
const Auth = getAuth();

onAuthStateChanged(Auth,()=>{
  new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
});

