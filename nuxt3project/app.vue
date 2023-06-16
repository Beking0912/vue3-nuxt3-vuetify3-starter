<template>
  <form>
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
</template>
<script setup>
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
</script>
