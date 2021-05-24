<template>
  <section class="form-wrap">
    <form class="form" @submit.prevent="submitHandler">
      <h2 class="form__title">Login</h2>
      <label class="form__label">Email </label>

      <input
        type="text"
        placeholder="Example@gmail.com"
        class="form__field"
        :class="{
          invalid:
            ($v.email.$dirty && !$v.email.required) ||
            ($v.email.$dirty && !$v.email.email),
        }"
        v-model.trim="email"
      />
      <small v-if="$v.email.$dirty && !$v.email.required" class="invalid"
        >Email required
      </small>
      <small v-else-if="$v.email.$dirty && !$v.email.email" class="invalid"
        >Email not correct
      </small>
      <label class="form__label">Password </label>

      <input
        :type="passwordFieldType"
        class="form__field--password"
        :class="{
          invalid:
            ($v.password.$dirty && !$v.password.required) ||
            ($v.password.$dirty && !$v.password.minLength),
        }"
        v-model.trim="password"
      />
      <span class="place-icon icon-eye" @click="switchVisibility"></span>

      <small v-if="$v.password.$dirty && !$v.password.required" class="invalid"
        >Password required
      </small>
      <small
        v-else-if="$v.password.$dirty && !$v.password.minLength"
        class="invalid"
        >Wrong Password, min {{ $v.password.$params.minLength.min }} symbols.
        Now password: {{ password.length }}
      </small>
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
    passwordFieldType: "password",
  }),
  validations: {
    email: { email, required },
    password: { minLength: minLength(8), required },
  },
  methods: {
    switchVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password,
      };
      console.log(formData);
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
  min-height: 365px;
  background: #ffffff;
  box-shadow: 0px 2px 42px rgba(0, 0, 0, 0.111233);
  border-radius: 7px;

  &__title {
    text-align: center;
    margin-bottom: 28px;
  }
  &__label {
    text-transform: uppercase;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.3px;
    display: block;
    margin-bottom: 5px;
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

.invalid {
  font-size: 12px;
  font-weight: 300;
  color: red;
}
.place-icon {
  position: relative;
}
.icon-eye {
  background-image: url("../assets/img/eye.svg");
  background-repeat: no-repeat;
  content: "";
  width: 24px;
  height: 24px;
  position: relative;
  left: 335px;
  top: -54px;
  cursor: pointer;
}
</style>
