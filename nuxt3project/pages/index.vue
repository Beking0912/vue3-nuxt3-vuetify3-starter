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

    <v-btn @click="toggleTheme">
      toggle theme
    </v-btn>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useTheme } from 'vuetify'
const { locale } = useI18n()
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
