<template>
  <div class="bg-white z-10 mx-auto max-w-7xl mt-44">
    <div class="text-center">
      <p class="mt-2 text-4xl leading-10 font-bold tracking-tight text-gray-900 sm:text-4xl">{{ data?.title }}</p>
      <p class="mt-6 text-base leading-7 text-gray-600">{{ data?.desc }}</p>
    </div>
  </div>
  <div
    class="flex overflow-auto py-5 hide-scrollbar pl-4 sm:pl-6 gap-6 p-8"
    v-draggable
  >
    <div
      v-for="item in testimoniData"
      :key="item.id"
      class="card flex-none px-4 py-5 sm:px-6 w-96 shadow-lg rounded-lg"
    >
      <div class="flex flex-col justify-between h-full">
        <blockquote class="text-gray-600 text-lg italic">
          <span class="text-blue-500 text-2xl leading-none align-baseline">&ldquo;</span>
          {{ item.attributes.content }}
        </blockquote>
        <div class="mt-4">
          <div class="flex">
            <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[item.attributes.rating > rating ? 'text-yellow-400' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useHomeStore } from '@/stores/home.module'
import { StarIcon } from '@heroicons/vue/20/solid';


const stores = useHomeStore()

const data = computed(() => stores.homeData.testimoni)

onMounted(async () => {
  await stores.getTestimoni()
})

const testimoniData = computed(() => stores.testimoni)
</script>

<style>
/* Tailwind CSS is utility-first, so you might not need extra CSS if you use the right utility classes */
.rating input[type="radio"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
}
</style>