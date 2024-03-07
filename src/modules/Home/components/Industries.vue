<template>
  <div class="bg-white z-10 mx-auto max-w-7xl my-8 p-20">
    <div class="text-center">
      <p class="mt-2 text-4xl leading-10 font-bold tracking-tight text-gray-900 sm:text-4xl">{{ data?.title }}</p>
      <p class="mt-6 mb-16 text-base leading-7 text-gray-600">{{ data?.desc }}</p>
    </div>
    <div class="mt-4">
      <div class="sm:hidden">
        <label for="industries" class="sr-only">Select a tab</label>
        <select id="industries" name="industries" class="block w-full rounded-md border-gray-300 focus:border-primary focus:ring-primary">
          <option v-for="tab in industries" :key="tab.id" :selected="tab.current">{{ tab.name }}</option>
        </select>
      </div>
      <div class="hidden sm:block">
        <nav class="flex space-x-4 overflow-x-auto hide-scrollbar" aria-label="Tabs" v-draggable>
          <a
            v-for="group in industries"
            :key="group.id"
            @click.prevent="setCurrentTab(group.name)"
            class="cursor-pointer rounded-md px-3 py-2 text-sm font-medium whitespace-nowrap"
            :class="{ 'bg-primary text-white': group.current, 'bg-blue-50 text-primary': !group.current }"
            aria-current="group.current ? 'page' : undefined"
          >
            {{ group.name }}
          </a>
        </nav>
      </div>
    </div>
    <div v-if="activeIndustries" class="bg-white">
      <div class="mx-auto max-w-7xl py-8">
        <div
          class="relative isolate overflow-hidden px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
        >
          <img
            class="absolute inset-0 w-full h-full object-cover"
            src="@/assets/images/banner.svg"
          />
          <div class="relative mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">{{ activeIndustries.name }}</h2>
            <p class="mt-6 text-lg leading-8 text-gray-300">{{ activeIndustries.desc }}</p>
            <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a href="#" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Get started</a>
              <a href="#" class="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <div class="relative mt-8 lg:mt-28 h-80">
            <img class="absolute left-0 top-0 w-[30rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10" :src="imageUrl" alt="App screenshot" width="30" height="30" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useHomeStore } from '@/stores/home.module'


const stores = useHomeStore()

const data = computed(() => stores.homeData.industries)

onMounted(async () => {
  await stores.getIndustries()
})

const setCurrentTab = (tabName) => stores.setCurrentTabIndustries(tabName)
const industries = computed(() => stores.industries)
const currentTab = stores.currentTabIndustries
const activeIndustries = computed(() => stores.activeIndustries)

const apiUrl = computed(() => {
  const url = new URL(process.env.VUE_APP_API_URL);
  // Assuming you want to keep the protocol and hostname but not the path
  return `${url.protocol}//${url.hostname}${url.port ? `:${url.port}` : ''}`;
});

const imageUrl = computed(() => {
  const imageUrl = activeIndustries.value?.thumb?.data?.attributes?.url;
  return imageUrl ? `${apiUrl.value}${imageUrl}` : '';
});
</script>