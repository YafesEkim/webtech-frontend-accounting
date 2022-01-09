<template>
  <div class="uebersicht">
    <h1>This is an about page</h1>
  </div>
  <div class="uebersicht">
    <h1>Übersicht</h1>
    <div class="col" v-for="firma in firma" :key="firma.id">
      <table class="table">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Firma</th>
          <th scope="col">Datum</th>
          <th scope="col">Betrag</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td>{{firma.firmaName}}</td>
          <td>{{firma.datum}}</td>
          <td>{{firma.betrag}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Firma',
  data () {
    return {
      firma: []
    }
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch('https://webtech1accounting.herokuapp.com/api/v1/firma/', requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error))
  }
}
</script>
