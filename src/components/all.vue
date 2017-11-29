<template>
  <div>
    <HoyPorHoy></HoyPorHoy>
    <Hora25></Hora25>
  </div>
</template>

<script>
import Hora25 from './hora25'
import HoyPorHoy from './hoy-por-hoy'

export default {
  components: { Hora25, HoyPorHoy },
}
</script>

<style>
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
  font-size: 13px;
}
.bold {
  font-weight: bold;
}
</style>
