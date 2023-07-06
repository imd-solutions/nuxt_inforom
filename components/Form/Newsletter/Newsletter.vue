<template>
  <div>
    <v-form
      ref="form"
      @submit.prevent="onSubmit"
      v-model="valid"
      class="homepage-form"
    >
      <h3 class="homepage-form__title">Join our newsletter</h3>
      <div v-if="!submitted && !sending" class="homepage-form__content">
        <label for="name" class="mt-2">Enter Your Name</label>
        <v-text-field v-model="name" :rules="nameRules" required></v-text-field>
        <label for="email">Enter Your Email</label>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          required
        ></v-text-field>
        <Button :background="'#E9242C'" :background-color="'#E9242C'" border-color="#E9242C" color="white"
                @click="validate"
                :disabled="!valid" :text="'Sign Up'"/>
        <!--
        <v-btn
          class="signup-btn white--text"
          type="submit"
          color="red"
          @click="validate"
          :disabled="!valid"
        >
          Sign Up
        </v-btn>
        -->
      </div>
      <div v-else class="thanks">
        <v-progress-circular
          v-if="sending"
          :size="30"
          :width="4"
          color="white"
          indeterminate
        ></v-progress-circular>

        THANK<br />YOU
      </div>
    </v-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'NewsletterForm',

  data() {
    return {
      submitted: false,
      sending: false,
      valid: false,
      name: '',
      nameRules: [(v) => !!v || 'Name is required'],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }
  },
  computed: {
    formData() {
      return {
        formId: 3499,
        input: [
          {
            leadFormFields: { name: this.name, email: this.email },
          },
        ],
      }
    },
  },
  methods: {
    validate() {
      this.$refs.form.validate()
    },
    onSubmit(e) {
      this.sending = true
      // send form data to marketo form endpoint
      let apiUrl = 'https://new-inform-staging.tmforum.org/api/marketo/'
      axios
        .post(apiUrl, this.formData)
        .then(() => {
          this.submitted = true
        })
        .catch((err) => {
          this.submitted = false
          console.error(err)
        })
        .finally(() => {
          this.sending = false
        })
      e.preventDefault()
    },
  },
}
</script>

<style lang="scss" src="./Index.scss"></style>
