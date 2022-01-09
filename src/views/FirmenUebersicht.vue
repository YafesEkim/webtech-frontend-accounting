<template>
  <h1>Firmen Übersicht</h1>
  <div class="col">
    <table class="table">
      <thead>
      <tr>
        <th>FirmenID</th>
        <th>Firma</th>
        <th>Adresse</th>
        <th>Ust_ID</th>
        <th>Rechnungen</th>
      </tr>
      </thead>
      <tbody v-for="firmen in firmen" :key="firmen.id">
      <tr>
        <td>{{firmen.id}}</td>
        <td>{{firmen.firmaName}}</td>
        <td>{{firmen.address}}</td>
        <td>{{firmen.ust_id}}</td>
        <td>{{firmen.rechnungIds.length}}</td>
      </tr>
      </tbody>
    </table>
<!--    <form>-->
<!--    <input type="submit" value="Firma löschen" @click='deleteFirma'>-->
<!--    </form>-->
  </div>
</template>

<script>
export default {
  name: 'FirmenUebersicht',
  data () {
    return {
      firmen: []
    }
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch('https://webtech1accounting.herokuapp.com//api/v1/firma/', requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(firmen => this.firmen.push(firmen)))
      .catch(error => console.log('error', error))
  }
  // methods: {
  //   deleteFirma () {
  //     const raw = ''
  //
  //     const requestOptions = {
  //       method: 'DELETE',
  //       body: raw,
  //       redirect: 'follow'
  //     }
  //
  //     fetch('http://localhost:8080/api/v1/firma/3', requestOptions)
  //       .catch(error => console.log('error', error))
  //   }
  // }
}
</script>

<style scoped>
input[type=submit]{
  width: 100%;
  background-color: darkred;
  color: white;
  padding: 12px 15px;
  font-size: 100%;
  margin: 10px 0px;
  border-radius: 4px;
  border: 2px solid black;
  cursor: pointer;
  font-size: larger;
  font-family: Arial, Helvetica, sans-serifs;
}

input[type=submit]:hover{
  background-color:red;
}
</style>
