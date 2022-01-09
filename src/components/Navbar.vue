<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/home">YM Buchhaltung</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/home">Home</router-link>
          <router-link class="nav-link" to="/rechnung">Rechnung</router-link>
          <router-link class="nav-link" to="/firmen">Firmen</router-link>
          <router-link class="nav-link" to="/uebersicht">Übersicht</router-link>
          <router-link class="nav-link" to="/firmenUebersicht">Firmen Übersicht</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script scoped>
export default {
  name: 'Navbar'
}
</script>

<style>

</style>
