<template>
  <div>
    <div class="card" v-if="persona != undefined">
      <div v-if="!isEdit">
        <h5 class="card-header">{{ persona.nombre }}</h5>
        <div class="card-body">
          <div class="card-text">
            <p>Mail : {{ persona.email }}</p>
            <p>Aporte : {{ persona.aporte }}</p>
          </div>
          <div class="btn btn-info" @click="isEdit = true">Editar</div>
        </div>
      </div>

      <div v-else>
        <h5 class="card-header">
          <input type="text" v-model="persona.nombre" />
        </h5>
        <div class="card-body">
          <div class="card-text">
            <p>Mail : <input type="text" v-model="persona.email" /></p>
            <p>Aporte : <input type="text" v-model="persona.aporte" /></p>
          </div>
          <div class="btn btn-info mr-3" @click="updateData">Guardar</div>
          <div class="btn btn-danger" @click="deletePerson">Eliminar</div>
        </div>
      </div>
    </div>

    <div v-else class="alert alert-danger" role="alert">
      No hay datos disponibles
    </div>
    <router-link to="/print" class="btn btn-primary mt-3">Volver</router-link>
  </div>
</template>

<script>
import { ref } from "vue";
// import {useStore} from 'vuex'
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

export default {
  setup() {
    // const store = useStore()
    const isEdit = ref(false);
    const route = useRoute();
    const router = useRouter();
    const persona = ref("");
    const index = route.params.index;
    // const persona = computed(()=>{
    axios
      .get(
        "https://vue-prueba-df020-default-rtdb.firebaseio.com/prueba/" +
          index +
          ".json"
      )
      .then((res) => {
        persona.value = res.data;
      });

    function updateData() {
      if (persona.value.nombre != "" && persona.value.email != "") {
        axios
          .put(
            "https://vue-prueba-df020-default-rtdb.firebaseio.com/prueba/" +
              index +
              ".json",
            persona.value
          )
          .then((res) => {
            console.log(res);
            isEdit.value = false;
          });
      }
    }

    function deletePerson() {
      if (confirm("Quieres Borrar a" + persona.value.nombre + "?")) {
        axios
          .delete(
            "https://vue-prueba-df020-default-rtdb.firebaseio.com/prueba/" +
              index +
              ".json"
          )
          .then((res) => {
            console.log(res);
            router.push("/print");
          });
      }
    }
    // return store.getters.getPersona(index);
    // })
    return { persona, isEdit, updateData, deletePerson };
  },
  // computed: {
  //   persona() {
  //     const index = this.$route.params.index;
  //     return this.$store.getters.getPersona(index);
  //   },
  // },
};
</script>