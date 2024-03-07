<template>
  <div class="loader-overlay">
    <span class="loading loading-spinner loading-lg"></span>
  </div>
</template>

<style>
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
</style>
