<template>
  <div class="rechnung"></div>
  <h1>Hier könne Sie ihre Rechnungen erstellen</h1>
  <div>
    <form>
      <label for="firma">Tragen Sie hier Ihre Rechnung ein</label>
      <input type="text" id="firma" name="firma" placeholder="Firma">
      <label for="summe">Betrag</label>
      <input type="number" id="summe" name="summe" placeholder="Bsp.: 15.53">
      <label for="art">Rechnungsart</label>
      <select id="art" name="rechnungsart">
        <option value="einnahme">Einnahme</option>
        <option value="ausgabe">Ausgabe</option>
      </select>
      <input type="submit" value="Rechnung erstellen">
    </form>
  </div>
</template>

<script>
export default {
  name: 'Rechnung'
}
</script>

<style>

</style>
