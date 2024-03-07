<template>
  <div class="bg-white z-10 mx-auto max-w-7xl my-8 px-4 py-8 sm:p-20">
    <div class="text-center">
      <p class="mb-8 text-4xl leading-10 font-bold tracking-tight text-gray-900 sm:text-4xl">{{ data.title }}</p>
      <p class="mb-8 text-gray-600">
        {{ data.desc }}
      </p>
    </div>
    <div class="flex flex-col sm:flex-row justify-between gap-4 sm:gap-20 mb-10">
      <div class="text-center">
        <img :src="headquarterImage" alt="Headquarter Office" class="mx-auto mt-4 h-48" />
      </div>
      <div class="text-center">
        <img :src="branchImage" alt="Branch Office" class="mx-auto mt-4 h-48" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useHomeStore } from '@/stores/home.module'


const stores = useHomeStore()

const data = computed(() => stores.homeData.ourCompany)

const apiUrl = computed(() => {
  const url = new URL(process.env.VUE_APP_API_URL);
  // Assuming you want to keep the protocol and hostname but not the path
  return `${url.protocol}//${url.hostname}${url.port ? `:${url.port}` : ''}`;
});

const headquarterImage = computed(() => {
  const imageUrl = stores.homeData.ourCompany?.image?.data[0]?.attributes?.url;
  return imageUrl ? `${apiUrl.value}${imageUrl}` : '';
});

const branchImage = computed(() => {
  const imageUrl = stores.homeData.ourCompany?.image?.data[1]?.attributes?.url;
  return imageUrl ? `${apiUrl.value}${imageUrl}` : '';
});
</script>

