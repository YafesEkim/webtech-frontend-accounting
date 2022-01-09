<template>
  <div class="uebersicht">
    <h1>Übersicht</h1>
    <div class="col" v-for="rechnung in rechnung" :key="rechnung.id">
      <table class="table">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Firma</th>
          <th scope="col">Datum</th>
          <th scope="col">Betrag in €</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td>{{rechnung.firma.firmaName}}</td>
          <td>{{rechnung.rechnungsDatum}}</td>
          <td>{{rechnung.betrag}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rechnung',
  data () {
    return {
      rechnung: []
    }
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch('https://webtech1accounting.herokuapp.com//api/v1/rechnungen/', requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(rechnung => this.rechnung.push(rechnung)))
      .catch(error => console.log('error', error))
  }

}
</script>

<style scoped>

h1 {
  background: white;
  width: 100%;
}
</style>
