<template>
  <div>
    <h1>Ingresar a Mi App</h1>
    <h3> usuario@usuario.cl contraseña : 123456 </h3>
    <form>
      <label for="">Usuario</label>
      <input type="text" v-model="usuario" />
      <label for="">Contraseña</label>
      <input type="password" v-model="contraseña" />
      <button @click.prevent="login">Acceder</button>
    </form>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
  name: "login-component",
  // props: {},
  data: function () {
    return {
      usuario: "",
      contraseña: "",
    };
  },
  // computed: {},
  methods: {
    login() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.usuario, this.contraseña)
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user)
    alert("has ingresado correctamente")
    //console.log(userCredential);
    this.$router.push('/')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
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
form {
  display: grid;
  width: 300px;
  margin: 0 auto;
}
</style>
