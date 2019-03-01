import { ProductList } from '@/config/gameconfig'
const maxProductNum = 5
function getRandomArrayElements (arr, count) {
  var shuffled = arr.slice(0)
  var i = arr.length
  var min = i - count
  var temp
  var index
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random())
    temp = shuffled[index]
    shuffled[index] = shuffled[i]
    shuffled[i] = temp
  }
  return shuffled.slice(min)
}

function getRandomProducts () {
  let res = getRandomArrayElements(ProductList, maxProductNum)
  let specificType = Math.random() > 0.5 ? 'up' : 'down'
  let specificNum = ~~(Math.random() * maxProductNum)
  specificNum = 0
  let specificNews
  let marketProducts = res.map((product, index) => {
    let price = Math.floor(Math.random() * (product.highPrice - product.lowPrice + 1)) + product.lowPrice
    if (index === specificNum) {
      if (specificType === 'up') {
        price = price * 2
      } else {
        price = ~~(price / 2)
      }
      specificNews = product[specificType + 'Word'] || ''
    }
    return {
      ...product,
      price
    }
  })
  return {
    specificNews,
    marketProducts
  }
}

const state = {
  marketProducts: [],
  specificNews: ''
}
const getters = {
}
const mutations = {
  changeMarket (state) {
    let { specificNews, marketProducts } = getRandomProducts()
    state.marketProducts = marketProducts
    state.specificNews = specificNews
  }
}
export default ({
  namespaced: true,
  state,
  getters,
  mutations
})
