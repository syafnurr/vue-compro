<template>
  <div class="bg-white z-10 mx-auto max-w-7xl">
    <div class="text-center">
      <p class="mt-2 text-4xl leading-10 font-bold tracking-tight text-gray-900 sm:text-4xl">{{ data?.title }}</p>
      <p class="mt-6 text-base leading-7 text-gray-600">{{ data?.desc }}</p>
    </div>
  </div>
  <div
    class="flex overflow-auto py-5 hide-scrollbar pl-4 sm:pl-6 gap-1 p-8"
    v-draggable
  >
    <div 
      class="card flex-none px-4 py-5 sm:px-6 w-96"
      v-for="services in portFolioData"
      :key="services.id"
    >
      <div class="flex flex-col h-full">
        <img class="aspect-[3/2] w-full rounded-2xl object-cover" :src="apiUrl + services.attributes.image.data.attributes.url" alt="" />
        <div class="flex items-center gap-1">
          <p class="text-lg font-bold mt-5">
            <span>{{ services.attributes.title }}</span>
          </p>
        </div>
        <p class="text-sm mt-3">
          {{ services.attributes.desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useHomeStore } from '@/stores/home.module'


const stores = useHomeStore()

const data = computed(() => stores.homeData.portfolio)

onMounted(async () => {
  await stores.getPortfolio()
})

const portFolioData = computed(() => stores.portfolio)

const apiUrl = computed(() => {
  const url = new URL(process.env.VUE_APP_API_URL);
  // Assuming you want to keep the protocol and hostname but not the path
  return `${url.protocol}//${url.hostname}${url.port ? `:${url.port}` : ''}`;
});
</script>