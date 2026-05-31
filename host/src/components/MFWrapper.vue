<template>
  <div ref="root"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const root = ref<HTMLElement | null>(null)

onMounted(async () => {
  const { mount } = await import('app1/mount')

  if (root.value) {
    mount(root.value)
  }
})
</script>