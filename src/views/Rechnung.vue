<template>
  <div class="container">
    <h1 style="text-align: center;">Hier können Sie ihre Rechnungen erstellen</h1>
    <p>Tragen Sie bitte Ihre Rechnung in das untenstehende <br>Formular ein.</p>
    <form>
      <label for="firmaId">FirmenID</label>
      <input type="text" id="firmaId" name="firmaId" placeholder="FirmenID" required v-model="owner_id">
      <label for="rechnungsNummer">Rechnungs Nummer</label>
      <input type="text" id="rechnungsNummer" name="rechnungsNummer" placeholder="Rechnungs Nummer" required
             v-model="rechnungsNummer">
      <label for="summe">Betrag €</label> <br>
      <input type="number" id="summe" name="summe" placeholder="0.00" step="any" required v-model="betrag"> <br> <br>
      <label for="rechnungsdatum">Rechnungsdatum</label>
      <input type="date" name="rechnungsdatum" id="rechnungsdatum" required v-model="rechnungsDatum">
      <label for="art">Rechnungsart</label>
      <select id="art" name="rechnungsart" required v-model="rechnungsart">
        <option value="" disabled selected hidden>Wähle aus...</option>
        <option value="EINNAHME">Einnahme</option>
        <option value="AUSGABE">Ausgabe</option>
      </select>
      <!--      <label for="steuer">Mehrwertsteuersatz</label>-->
      <!--      <select name="steuer" id="steuer" required>-->
      <!--        <option value="" disabled selected hidden>Wähle aus...</option>-->
      <!--        <option value="7mwst">7% MwSt.</option>-->
      <!--        <option value="19mwst">19% MwSt</option>-->
      <!--      </select>-->
      <input type="submit" value="Rechnung erstellen" @click='createRechnung'>
      <input type="reset" value="Eingaben löschen">
    </form>
  </div>
</template>

<script>
export default {
  name: 'Rechnung',
  data () {
    return {
      firma: [],
      rechnungsNummer: '',
      rechnungsart: '',
      rechnungsDatum: '',
      betrag: '',
      owner_id: ''
    }
  },
  methods: {
    createRechnung () {
      const myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      const raw = JSON.stringify({
        rechnungsNummer: this.rechnungsNummer,
        rechnungsart: this.rechnungsart,
        rechnungsDatum: this.rechnungsDatum,
        betrag: this.betrag,
        ownerId: this.owner_id
      })

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }

      fetch('https://webtech1accounting.herokuapp.com//api/v1/rechnungen/', requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
    },
    getFirma () {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }

      fetch('https://webtech1accounting.herokuapp.com//api/v1/firma/', requestOptions)
        .then(response => response.text())
        .then(result => result.forEach(firma => this.firma.push(this.firma)))
        .catch(error => console.log('error', error))
    }
  }
}
</script>

<style scoped>

body{
  background-color: rgb(174, 201, 77);
  background-image:
    url("../assets/buero-einrichten-t.jpg");
  background-repeat: no-repeat;
  -webkit-background-size : cover;
  -moz-background-size: cover;
  -moz-background-size: cover;

}

h1 {
  color: #4C6D8D ;
}
p{
  text-align: center;
  font-size: larger;
  font-weight: bold;
  font-style: italic;
}
div{
  border-radius: 10px;
  background-color: #DAD7C5;
  padding: 10px;
  width: 50%;

}

input[type=text] , input[type=password], input[type=number], input[type=date] , select {
  width: 100%;
  padding: 10px 15px;
  margin: 10px 0px;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-sizing: border-box;

}

input[type=submit] {
  width: 100%;
  background-color: #4C6D8D;
  color: white;
  padding: 12px 15px;
  font-size: 100%;
  margin: 10px 0px;
  border-radius: 4px;
  border: 2px solid black;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #041B31;

}

input[type=text] , input[type=number], select {
  width: 100%;
  padding: 10px 15px;
  margin: 10px 0px;
  border: 2px solid rgb(0, 0, 0);
  border-radius: 5px;
  box-sizing: border-box;

}

label {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin-bottom: 20px;
}

.container {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
}

body{
  background-color: rgb(174, 201, 77);
  background-image:
    url("../assets/buero-einrichten-t.jpg");
  background-repeat: no-repeat;
  -webkit-background-size : cover;
  -moz-background-size: cover;
  -moz-background-size: cover;

}

input[type="reset"] {
  width: 100%;
  background-color: rgb(100, 3, 3);
  color: white;
  padding: 12px 15px;
  font-size: 100%;
  margin: 10px 0px;
  border-radius: 4px;
  border: 2px solid black;
  cursor: pointer;
}

input[type="reset"]:hover {
  background-color: rgb(165, 0, 0);
}
</style>
