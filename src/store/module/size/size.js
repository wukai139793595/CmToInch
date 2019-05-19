import {
  mySetLocal,
  myGetLocal,
  myRemoveLocal
} from '@/util/setLocal.js'
export default {
  namespaced: true,
  state: {
    sizeArr: myGetLocal('sizeArr') || [
      ["Size/Tag", "Bust", "Waist", "Length", "Sleeve", "Hip"],
      ["S", "95-100", "60", "131", "28.5", "95"],
      ["M", "100", "65", "132.5", "29.2", "100"],
      ["L", "105", "70", "134", "29.9", "106"],
      ["XL", "111", "75", "135.7", "30.6", "115"]
    ]
  },
  mutations: {
    set_size: function (state, newValue) {
      state.sizeArr = newValue
    }
  }
}
