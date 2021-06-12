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
      actions: {},
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
        update(state, args) {
          state.fields = args;
        },
        connect(state) {
          state._isConnected = true;
        },
        disconnect(state) {
          state.fields = emptyFields;
          state._isConnected = false;
        },
      },
    },
  },
});
