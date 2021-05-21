<template>
  <div>
    <h3>Lista de invitados</h3>

    <ul class="list-group">
      <li v-for="(persona, i) in personas" :key="i" class="list-group-item">
        <router-link :to="`/details/${persona.id}`">{{ persona.nombre }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

export default {
  setup() {
    const personas = ref([]);

    axios({
      method: "GET",
      url: "https://vue-prueba-df020-default-rtdb.firebaseio.com/prueba.json",
    })
    .then((res) => {
      console.log(res.data);
      for (const id in res.data) {
        console.log(id);
        personas.value.push({
          id: id,
          nombre: res.data[id].nombre,
          email: res.data[id].email,
          aporte: res.data[id].aporte,
        });
      }
    });
    return { personas };
  },
  // computed: {
  //   personas() {
  //     return this.$store.getters.getPersonas;
  //   },
  // },
};
</script>