<template>
  <app-header/>
  <div><router-view /></div>
  <div>
    <footer class="footer text-faded text-center py-5">
      <div class="container">
        <h6 class="m-0 small">Copyright &copy; De Le Granja A Tú Casa 2021</h6>
      </div>
    </footer>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    "app-header": Header,
  },
};
</script>