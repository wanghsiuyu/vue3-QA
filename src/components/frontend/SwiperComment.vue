<template>
  <swiper
    :modules="modules"
    :loop="true"
    :speed="800"
    :breakpoints="swiperOptions.breakpoints"
    :pagination="{ el: '.swiper-pagination', clickable: true }"
    :autoplay="{ delay: 2500, disableOnInteraction: false }"
  >
    <swiper-slide v-for="i in 5" :key="i + 1234">
      <div class="bg-white p-6 rounded-3 mb-3 mb-md-7 mb-lg-10">
        <div class="d-flex gap-3 mb-4">
          <img src="@/assets/image/avatar01.png" alt="avatar" width="56" height="56" class="rounded-circle object-fit-cover" />
          <div>
            <p class="mb-2">Jenny Lin</p>
            <span v-for="i in 4" :key="i + 123"><img src="@/assets/image/star-yellow.svg" alt="star-yellow" width="24" height="24" /></span>
            <span><img src="@/assets/image/star-gray.svg" alt="star-gray" width="24" height="24" /></span>
          </div>
        </div>
        <p class="mb-0 line-clamp">
          真的是很認真料理食物的店家，用食材變化出不同口味的菜色，像在自己家裡那樣安心品嚐每一口。真的是很認真料理食物的店家，用食材變化出不同口味的菜色，像在自己家裡那樣安心品嚐每一口。
        </p>
      </div>
      <div class="bg-white p-6 mb-0">
        <div class="d-flex gap-3 mb-4">
          <img src="@/assets/image/avatar01.png" alt="avatar" width="56" height="56" class="rounded-circle object-fit-cover" />
          <div>
            <p class="mb-2">Jenny Lin</p>
            <span v-for="i in 4" :key="i + 123"><img src="@/assets/image/star-yellow.svg" alt="star-yellow" width="24" height="24" /></span>
            <span><img src="@/assets/image/star-gray.svg" alt="star-gray" width="24" height="24" /></span>
          </div>
        </div>
        <p class="mb-0 line-clamp">
          真的是很認真料理食物的店家，用食材變化出不同口味的菜色，像在自己家裡那樣安心品嚐每一口。真的是很認真料理食物的店家，用食材變化出不同口味的菜色，像在自己家裡那樣安心品嚐每一口。
        </p>
      </div>
    </swiper-slide>
    <div class="swiper-pagination position-static mt-10"></div>
  </swiper>
</template>
<style lang="scss">
  .line-clamp {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /*調整行數*/
    overflow: hidden;
  }
  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    text-align: center;
    opacity: 1;
    background: #d9d9d9;
    margin: 0 8px !important;
  }
  .swiper-pagination-bullet-active {
    background: #4f8147;
  }
</style>
<script>
  //   import { RouterLink } from 'vue-router';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay, Navigation, Pagination } from 'swiper';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  export default {
    data() {
      return {
        modules: [Navigation, Pagination, Autoplay],
        swiperOptions: {
          breakpoints: {
            1200: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            576: {
              slidesPerView: 1.2,
              spaceBetween: 16,
            },
            376: {
              slidesPerView: 1,
              spaceBetween: 12,
            },
            0: {
              slidesPerView: 1,
              spaceBetween: 12,
            },
          },
        },
      };
    },
    components: {
      Swiper,
      SwiperSlide,
      //   RouterLink,
    },
  };
</script>
