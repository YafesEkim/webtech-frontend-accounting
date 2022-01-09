<template>
  <div class="uebersicht">
    <h1>Übersicht</h1>
    <div class="col">
      <table class="table">
        <thead>
        <tr>
          <th>Firma</th>
          <th>Datum</th>
          <th>Betrag in €</th>
        </tr>
        </thead>
        <tbody v-for="rechnung in rechnung" :key="rechnung.id">
        <tr v-if="rechnung.rechnunngsart === EINNAHME" class = "einnahme">
          <td>{{rechnung.firma.firmaName}}</td>
          <td>{{rechnung.rechnungsDatum}}</td>
          <td>{{rechnung.betrag}}</td>
        </tr>
        <tr v-else-if="rechnung.rechnunngsart === AUSGABE" class = "ausgabe">
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
    fetch('http://localhost:8080/api/v1/rechnungen/', requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(rechnung => this.rechnung.push(rechnung)))
      .catch(error => console.log('error', error))
  }
}

</script>

<style>
.einnahme{
  background: darkseagreen;
}
.ausgabe{
  background: indianred;
}

</style>
