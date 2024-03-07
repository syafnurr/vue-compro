<template>
  <MainHero />
  <OurCompany />
  <ChooseUs />
  <OurSolutions />
  <OurServices />
  <TechPartner />
  <Industries />
  <Portofolio />
  <Testimoni />
  <Card
    title="Ready to get started?"
    subtitle="Loving what you’re seeing so far about Digital Transformation"
    buttonText="Talk with Us Now"
    :backgroundImage="backgroundImage"
  />
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useHomeStore } from '@/stores/home.module';
import MainHero from '../components/MainHero';
import OurCompany from '../components/OurCompany';
import ChooseUs from '../components/ChooseUs';
import OurSolutions from '../components/OurSolutions';
import OurServices from '../components/OurServices';
import TechPartner from '../components/TechandPartners';
import Industries from '../components/Industries';
import Portofolio from '../components/Portofolio';
import Testimoni from '../components/Testimoni';
import { useLoaderStore } from '@/stores/loader.module';

const homeStore = useHomeStore();
const loaderStore = useLoaderStore();

const data = computed(() => homeStore.homeData);

const backgroundImage = ref(require('@/assets/images/bg_full.png'))

onMounted(async () => {
  loaderStore.showLoader(); // Show loader before API call
  await homeStore.getData();
  loaderStore.hideLoader();
});

</script>