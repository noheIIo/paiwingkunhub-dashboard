/*=========================================================================================
  File Name: themeConfig.js
  Description: Theme configuration
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/

// MAIN COLORS - VUESAX THEME COLORS
export const colors = {
  primary: '#3dc9b3',
  success: 'rgb(23, 201, 100)',
  danger: 'rgb(242, 19, 93)',
  warning: 'rgb(255, 130, 0)',
  dark: 'rgb(36, 33, 69)'
}

// CONFIGS
export const themeConfig = {
  disableCustomizer: false, // options[Boolean] : true, false(default)
  disableThemeTour: false, // options[Boolean] : true, false(default)
  footerType: 'static', // options[String]  : static(default) / sticky / hidden
  hideScrollToTop: false, // options[Boolean] : true, false(default)
  mainLayoutType: 'vertical', // options[String]  : vertical(default) / horizontal
  navbarColor: '#fff', // options[String]  : HEX color / rgb / rgba / Valid HTML Color name - (default: #fff)
  navbarType: 'static', // options[String]  : floating(default) / static / sticky / hidden
  routerTransition: 'slide-fade', // options[String]  : zoom-fade / slide-fade / fade-bottom / fade / zoom-out / none(default)
  rtl: false, // options[Boolean] : true, false(default)
  sidebarCollapsed: false, // options[Boolean] : true, false(default)
  theme: 'semi-dark', // options[String]  : "light"(default), "dark", "semi-dark"

  // Not required yet - WIP
  userInfoLocalStorageKey: 'userInfo'
}

import Vue from 'vue'
import Vuesax from 'vuesax'

Vue.use(Vuesax, { theme: { colors }, rtl: themeConfig.rtl })

export default themeConfig
