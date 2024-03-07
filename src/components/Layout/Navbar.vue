<template>
  <header :class="{'bg-transparent': !isSticky, 'bg-white shadow-md': isSticky, 'sticky top-0 z-50': true && !mobileMenuOpen}">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a 
          href="#"
          class="-m-1.5 p-1.5"
        >
          <span class="sr-only"> Divistant </span>
          <img class="h-8 w-auto"
            src="@/assets/images/divistant_logo.png"
            alt="Divistant Logo"
          />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only"> Open </span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <!-- POPOVER FOR SOLUTIONS TAB -->
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <Popover>
          <PopoverButton class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
            Solutions
            <ChevronDownIcon
              class="h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
          </PopoverButton>
          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 -translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-1"
          >
            <PopoverPanel class="absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5">
              <div class="flex">
                <div class="w-1/10 overflow-auto max-h-[34rem]">
                  <ul class="menu">
                    <li 
                      v-for="category in categories" 
                      :key="category.id" 
                      @click="selectCategory(category)"
                      :class="{
                        'text-primary bg-blue-50': selectedCategory?.name === category?.name,
                        'hover:bg-blue-100': selectedCategory?.name !== category?.name,
                        'relative': true
                      }"
                      class="text-base leading-6 p-2 w-full cursor-pointer"
                    >
                      <div
                        class="font-bold hover:bg-blue-100"
                        :class="{
                          'hover:bg-blue-50': selectedCategory?.name === category?.name
                        }"
                      >
                        {{ category.name }}
                      </div>
                      <div class="text-sm hover:bg-blue-100"
                        :class="{
                          'hover:bg-blue-50': selectedCategory?.name === category?.name
                        }"
                      >
                        {{ category.content }}
                      </div>
                      <div v-if="selectedCategory?.name === category?.name" class="cut-effect"></div>
                    </li>
                  </ul>
                </div>
                <div class="w-3/4 flex flex-col">
                  <div class="flex-1 overflow-auto p-2">
                    <div v-if="selectedCategory">
                      <h2 class="text-2xl font-bold">{{ selectedCategory.name }}</h2>
                      <p>{{ selectedCategory.content }}</p>
                    </div>
                    <div v-else class="p-4 text-gray-500">
                      Please select a category.
                    </div>
                  </div>
                  <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 sticky bottom-0">
                    <a v-for="item in callsToAction" :key="item.name" :href="item.href" class="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
                      <component :is="item.icon" class="h-5 w-5 flex-none" aria-hidden="true"></component>
                      {{ item.name }}
                    </a>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
        <a
          href="#"
          class="text-sm font-semibold leading-6 text-gray-900"
        >
          Features
        </a>
        <a
          href="#"
          class="text-sm font-semibold leading-6 text-gray-900"
        >
          Marketplace
        </a>
        <a
          href="#"
          class="text-sm font-semibold leading-6 text-gray-900"
        >
          Company
        </a>
      </PopoverGroup>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <button class="btn btn-sm btn-primary">
          Sign In
          <ArrowRightIcon class="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </nav>
    <!-- FOR MOBILE VIEW -->
    <Dialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a
            href="#"
            class="-m-1.5 p-1.5"
          >
            <span class="sr-only"> Divistant </span>
            <img
              class="h-8 w-auto"
              src="@/assets/images/divistant_logo.png"
              alt="Divistant Logo"
            />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <Disclosure
                as="div"
                class="-mx-3"
                v-slot="{open}"
              >
                <DisclosureButton class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Product
                  <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']" aria-hidden="true" />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <DisclosureButton
                    v-for="item in [...categories, ...callsToAction]"
                    :key="item.name"
                    as="a"
                    :href="item.href"
                    class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {{ item.name }}
                  </DisclosureButton>
                </DisclosurePanel>
              </Disclosure>
              <a 
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Features
              </a>
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Marketplace
              </a>
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Company
              </a>
            </div>
            <div class="py-6">
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue'
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  ArrowRightIcon,
  CalendarDaysIcon,
} from '@heroicons/vue/24/outline'
import {ChevronDownIcon, PhoneIcon, PlayCircleIcon, RectangleGroupIcon} from '@heroicons/vue/20/solid'

const isSticky = ref(false);

// This function will be called on scroll events
const handleScroll = () => {
  // Adjust this value based on when you want the navbar to change its style
  const top = window.scrollY;
  isSticky.value = top > 0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const products = [
  {
    name: 'Analytics',
    description: 'Get a better understanding where your traffic is coming from',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers with our engagement tool',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon},
  {
    name: 'Integrations',
    description: 'Your customers’ data will be safe and secure',
    href: '#',
    icon: SquaresPlusIcon,
  },
]
const callsToAction = [
  {name: 'Request Appointment', href: '#', icon: CalendarDaysIcon},
  {name: 'Request Appointment', href: '#', icon: CalendarDaysIcon},
]

const categories = [
  {
    id: 'agile-secure-delivery',
    name: 'Agile Secure Delivery',
    content: 'We integrate security into the CI/CD pipeline, ensuring that every code.',
    href: '#',
  },
  {
    id: 'quality-assured-delivery',
    name: 'Quality Assured Delivery',
    content: 'We integrate security into the CI/CD pipeline, ensuring that every code.'
  },
  {
    id: 'secure-reliable-operations',
    name: 'Secure & Reliable Operations',
    content: 'We integrate security into the CI/CD pipeline, ensuring that every code.'
  },
  {
    id: 'data-driven-transformation',
    name: 'Data-Driven Transformation',
    content: 'We integrate security into the CI/CD pipeline, ensuring that every code.'
  },
  {
    id: 'cloud-hybrid-infrastructure',
    name: 'Cloud & Hybrid Infrastructure',
    content: 'We integrate security into the CI/CD pipeline, ensuring that every code.'
  },
  {
    id: 'next-gen-solutions',
    name: 'Next-Gen Solutions',
    content: 'We integrate security into the CI/CD pipeline, ensuring that every code.'
  },
  {
    id: 'business-applications',
    name: 'Business Applications',
    content: 'We integrate security into the CI/CD pipeline, ensuring that every code.'
  }
]

const selectedCategory = ref(null)

const selectCategory = (category) => {
  selectedCategory.value = category
}

const mobileMenuOpen = ref(false)
</script>

<style>
.cut-effect {
  @apply absolute bg-white top-0 right-0 w-3 h-full;
  clip-path: polygon(100% 0, 30% 50%, 100% 100%);
}
</style>