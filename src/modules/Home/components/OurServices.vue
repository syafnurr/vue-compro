<template>
  <div class="bg-white z-10 mx-auto max-w-7xl">
    <div class="text-center">
      <p class="mt-2 text-4xl leading-10 font-bold tracking-tight text-gray-900 sm:text-4xl">{{ data?.title }}</p>
      <p class="mt-6 text-base leading-7 text-gray-600">{{ data?.desc }}</p>
    </div>
  </div>
  <div
    class="flex overflow-auto py-5 hide-scrollbar pl-4 sm:pl-6 gap-3"
    v-draggable
  >
    <div 
      class="card flex-none px-4 py-5 sm:px-6 bg-base-100 hover:shadow-xl w-96"
      v-for="services in servicesCard"
      :key="services.id"
    >
      <div class="flex flex-col justify-between h-full">
        <div class="flex items-center gap-2">
          <img :src="apiUrl + services.attributes.icon.data.attributes.url" class="w-6 h-6" />
          <p class="text-lg font-bold">
            <span>{{ services.attributes.title }}</span>
          </p>
        </div>
        <p class="text-sm mt-3">
          {{ services.attributes.desc }}
        </p>
        <ul class="flex flex-wrap gap-4 mt-4">
          <li
            v-for="tag in services.attributes.tags_services.data"
            :key="tag.id"
            class="flex items-center gap-1 text-sm"
          >
            <img src="@/assets/images/point.svg" class="h-4 w-5" />
            <span>{{ tag.attributes.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useHomeStore } from '@/stores/home.module'


const stores = useHomeStore()

const data = computed(() => stores.homeData.ourService)

onMounted(async () => {
  await stores.getServices()
})

const servicesCard = computed(() => stores.services)

const apiUrl = computed(() => {
  const url = new URL(process.env.VUE_APP_API_URL);
  // Assuming you want to keep the protocol and hostname but not the path
  return `${url.protocol}//${url.hostname}${url.port ? `:${url.port}` : ''}`;
});
</script>