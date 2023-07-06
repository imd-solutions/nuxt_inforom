<template>
  <v-form
    ref="form"
    @submit.prevent="onSubmit"
    v-model="valid"
    class="webinar-form"
  >
    <h3 class="webinar-form__title">Join our newsletter</h3>
    <Date :text="date" />
    <hr />
    <p class="webinar-form__content-text">{{ description }}</p>
    <hr />
    <div v-if="!submitted && !sending" class="webinar-form__content">
      <v-row>
        <v-col cols="6">
          <label for="firstName">First Name</label>
          <v-text-field
            id="firstName"
            v-model="firstName"
            :rules="nameRules"
            required
            placeholder="Enter Your First Name"
            solo
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <label for="lastName">Last Name</label>
          <v-text-field
            id="lastName"
            v-model="lastName"
            :rules="nameRules"
            placeholder="Enter Your Last Name"
            solo
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <label for="email">Email address</label>
          <v-text-field
            id="email"
            v-model="email"
            :rules="emailRules"
            placeholder="Enter your Email address"
            type="email"
            solo
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <label for="companyName">Company Name</label>
          <v-text-field
            id="companyName"
            v-model="companyName"
            :rules="companyRules"
            placeholder="Enter Your Company Name"
            solo
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <label for="jobTitle">Job Title</label>
          <v-text-field
            id="jobTitle"
            v-model="jobTitle"
            :rules="jobRules"
            placeholder="Enter Your Job Title"
            solo
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <label id="country_label">Country:</label>
          <vue-country-code
            @onSelect="onCountrySelect"
            :preferredCountries="['us', 'gb']"
          >
          </vue-country-code>
        </v-col>
      </v-row>
      <hr />
      <p class="webinar-form__footer-text">
        TM Forum will be processing the above information, with the assistance
        of our service providers located within and outside the European Union,
        to manage your registration to this event or report download, as well as
        to keep you informed about our services and products, future events and
        special offers, the organization of events, providing training and
        certification, and facilitating collaboration programs.
      </p>
      <div class="webinar-form__footer-text d-flex align-center mb-5">
        <v-checkbox
          v-model="sponsorOptin"
          id="sponsorOptin"
          color="red"
          value="red"
          hide-details
        ></v-checkbox>
        <label for="sponsorOptin">
          Check if you agree that your data will be shared with
          {{ companiesText }} for their follow-up. To learn more about how we
          process your data, please refer to our Privacy Policy.
        </label>
      </div>
      <v-btn
        class="signup-btn white--text"
        type="submit"
        color="red"
        @click="validate"
        :disabled="!valid"
      >
        Register
      </v-btn>
    </div>
    <div v-else class="thanks">
      <v-progress-circular
        v-if="sending"
        :size="30"
        :width="4"
        color="black"
        indeterminate
      ></v-progress-circular>

      THANK<br />YOU
    </div>
  </v-form>
</template>

<script>
import axios from 'axios'
import Date from '../../Text/Date/Date'

export default {
  name: 'WebinarForm',

  components: {
    Date,
  },

  props: {
    date: {
      type: String,
    },
    description: {
      type: String,
    },
    companies: {
      type: Array,
    },
    marketoFormId: {
      type: Number,
    },
  },

  data() {
    return {
      sponsorOptin: false,
      submitted: false,
      sending: false,
      valid: false,
      firstName: '',
      lastName: '',
      nameRules: [(v) => !!v || 'Name is required'],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      companyName: '',
      companyRules: [(v) => !!v || 'Company name is required'],
      jobTitle: '',
      jobRules: [(v) => !!v || 'Job title is required'],
      country: '',
      countryRules: [(v) => !!v || 'Country is required'],
    }
  },

  computed: {
    formData() {
      return {
        formId: this.marketoFormId,
        input: [
          {
            leadFormFields: {
              firstName: this.firstName,
              lastName: this.lastName,
              email: this.email,
              Company: this.companyName,
              jobTitle: this.jobTitle,
              Country: this.country,
              PMCF_sponsor_optin: sponsorOptin,
            },
          },
        ],
      }
    },
    companiesText() {
      return this.companies.join(', ') || 'the sponsors'
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
    onCountrySelect({ iso2 }) {
      this.country = iso2
    },
  },
}
</script>

<style lang="scss" src="./Index.scss"></style>
