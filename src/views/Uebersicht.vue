<template>
  <div class="uebersicht">
    <h1>Übersicht</h1>
    <div class="col">
      <table class="table">
        <thead>
        <tr>
          <th>Rechnunsnr.</th>
          <th>Firma</th>
          <th>Datum</th>
          <th>Betrag in €</th>
          <th>Rechnungsart</th>
        </tr>
        </thead>
        <tbody v-for="rechnung in rechnung" :key="rechnung.id">
        <tr v-if="rechnung.rechnungsart === 'AUSGABE'" class = "ausgabe">
          <td>{{rechnung.rechnungsNummer}}</td>
          <td>{{rechnung.firma.firmaName}}</td>
          <td>{{rechnung.rechnungsDatum}}</td>
          <td>{{rechnung.betrag}}</td>
          <td>{{rechnung.rechnungsart}}</td>
        </tr>
        <tr v-else-if="rechnung.rechnungsart === 'EINNAHME'" class = "einnahme">
          <td>{{rechnung.rechnungsNummer}}</td>
          <td>{{rechnung.firma.firmaName}}</td>
          <td>{{rechnung.rechnungsDatum}}</td>
          <td>{{rechnung.betrag}}</td>
          <td>{{rechnung.rechnungsart}}</td>
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

<style>
.col {
  background: white;
  width: 100%;
}
h1{
  background: #041B31;
  color: white;
  width: 100%;
}
.einnahme{
  background: darkseagreen;
}
.ausgabe{
  background: indianred;
}

</style>
