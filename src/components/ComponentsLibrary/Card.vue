<template>
  <div class="flex justify-center items-center min-h-screen">
    <div
      class="relative items-center justify-center"
    >
      <img
        class="absolute inset-0 w-full h-full object-cover"
        :src="backgroundImage"
        alt=""
      />
      <div class="relative p-40 text-center max-2xl">
        <h3 class="text-xl font-bold text-yellow-500">{{ title }}</h3>
        <p class="text-4xl font-bold leading-10 text-white mt-5">{{ subtitle }}</p>
        <button
          class="btn btn-sm btn-primary mt-12"
          @click="buttonClick"
        >
          {{ buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
    backgroundImage: {
      type: String,
      required: true,
    },
  },
  methods: {
    buttonClick() {
      this.$emit('button-click');
    },
  },
};
</script>
