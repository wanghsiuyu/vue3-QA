<template>
  <VueLoading v-model:active="isLoading" />
  <div class="container mt-20">
    <div class="py-4 py-lg-8">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb mb-5">
          <li class="breadcrumb-item"><RouterLink to="/">首頁</RouterLink></li>
          <li class="breadcrumb-item active" aria-current="page">專欄文章</li>
        </ol>
      </nav>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-8 g-lg-10">
        <div v-for="article in articles" :key="article.id" class="col">
          <div class="card rounded-0 border-0">
            <img :src="article.image" class="w-100 object-fit-cover rounded-0" :alt="article.title" height="350" />
            <div class="card-body">
              <div class="card-text d-flex justify-content-between text-gray-dark">
                <p class="mb-2">{{ $filters.date(article.create_at) }}</p>
                <p class="mb-2">
                  by <span class="text-dark">{{ article.author }}</span>
                </p>
              </div>

              <h5 class="card-title text-truncate">{{ article.title }}</h5>
              <p class="card-text line-clamp">{{ article.description }}</p>
              <RouterLink :to="`/blogs/${article.id}`" class="stretched-link">閱讀更多 ></RouterLink>
            </div>
          </div>
        </div>
      </div>
      <!-- <RouterView></RouterView> -->
    </div>
  </div>

  <!-- <FrontendPagination></FrontendPagination> -->
</template>
<script>
  import { RouterLink } from 'vue-router';
  import { mapState, mapActions } from 'pinia';
  import blogsStore from '@/store/blogsStore.js';
  //   import FrontendPagination from '@/components/frontend/FrontendPagination.vue';
  export default {
    data() {
      return {
        // articles: [],
        // isLoading: false,
      };
    },
    components: {
      RouterLink,
      //   FrontendPagination,
    },
    methods: {
      ...mapActions(blogsStore, ['getArticles']),
    },
    computed: {
      ...mapState(blogsStore, ['articles', 'isLoading']),
    },
    mounted() {
      this.getArticles();
    },
  };
</script>

<style lang="scss">
  .line-clamp {
    @include line-clamp(2);
  }
</style>
