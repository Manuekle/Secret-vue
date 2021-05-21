<template>
  <div>
    <h3>A&ntilde;adir invitados</h3>

    <div class="card" style="width: 35rem">
      <div class="card-body">
        <h5 class="card-title">Datos Invitado</h5>

        <div class="form-group">
          <label for="formGroupExampleInput">Nombre</label>
          <input
            v-model="nombre"
            type="text"
            class="form-control"
            placeholder="Nombre"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">E-mail</label>
          <input
            v-model="email"
            type="text"
            class="form-control"
            placeholder="Correo"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Aporte</label>
          <input
            v-model="aporte"
            type="text"
            class="form-control"
            placeholder="Producto"
          />
        </div>
        <button class="btn btn-primary" @click="addPersona">
          A&ntilde;adir
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const nombre = ref("");
    const email = ref("");
    const aporte = ref("");

    function addPersona() {
      if (nombre.value != "" && email.value != "") {
        const persona = {
          nombre: nombre.value,
          email: email.value,
          aporte: aporte.value,
        };
        axios({
          method: "POST",
          url:
            "https://vue-prueba-df020-default-rtdb.firebaseio.com/prueba.json",
          data: persona,
        })
          .then((res) => {
            console.log(res);
            nombre.value = "";
            email.value = "";
            aporte.value = "";
          })
          .catch((error) => console.log(error));
        store.dispatch("addPersona", persona);
        router.push("/print");
      }
    }

    return { nombre, email, aporte, addPersona };
  },
  // data() {
  //   return {
  //     nombre: "",
  //     email: "",
  //     aporte: "",
  //   };
  // },
  // methods: {
  //   addPersona() {
  //     if (this.nombre != "" && this.email != "") {
  //       const persona = {
  //         nombre: this.nombre,
  //         email: this.email,
  //         aporte: this.aporte,
  //       };
  //       this.$store.dispatch("addPersona", persona);
  //       this.$router.push('/print')
  //     }
  //   },
  // },
};
</script>