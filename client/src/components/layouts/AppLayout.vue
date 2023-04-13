<template>
  <AppHeader />
  <slot />
</template>

<script>
import AppHeader from '../AppHeader.vue'

export default {
name: 'Layout',
components: {
  AppHeader
}
}
</script>