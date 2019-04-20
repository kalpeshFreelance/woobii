import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import Nprogress from 'nprogress'

import {
  facebookAuthProvider,
  twitterAuthProvider,
  googleAuthProvider
} from './firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    user: '',
    userEmail: '',
    isUserSigninWithAuth0: false,
    userRole: '1'
  },
  mutations: {
    loginUser (state) {
      Nprogress.start()
    },
    loginUserSuccess (state, user) {
      state.user = user
      state.userRole = userRole
      //localStorage.setItem('user', JSON.stringify(user))
      state.isUserSigninWithAuth0 = true
      //router.push("/default/dashboard/ecommerce")
      // setTimeout(function () {
      //   Vue.notify({
      //     group: 'loggedIn',
      //     type: 'success',
      //     text: 'User Logged In Success!'
      //   });
      // }, 1500);
    },
    loginUserFailure (state, error) {  
      Nprogress.done()
      // Vue.notify({
      //   group: 'loggedIn',
      //   type: 'error',
      //   text: error.message
      // })
      this.$toasted.error(error.message, {
        position: "top-center",
        duration: 2000
      });
    },
    logoutUser (state) {
      state.user = null
      localStorage.removeItem('user')
      //router.push("/session/login")
    },
    setUser: function (state, user) {
      state.user = user;
    },
    setUserEmail: function (state, email) {
      state.userEmail = email;
    },
    setUserRole: function (state, userRole) {
      state.userRole = userRole;
    },
    setToken: function (state, token) {
      state.token = token;
    },
    setisUserSigninWithAuth0: function (state, setisUserSigninWithAuth0) {
      state.isUserSigninWithAuth0 = setisUserSigninWithAuth0;
    }
  },
  actions: {
    signinUserWithFacebook (context) {
      context.commit('loginUser');
      firebase.auth().signInWithPopup(facebookAuthProvider).then((result) => {
        Nprogress.done();
        context.commit('setUser', result.users);
        context.commit('setUserEmail', result.additionalUserInfo.profile.email);
        context.commit('setisUserSigninWithAuth0', 1);
        // setTimeout(() => {
        //   context.commit('loginUserSuccess', result.user);
        // }, 500)
      }).catch(error => {
        context.commit('loginUserFailure', error);
      });
    },
    signinUserWithTwitter (context) {
      context.commit('loginUser');
      firebase.auth().signInWithPopup(twitterAuthProvider).then((result) => {
        Nprogress.done();
        setTimeout(() => {
          context.commit('loginUserSuccess', result.user);
          context.commit('setUserRole', result.userRole);
        }, 500)
      }).catch(error => {
        context.commit('loginUserFailure', error);
      });
    },
    signinUserWithGoogle(context) {
      context.commit('loginUser');
      firebase.auth().signInWithPopup(googleAuthProvider).then((result) => {
        Nprogress.done();
        // setTimeout(() => {
        //   context.commit('loginUserSuccess', result.user);
        // }, 500)
        context.commit('setUser', result.users);
        context.commit('setUserEmail', result.additionalUserInfo.profile.email);
        //context.commit('setUserRole', result.userRole);
        context.commit('setisUserSigninWithAuth0', 1);
      }).catch(error => {
        context.commit('loginUserFailure', error);
      });
    }
  }
})