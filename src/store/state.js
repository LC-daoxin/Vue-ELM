let defaulCity = '北京'
try {
  if (localStorage.city) {
    defaulCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaulCity
}
