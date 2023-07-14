<template>
  <div>
    <NuxtLink to="/">
      index page
    </NuxtLink>

    <img v-if="pending" :src="'assets/images/open_peeps.png'">
    <div v-else>{{ data.length }}</div>

    <p>
      {{ name }} {{ doubleCount }}
    </p>
    <v-btn @click="increment">
      count++
    </v-btn>
  </div>
</template>
<script setup>
const store = useCounterStore()
const { name, doubleCount } = storeToRefs(store)
const { increment } = store

const { pending, data } = await useLazyAsyncData(
  'mountains',
  () => $fetch('https://api.nuxtjs.dev/mountains'),
  {
    watch: [doubleCount]
  }
)

definePageMeta({
  layout: 'blank'
})
</script>
