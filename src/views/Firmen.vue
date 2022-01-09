<template>
  <div class="form">
    <div class="banner">
      <h1>Firmeneinträge</h1>
    </div>
    <p class="firmatext">Trage bitte hier die Firmen ein, bei denen du Einkäufe <br> getätigt hast oder auch Artikel
      verkauft hast.</p>
    <form>
      <label for="Firma">Firmenname</label>
      <input type="text" id="Firma" name="Firma" placeholder="YM GmbH" class="inputfeld" required>
      <label for="Adresse">Firmenadresse</label>
      <input type="text" id="Adresse" name="Adresse" placeholder="Musterstr. 12345 Musterstadt" size="50"
             class="inputfeld" required>
      <label for="ustid">UmsatzsteuerID</label>
      <input type="text" id="ustid" name="ustid" placeholder="UstID" class="inputfeld">
      <input type="submit" value="Firma eintragen">
      <input type="reset" value="Eingaben löschen">
    </form>
  </div>
</template>

<script>
export default {
  name: 'Firmen'
}
</script>

<style scoped>

h1 {
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}
p,div
{
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}

.banner {
  position: relative;
  height: 130px;
  width: auto;
  margin-bottom: 10px ;
  background-image: url("../assets/Logos15.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.banner::after {
  content: "";
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  width: 100%;
  height: 100%;
}
h1 {
  background-color: white;
  color: black;
}

div {
  border-radius: 10px;
  background-color: #DAD7C5;
  padding: 10px;
  width: 50%;
  height: 50%;
}

.form {

  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;

}

input[type=text] , input[type=password], input[type=number], input[type="reset"],  select {
  width: 100%;
  padding: 10px 15px;
  margin: 10px 0px;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-sizing: border-box;

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
  font-size: larger;
  font-family: Arial, Helvetica, sans-serifs;
}

input[type="reset"]:hover {
  background-color: rgb(165, 0, 0);
}

input[type=submit]{
  width: 100%;
  background-color: #4C6D8D;
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
  background-color:#041B31;
}

.firmatext{
  text-align: center;
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

.inputfeld:hover {

  box-shadow: 0 0 10px #7591AC;
}
</style>
