<template>
  <div class="flex flex-col my-4 p-10">
    <div class="mb-4">
      <p class="text-4xl leading-10 font-bold tracking-tight text-gray-900 sm:text-4xl">{{ data?.title }}</p>
    </div>
    <div class="flex flex-col md:flex-row mt-10">
      <div class="w-full mb-8 md:w-1/4 md:mb-0">
        <p class="text-xl font-semibold mb-4">Categories</p>
        <ul class="menu">
          <li 
            v-for="category in categories" 
            :key="category" 
            @click="selectCategory(category)"
            :class="{'text-primary font-bold border-l-4 border-primary': selectedCategory === category, 'hover:bg-blue-100': selectedCategory !== category}"
            class="text-base leading-6 px-6 py-2 w-full cursor-pointer"
          >
            {{ category.attributes.name }}
          </li>
        </ul>
      </div>
      <div class="w-full md:w-3/4 ml-0 md:ml-4">
        <div v-if="selectedCategory" class="bg-neutral p-6 rounded-lg">
          <p class="text-3xl leading-9 font-bold tracking-tight text-gray-700">
            {{ selectedCategory.attributes.name }}
          </p>
          <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <div v-for="item in categoryData" :key="item.id" class="card bg-base-100 relative">
              <div v-if="item.attributes.license_type.data" class="absolute top-0 right-0">
                <span class="rounded-bl-lg rounded-tr-lg px-4 py-1 text-sm bg-green-600 text-white">
                  {{ item?.attributes?.license_type?.data?.attributes?.name }}
                </span>
              </div>
              <div class="p-6">
                <img :src="apiUrl + item.attributes.logo.data.attributes.formats.thumbnail.url" class="h-20 w-20" alt="Tech logo">
              </div>
              <div class="p-4">
                <h2 class="card-title text-primary">{{ item?.attributes?.name }}</h2>
                <p>{{ item?.attributes?.tech_sub_category.data.attributes.name }}</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center mt-4">
            <div class="flex flex-col items-start mb-4 md:mb-0">
              <p class="text-sm text-gray-500">Don't see a partner you need?</p>
              <p class="text-sm text-gray-500">Request a new integration.</p>
            </div>
            <button class="btn btn-sm btn-primary">Submit Request</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useHomeStore } from '@/stores/home.module'

const stores = useHomeStore()
const categories = ref([])
const selectedCategory = ref(null)
const categoryData = ref(null)


const data = computed(() => stores.homeData.tech)

const selectCategory = (category) => {
  selectedCategory.value = category
  // Filter the tech data based on the selected category
  categoryData.value = stores.tech.filter(
    (tech) => tech.attributes.tech_category.data.id === category.id
  )
}

// Deduplicate categories and extract their data
const uniqueCategories = computed(() => {
  const unique = new Map()
  stores.tech.forEach((tech) => {
    const catData = tech.attributes.tech_category.data
    if (catData && !unique.has(catData.id)) {
      unique.set(catData.id, catData)
    }
  })
  return Array.from(unique.values())
})

onMounted(async () => {
  await stores.getTech()
  categories.value = uniqueCategories.value.sort((a, b) => {
    return a.attributes.name.localeCompare(b.attributes.name);
  });
  if (categories.value.length > 0) {
    selectCategory(categories.value[0]);
  }
})

const apiUrl = computed(() => {
  const url = new URL(process.env.VUE_APP_API_URL);
  // Assuming you want to keep the protocol and hostname but not the path
  return `${url.protocol}//${url.hostname}${url.port ? `:${url.port}` : ''}`;
});
</script>