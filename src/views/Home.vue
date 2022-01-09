<template>
  <div>
    <h1>
      Willkommen bei YM Accounting
    </h1>
    <img class="logo" src="../assets/YMLogo.png">
    <p>Auf unserer webseite kannst du deine Rechnungen notieren und die <br>
      jeweiligen Firmen dazu hinzufügen und speichern.</p>
    <a href="/rechnung"><button a>Rechnung erstellen</button></a>
    <a href="firmen"><button>Firma eintragen</button></a>
    <a href="uebersicht"><button>Rechnungen einsehen</button></a>
  </div>
</template>

<script scoped>
export default {
  name: 'Home'
}
</script>

<style>

p {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}

button {
  display: inline-block;
  padding: .75rem 1.25rem;
  border-radius: 10rem;
  color: #fff;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: .15rem;
  transition: all .3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  color: black;
}

button:hover {
  color: white;
  background: #4C6D8D;
}
.logo {
  width: 400px;
}
</style>
