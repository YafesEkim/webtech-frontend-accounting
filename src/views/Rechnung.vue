<template>
  <h1>Hier könne Sie ihre Rechnungen erstellen</h1>
  <div>
    <form>
      <label for="firma">Tragen Sie hier Ihre Rechnung ein</label>
      <input type="text" id="firma" name="firma" placeholder="Firma">
      <label for="summe">Betrag €</label> <br>
      <input type="number" id="summe" name="summe" placeholder="0.00" step="any"> <br> <br>
      <label for="art">Rechnungsart</label>
      <select id="art" name="rechnungsart" >
        <option value="" disabled selected hidden>Wähle aus...</option>
        <option value="einnahme">Einnahme</option>
        <option value="ausgabe">Ausgabe</option>
      </select>
      <label for="steuer">Mehrwertsteuersatz</label>
      <select name="steuer" id="steuer">
        <option value="" disabled selected hidden>Wähle aus...</option>
        <option value="7mwst">7% MwSt.</option>
        <option value="19mwst">19% MwSt</option>
      </select>
      <input type="submit" value="Rechnung erstellen">
    </form>
</template>

<script>
export default {
  name: 'Rechnung'
}
</script>

<style>

div{
  border-radius: 10px;
  background-color: #DAD7C5;
  padding: 10px;
  width: 50%;
  position: absolute;
}

input[type=text] , input[type=password], input[type=number], select {
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

</style>
