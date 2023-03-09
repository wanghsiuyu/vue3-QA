<template>
  <swiper :modules="modules" :loop="true" :speed="800" :breakpoints="swiperOptions.breakpoints">
    <swiper-slide v-for="i in 18" :key="i + 1234" :pagination="{ el: '.swiper-pagination', clickable: true }" :navigation="navigation">
      <div class="bg-white p-6 rounded-3 mb-lg-10">
        <div class="d-flex gap-3 mb-4">
          <img src="@/assets/image/avatar01.png" alt="avatar" width="56" height="56" class="rounded-circle object-fit-cover" />
          <div>
            <p class="mb-2">Jenny Lin</p>
            <span v-for="i in 4" :key="i + 123"><img src="@/assets/image/star-yellow.svg" alt="star-yellow" width="24" height="24" /></span>
            <span><img src="@/assets/image/star-gray.svg" alt="star-gray" width="24" height="24" /></span>
          </div>
        </div>
        <p class="mb-0">真的是很認真料理食物的店家，用食材變化出不同口味的菜色，像在自己家裡那樣安心品嚐每一口。</p>
      </div>
      <div class="bg-white p-6 rounded-3">
        <div class="d-flex gap-3 mb-4">
          <img src="@/assets/image/avatar01.png" alt="avatar" width="56" height="56" class="rounded-circle object-fit-cover" />
          <div>
            <p class="mb-2">Jenny Lin</p>
            <span v-for="i in 4" :key="i + 123"><img src="@/assets/image/star-yellow.svg" alt="star-yellow" width="24" height="24" /></span>
            <span><img src="@/assets/image/star-gray.svg" alt="star-gray" width="24" height="24" /></span>
          </div>
        </div>
        <p class="mb-0">真的是很認真料理食物的店家，用食材變化出不同口味的菜色，像在自己家裡那樣安心品嚐每一口。</p>
      </div>
      <div class="swiper-pagination"></div>
    </swiper-slide>
    <div class="swiper-pagination"></div>
  </swiper>
  <div class="swiper-pagination"></div>
  <!-- <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div> -->
</template>
<style lang="scss">
  .swiper {
    max-width: 100%;
    height: 416px;
  }
  .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: #d37272;
    opacity: 1;
    background: rgba(179, 38, 38, 0.2);
  }

  .swiper-pagination-bullet-active {
    color: #860a0a;
    background: #007aff;
  }
  //   .swiper-pagination {
  //     position: static;
  //     margin-bottom: 100px;
  //   }

  //   .swiper-slide img {
  //     height: 145px;
  //     @include mobile() {
  //       height: 200px;
  //     }
  //   }
  //   .swiper-button-next:after,
  //   .swiper-button-prev:after {
  //     display: none;
  //     @include xxl() {
  //       content: '';
  //       display: block;
  //       position: absolute;
  //       width: 48px;
  //       height: 48px;
  //       background-size: contain;
  //       top: 0px;
  //     }
  //   }
  //   .swiper-button-next:after {
  //     background-image: url(@/assets/image/arrow-next.svg);
  //     right: -80px;
  //   }
  //   .swiper-button-prev:after {
  //     background-image: url(@/assets/image/arrow-prev.svg);
  //     left: -80px;
  //   }
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
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
        swiperOptions: {
          breakpoints: {
            1200: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            576: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            376: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            0: {
              slidesPerView: 1.58,
              spaceBetween: 16,
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
