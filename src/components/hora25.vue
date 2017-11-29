<template>
  <div class="hello">
    <ul>
      <img src="https://recursosweb.prisaradio.com/fotos/original/010002069533.png">

      <li v-for="item of list" :class="{ 'bold': (isYesterday(item.date))}">
        <a :href="item.url">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

window.moment = moment

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: [],
    }
  },
  created () {
    for (let offset = 0; offset < 5; offset += 1) {
      const date = moment().subtract(offset, 'days')
      axios.all([
        axios.get(`http://fapi-top.prisasd.com/api/v1/search/playser/audio/idref/cadenaser_hora25_${date.format('YYYYMMDD')}_200000_210000/tfp`),
        axios.get(`http://fapi-top.prisasd.com/api/v1/search/playser/audio/idref/cadenaser_hora25_${date.format('YYYYMMDD')}_210000_220000/tfp`),
        axios.get(`http://fapi-top.prisasd.com/api/v1/search/playser/audio/idref/cadenaser_hora25_${date.format('YYYYMMDD')}_220000_230000/tfp`),
        axios.get(`http://fapi-top.prisasd.com/api/v1/search/playser/audio/idref/cadenaser_hora25_${date.format('YYYYMMDD')}_230000_233000/tfp`),
      ]).then((res) => {
        for (let i = 0; i < 4; i += 1) {
          const url = res[i].data.data[0].asset[0].url[0].url
          const name = res[i].data.data[0].name
          this.list.push({ name, url, date })
        }
      })
    }
  },
  methods: {
    isYesterday (date) {
      return moment().subtract(1, 'days').isSame(date, 'day')
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.bold {
  font-weight: bold;
}
</style>
