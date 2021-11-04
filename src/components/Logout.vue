<template>
  <div>
      <h1> Bienvenido estas dentro</h1>
      <h2>para salir aprieta el boton </h2>
    <button @click="logout">Cerrar sesión</button>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
export default {
  name: "logout-comp",
  // props: {},
  data: function () {
    return {};
  },
  // computed: {},
  methods: {
    logout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          this.$router.push("/login");
          alert("te has deslogeado correctamente ")
        })
        .catch((error) => {
          // An error happened.
          console.log(error)
        });
    },
  },
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>