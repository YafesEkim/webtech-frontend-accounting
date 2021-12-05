<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Buchhaltung Y&M</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/about">Startseite</router-link>
          <router-link class="nav-link" to="/uebersicht">Übersicht</router-link>
          <router-link class="nav-link" to="/verbundene-konten">Verbundene Konten</router-link>
          <router-link class="nav-link" to="/einstellungen">Einstellungen</router-link>

          <!--     <a class="nav-link active" aria-current="page" href="#">Home</a>
               <a class="nav-link" href="#">Übersicht</a>
               <a class="nav-link" href="#">Verbundene Konten</a>
               <a class="nav-link disabled">Account Einstellungen</a> -->
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>

</style>
