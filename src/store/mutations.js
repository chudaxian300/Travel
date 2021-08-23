export default {
  // 为mutations最后修改state里的值
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (error) {}
  }
}
