<template>
  <!-- <VueLoading v-model:active="isLoading"></VueLoading> -->
  <!-- banner start-->
  <section class="mb-5 banner" style="height: 380px">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-9 col-md-7 col-lg-5">
          <h1 class="banner-plan fs-3 fs-lg-2">訂單確認</h1>
        </div>
      </div>
    </div>
  </section>
  <!-- banner end-->
  <div class="container">
    <!-- breadcrumb start-->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/" class="green">首頁</RouterLink></li>
        <li class="breadcrumb-item"><RouterLink to="/products" class="green">線上訂餐</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">訂單確認</li>
      </ol>
    </nav>
    <!-- breadcrumb end-->
    <RouterView></RouterView>
  </div>
</template>
<script>
  import { RouterView } from 'vue-router';
  import { mapState } from 'pinia';
  import loadingStore from '@/store/loadingStore.js';
  export default {
    compontents: {
      RouterView,
    },
    computed: {
      ...mapState(loadingStore, ['isLoading']),
    },
  };
</script>
<style lang="scss" scoped>
  .banner {
    @include banner('https://images.unsplash.com/photo-1483137140003-ae073b395549?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', bottom, cover);
  }
  .banner-plan {
    @include banner-plan();
  }
</style>
