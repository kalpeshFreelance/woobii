import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import Nprogress from 'nprogress'

import {
  facebookAuthProvider,
  twitterAuthProvider
} from './firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {
    loginUser(state) {
      Nprogress.start();
    },
    loginUserSuccess(state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
      state.isUserSigninWithAuth0 = false
      //router.push("/default/dashboard/ecommerce");
      // setTimeout(function () {
      //   Vue.notify({
      //     group: 'loggedIn',
      //     type: 'success',
      //     text: 'User Logged In Success!'
      //   });
      // }, 1500);
    },
    loginUserFailure(state, error) {
      Nprogress.done();
      Vue.notify({
        group: 'loggedIn',
        type: 'error',
        text: error.message
      });
    },
    logoutUser(state) {
      state.user = null
      localStorage.removeItem('user');
      router.push("/session/login");
    }
  },
  actions: {
    signinUserWithFacebook(context) {
      context.commit('loginUser');
      firebase.auth().signInWithPopup(facebookAuthProvider).then((result) => {
        Nprogress.done();
        setTimeout(() => {
          context.commit('loginUserSuccess', result.user);
        }, 500)
      }).catch(error => {
        context.commit('loginUserFailure', error);
      });
    },
    signinUserWithTwitter(context) {
      context.commit('loginUser');
      firebase.auth().signInWithPopup(twitterAuthProvider).then((result) => {
        Nprogress.done();
        setTimeout(() => {
          context.commit('loginUserSuccess', result.user);
        }, 500)
      }).catch(error => {
        context.commit('loginUserFailure', error);
      });
    }
  }
})