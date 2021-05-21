<template>
  <section class="form-wrap">
    <form class="form" @submit.prevent="submitHandler">
      <h2>Login</h2>
      <label class="form__label"
        >Email
        <input
          type="text"
          placeholder="Example@gmail.com"
          class="form__field"
          :class="{ invalid: ($v.email.$dirty && !$v.email.required) ||  ($v.email.$dirty && !$v.email.email)}"
          v-model.trim="email"
        />
      </label>
      <label class="form__label"
        >Password
        <input
          type="password"
          class="form__field--password"
          v-model.trim="password"
        />
      </label>
      <div class="form__reminder">Don’t remember password?</div>
      <v-button type="submit">Continue</v-button>
    </form>
    <div class="registration">
      I have no account,
      <router-link to="/registration">REGISTER NOW</router-link>
    </div>
  </section>
</template>

<script>
import Button from "@/components/Button.vue";
import { email, required, minLength } from "vuelidate/lib/validators";
export default {
  components: {
    "v-button": Button,
  },
  name: "login",
  data: () => ({
    email: "",
    password: "",
  }),
  validations: {
    email: { email, required },
    password: { minLength, required },
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        console.log('err')
        return
      }
      this.$router.push("/home");
    },
  },
};
</script>
<style lang="scss" scoped>
.form-wrap {
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px 24px 21px;
  width: 425px;
  height: 365px;
  background: #ffffff;
  box-shadow: 0px 2px 42px rgba(0, 0, 0, 0.111233);
  border-radius: 7px;

  &__label {
    text-transform: uppercase;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.3px;
    display: block;
  }

  &__field {
    width: 100%;
    display: block;
    padding: 19px 13px 21px;
    background: #f9fafb;
    border: 1px solid #dedee0;
    box-sizing: border-box;
    border-radius: 5px;
    margin-bottom: 15px;
  }
  &__field--password {
    width: 100%;
    display: block;
    padding: 19px 13px 21px;
    background: #f9fafb;
    border: 1px solid #dedee0;
    box-sizing: border-box;
    border-radius: 5px;
    margin-bottom: 15px;
    background-image: url("../assets/img/eye.svg");
    background-repeat: no-repeat;
    cursor: pointer;
    background-position: 95% 50%;
  }

  &__reminder {
    align-self: flex-end;
    color: #8c8c8c;
    margin-left: auto;
  }
}

.registration {
  margin-top: 21px;
  padding: 30px 86px;
  background: #ffffff;
  box-shadow: 0px 2px 42px rgba(0, 0, 0, 0.111233);
  border-radius: 7px;
  width: 425px;
  height: 76px;

  a {
    text-transform: uppercase;
    color: #349a89;
    text-decoration: none;
    list-style: none;
  }
}
</style>
