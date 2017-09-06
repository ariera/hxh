<template>
  <div class="hello">
    <ul>
      <li v-for="item of list" :class="{ 'bold': (isToday(item.date))}">
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
    console.debug('hi')
    for (let offset = 0; offset < 10; offset += 1) {
      const date = moment().subtract(offset, 'days')
      axios.all([
        axios.get(`http://fapi-top.prisasd.com/api/v1/search/playser/audio/idref/cadenaser_hoyporhoy_${date.format('YYYYMMDD')}_080000_090000/tfp`),
        axios.get(`http://fapi-top.prisasd.com/api/v1/search/playser/audio/idref/cadenaser_hoyporhoy_${date.format('YYYYMMDD')}_090000_100000/tfp`),
      ]).then((res) => {
        let url = res[0].data.data[0].asset[0].url[0].url
        let name = res[0].data.data[0].name
        this.list.push({ name, url, date })
        url = res[1].data.data[0].asset[0].url[0].url
        name = res[1].data.data[0].name
        this.list.push({ name, url, date })
      })
    }
  },
  methods: {
    isToday (date) {
      return moment().isSame(date, 'day')
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
