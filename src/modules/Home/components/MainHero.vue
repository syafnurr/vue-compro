<template>
  <!-- <div
    class="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <img
      :src="backgroundImage"
      class="absolute inset-0 w-full h-full object-cover"
      alt="Background image"
    />
    <div class="relative isolate overflow-hidden pt-14">
      <div class="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
            It's time to move faster! <a href="#" class="font-semibold text-white"><span class="absolute inset-0" aria-hidden="true" />Read more <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">{{ data.title }}</h1>
          <p class="mt-6 text-lg leading-8 text-gray-300">We're helping business of <span class="text-amber-400">every size</span> — from new startups to public companies. IT Modernization Approach and Practices to support your Digital Transformation</p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <button class="btn btn-sm btn-primary">Talk with Us</button>
            <a href="#" class="text-sm font-semibold leading-6 text-white">Request Estimate <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div class="bg-white">
    <div class="relative isolate">
      <img
      :src="backgroundImage"
      class="absolute inset-0 w-full h-full object-cover"
      alt="Background image"
    />
      <div class="overflow-hidden">
        <div class="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
          <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div class="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <div class="hidden sm:mb-5 sm:flex">
                <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  It’s time to move faster! <a href="#" class="whitespace-nowrap font-semibold text-primary"><span class="absolute inset-0" aria-hidden="true" />Read more <span aria-hidden="true">&rarr;</span></a>
                </div>
              </div>
              <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{{ data.title }}</h1>
              <p class="mt-6 text-lg leading-8 text-gray-900">We're helping business of <span class="text-amber-400">every size</span> — from new startups to public companies. IT Modernization Approach and Practices to support your Digital Transformation</p>
              <div class="mt-10 flex items-center gap-x-6">
                <button class="btn btn-sm btn-primary">Talk with Us</button>
                <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Request Estimate <span aria-hidden="true">→</span></a>
              </div>
            </div>
            <div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              <div class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                <div class="relative">
                  <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
              <div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div class="relative">
                  <img src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div class="relative">
                  <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
              <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                <div class="relative">
                  <img src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div class="relative">
                  <img src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, computed } from 'vue'
import { ChevronRightIcon, CheckCircleIcon } from '@heroicons/vue/20/solid'
import { useHomeStore } from '@/stores/home.module'

const backgroundImage = ref(require('@/assets/images/hero_background.png'))

const stores = useHomeStore()

const data = computed(() => stores.homeData.hero)
</script>

<style>
/* Ensure that the image doesn't exceed the viewport on large screens */
img {
  object-fit: contain;
}
</style>