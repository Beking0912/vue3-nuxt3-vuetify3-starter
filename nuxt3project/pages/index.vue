<template>
  <div>
    <img :src="'assets/images/open_peeps.png'">

    <form class="lang-form">
      <select v-model="locale">
        <option value="en">
          en
        </option>
        <option value="ar">
          ar
        </option>
        <option value="fr">
          fr
        </option>
      </select>
      <p>{{ $t('Dashboards') }}</p>
    </form>

    <v-img
      :width="300"
      aspect-ratio="16/9"
      cover
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    />

    <v-btn @click="toggleTheme">
      toggle theme
    </v-btn>

    <v-chip
      class="ma-2"
      color="red"
      text-color="white"
    >
      Red Chip
    </v-chip>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useTheme } from 'vuetify'

const { locale } = useI18n()

// const { $vuetify } = useNuxtApp()
// $vuetify.theme.global.name.value = 'dark'
// console.log($vuetify.theme.global.current.value.dark)
// console.log($vuetify.theme.themes)
// console.log($vuetify.theme.global.current.value.colors.primary) // .theme.currentTheme.primary
// console.log($vuetify.display.lgAndUp)

const theme = useTheme()
const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>
<style lang="scss" scoped>
@import 'styles/styles.scss';
.lang-form {
  width: 100px;
  background-color: $my-color1;
  color: $my-color2;
}
</style>
