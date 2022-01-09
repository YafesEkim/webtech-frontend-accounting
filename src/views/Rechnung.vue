<template>
  <div class="container">
    <h1 style="text-align: center;">Hier können Sie ihre Rechnungen erstellen</h1>
    <p>Tragen Sie bitte Ihre Rechnung in das untenstehende  <br >Formular ein.</p>
    <form>
      <label for="firma">Firmenname</label>
      <input type="text" id="firma" name="firma" placeholder="Firma" required>
      <label for="summe">Betrag €</label> <br>
      <input type="number" id="summe" name="summe" placeholder="0.00" step="any" required> <br> <br>
      <label for="rechnungsdatum">Rechnungsdatum</label>
      <input type="date" name="rechnungsdatum" id="rechnungsdatum">
      <label for="art">Rechnungsart</label>
      <select id="art" name="rechnungsart" required>
        <option value="" disabled selected hidden>Wähle aus...</option>
        <option value="einnahme">Einnahme</option>
        <option value="ausgabe">Ausgabe</option>
      </select>
      <input type="submit" value="Rechnung erstellen">
      <input type="reset" value="Eingaben löschen">
    </form>
  </div>
</template>

<script>
export default {
  name: 'Rechnung'
}
</script>

<style scoped>

h1 {
  color: #4C6D8D ;
}
p{
  text-align: center;
  font-size: larger;
  font-weight: bold;
  font-style: italic;
}
.container{
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
