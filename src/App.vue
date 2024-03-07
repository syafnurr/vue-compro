<template>
  <Loader v-if="loaderStore.isLoading" />
  <Navbar />
  <router-view />
  <Footer />
</template>

<script setup>
import { onMounted } from 'vue';
import { useLoaderStore } from '@/stores/loader.module'; // Adjust the import path based on your project structure

const loaderStore = useLoaderStore();

onMounted(() => {
  loaderStore.hideLoader(); // Initially hide loader after component mounts
});
</script>
