<template>
  <div class="bg-neutral py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <div>
          <h2 class="text-base font-semibold leading-7 text-indigo-600">{{ data?.subTitle }}</h2>
          <p class="mt-2 text-4xl leading-10 font-bold tracking-tight text-gray-900 sm:text-4xl">{{ data?.title }}</p>
          <p class="mt-6 text-base leading-7 text-gray-600">{{ data?.desc }}</p>
        </div>
        <dl class="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
          <div v-for="data in features" :key="data.id" class="relative pl-9">
            <dt class="font-semibold text-gray-900">
              <CheckIcon class="absolute left-0 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
              {{ data.attributes.title }}
            </dt>
            <dd class="mt-2">{{ data.attributes.desc }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { CheckIcon } from '@heroicons/vue/20/solid'
import { useHomeStore } from '@/stores/home.module'


const stores = useHomeStore()

const data = computed(() => stores.homeData.chooseUs)
const features = computed(() => stores.chooseUs)

onMounted(async () => {
  await stores.getChooseUs()
})
</script>