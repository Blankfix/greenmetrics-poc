import Vue from "vue";
import Vuex from "vuex";
import { User } from "@/classes/User";
//import User from "./User";

Vue.use(Vuex);
const emptyFields = {
  company: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

export default new Vuex.Store({
  modules: {
    user: {
      //namespaced: true,
      state: new User(),
      getters: {
        user: (state) => {
          return state;
        },
        userCompany: (state) => {
          return state.fields.company;
        },
        userFirstName: (state) => {
          return state.fields.firstName;
        },
        userLastName: (state) => {
          return state.fields.lastName;
        },
        userEmail: (state) => {
          return state.fields.email;
        },
        userPassword: (state) => {
          return state.fields.password;
        },
        user_isConnected: (state) => {
          return state.fields._isConnected;
        },
      },
      mutations: {
        userUpdate(state, args) {
          state.fields = args;
        },
        userConnect(state) {
          state._isConnected = true;
        },
        userDisconnect(state) {
          state.fields = emptyFields;
          state._isConnected = false;
        },
      },
      actions: {},
    },
    modal: {
      state: {
        _isVisible: false,
      },
      getters: {
        modal: (state) => {
          return state;
        },
        modal_isVisible: (state) => {
          return state._isVisible;
        },
      },
      mutations: {
        modalOpen(state) {
          return (state._isVisible = true);
        },
        modalClose(state) {
          return (state._isVisible = false);
        },
        modalToggle(state, value) {
          return (state._isVisible = value);
        },
      },
    },
  },
});
