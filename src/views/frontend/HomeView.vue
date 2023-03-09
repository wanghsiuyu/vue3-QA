<template>
  <!-- banner start-->
  <div class="mt-14 mt-lg-20">
    <div class="home-banner bg-position-center bg-size-cover bg-no-repeat d-flex flex-column justify-content-center align-items-center px-6 px-lg-0">
      <div class="d-flex flex-column justify-content-center align-items-center px-6 py-10 px-lg-10" style="background: rgba(255, 255, 255, 0.6); backdrop-filter: blur(8px); border-radius: 24px">
        <img src="@/assets/image/logo1.png" alt="logo" width="160" height="160" class="home-banner-logo mb-6" />
        <h3 class="fs-3 fs-lg-1 fw-lg-bold text-center mb-4">A Plant-based Cuisine</h3>
        <h1 class="fs-5 fs-lg-3 text-center text-gray-dark mb-8">以全植物飲食為理念的餐廳， 為您呈現最健康的蔬食饗宴。</h1>
        <a href="#/products" class="btn btn-primary fs-lg-5 px-5 py-3 px-lg-6">立即訂餐</a>
      </div>
    </div>
  </div>
  <!-- banner end-->
  <!-- 七大堅持 start -->
  <div class="feature-bg bg-no-repeat py-8 py-lg-20">
    <div class="container">
      <div class="text-center">
        <h2 class="block-title position-relative fs-3 fs-lg-2 fw-lg-bold mb-4 mb-lg-6">七大堅持</h2>
        <h3 class="fs-4 fs-lg-3 text-gray-dark mb-4 mb-lg-10">我們想改變您的飲食方式，提供您健康優質的膳食，這是我們對食物的七大堅持</h3>
        <a href="#/products" class="btn btn-primary fs-lg-5 px-5 py-3 px-lg-6 mb-5 mb-lg-10">立即訂餐</a>
      </div>
      <div class="row row-cols-1 row-cols-md-2 gx-lg-10">
        <div class="col">
          <div class="py-4 p-lg-8 mb-0">
            <div class="d-flex">
              <div class="d-flex align-items-center position-relative">
                <p class="feature-number position-absolute text-primary-light fw-medium fst-italic lh-1">1</p>
                <img src="@/assets/image/feature01.svg" class="feature-icon me-4 me-lg-6" width="48" height="48" alt="feature" />
              </div>
              <div class="">
                <h4 class="fs-5 fs-lg-4 mb-4 mb-lg-6">植物性飲食</h4>
                <p class="fs-lg-5 text-gray-dark mb-0 text-justify">
                  藉由「全植物飲食」，不只能讓身體機能恢復「平衡」、「乾淨」與「營養」，還能夠預防心血管疾病、降低三高、遠離癌症，幫助減重，好處多多喔！
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="py-4 p-lg-8 mb-0">
            <div class="d-flex">
              <div class="d-flex align-items-center position-relative">
                <p class="feature-number position-absolute text-primary-light fw-medium fst-italic lh-1">2</p>
                <img src="@/assets/image/feature02.svg" class="feature-icon me-4 me-lg-6" width="48" height="48" alt="feature" />
              </div>
              <div class="">
                <h4 class="fs-5 fs-lg-4 mb-4 mb-lg-6">天然新鮮食材</h4>
                <p class="fs-lg-5 text-gray-dark mb-0 text-justify">
                  在設計菜單時，我們將您的健康放在首位。通過與全台灣在地小農合作，我們為您挑選出當季盛產的新鮮有機食材，創造出您會喜歡的美味、均衡的膳食。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="py-4 p-lg-8 mb-0">
            <div class="d-flex">
              <div class="d-flex align-items-center position-relative">
                <p class="feature-number position-absolute text-primary-light fw-medium fst-italic lh-1">3</p>
                <img src="@/assets/image/feature03.svg" class="feature-icon me-4 me-lg-6" width="48" height="48" alt="feature" />
              </div>
              <div class="">
                <h4 class="fs-5 fs-lg-4 mb-4 mb-lg-6">無食品添加物</h4>
                <p class="fs-lg-5 text-gray-dark mb-0 text-justify">除了使用新鮮、天然的食材，我們堅持不添加任何人工防腐劑或香料。我們的料理不僅美味，還能夠幫助您保持健康。</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="py-4 p-lg-8 mb-0">
            <div class="d-flex">
              <div class="d-flex align-items-center position-relative">
                <p class="feature-number position-absolute text-primary-light fw-medium fst-italic lh-1">4</p>
                <img src="@/assets/image/feature04.svg" class="feature-icon me-4 me-lg-6" width="48" height="48" alt="feature" />
              </div>
              <div class="">
                <h4 class="fs-5 fs-lg-4 mb-4 mb-lg-6">全食物飲食</h4>
                <p class="fs-lg-5 text-gray-dark mb-0 text-justify">攝取當季在地天然、完整（連皮帶籽）、多樣化，不使用任何精製糖、精製鹽等食材。</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="py-4 p-lg-8 mb-0">
            <div class="d-flex">
              <div class="d-flex align-items-center position-relative">
                <p class="feature-number position-absolute text-primary-light fw-medium fst-italic lh-1">5</p>
                <img src="@/assets/image/feature05.svg" class="feature-icon me-4 me-lg-6" width="48" height="48" alt="feature" />
              </div>
              <div class="">
                <h4 class="fs-5 fs-lg-4 mb-4 mb-lg-6">無麩質飲食</h4>
                <p class="fs-lg-5 text-gray-dark mb-0 text-justify">
                  我們嚴選不含麩質的新鮮食材，讓您除了享用美味的食物之外，還能減少對腸胃的負擔。如何不用麵粉、無蛋、無奶做出美味可口的無麩質甜點？您一定要親自來品嘗看看！
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="py-4 p-lg-8 mb-0">
            <div class="d-flex">
              <div class="d-flex align-items-center position-relative">
                <p class="feature-number position-absolute text-primary-light fw-medium fst-italic lh-1">6</p>
                <img src="@/assets/image/feature06.svg" class="feature-icon me-4 me-lg-6" width="48" height="48" alt="feature" />
              </div>
              <div class="">
                <h4 class="fs-5 fs-lg-4 mb-4 mb-lg-6">裸食料理</h4>
                <p class="fs-lg-5 text-gray-dark mb-0 text-justify">所有食物加熱超過 40.6°C 以上，就會失去了 70％ 的營養和酵素。而裸食不破壞食物的營養與原始酵素，成為許多蔬食者喜愛的飲食方式。</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="py-4 p-lg-8 mb-0">
            <div class="d-flex">
              <div class="d-flex align-items-center position-relative">
                <p class="feature-number position-absolute text-primary-light fw-medium fst-italic lh-1">7</p>
                <img src="@/assets/image/feature07.svg" class="feature-icon me-4 me-lg-6" width="48" height="48" alt="feature" />
              </div>
              <div class="">
                <h4 class="fs-5 fs-lg-4 mb-4 mb-lg-6">永續餐桌哲學</h4>
                <p class="fs-lg-5 text-gray-dark mb-0 text-justify">我們落實永續餐桌理念，這意味著我們堅持使用可持續的食材和環保的做法來經營餐廳、提供可回收的餐具和餐盒，以減少資源耗損與浪費。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 七大堅持 end -->
  <!-- 暢銷餐點 start -->
  <div class="hot-food-bg bg-size-contain bg-no-repeat py-8 py-lg-20">
    <div class="text-center">
      <h2 class="block-title position-relative fs-3 fs-lg-2 fw-lg-bold mb-5 mb-lg-10">暢銷餐點</h2>
    </div>
    <div class="container position-relative mb-5 mb-lg-10">
      <SwiperHotFood></SwiperHotFood>
    </div>
    <div class="text-center">
      <a href="#/products" class="btn btn-primary fs-lg-5 px-5 py-3 px-lg-6">更多餐點</a>
    </div>
  </div>
  <!-- 暢銷餐點 end -->
  <!-- 好評推薦 start -->
  <div class="bg-primary-light py-8 py-lg-20">
    <div class="text-center">
      <h2 class="block-title position-relative fs-3 fs-lg-2 fw-lg-bold mb-5 mb-lg-10" style="z-index: 0">好評推薦</h2>
    </div>
    <div class="container">
      <SwiperComment></SwiperComment>
    </div>
  </div>
  <!-- <div class="swiper-pagination"></div> -->
  <!-- 好評推薦 end -->
  <!-- 常見問題 start -->
  <!-- 常見問題 end -->
</template>
<style lang="scss">
  // banner start
  .home-banner {
    height: 598px;
    background-image: url(@/assets/image/banner-home-sm.png);
    @include mobile() {
      height: 642px;
      background-image: url(@/assets/image/banner-home-lg.png);
    }
  }
  .home-banner-logo {
    @include mobile() {
      width: 200px;
      height: 200px;
    }
  }
  // banner end
  // 每個區塊 title 偽元素 start
  .block-title {
    display: inline-block;
    &::after {
      content: '';
      position: absolute;
      width: 84px;
      height: 64px;
      background-size: contain;
      background-image: url(@/assets/image/title.svg);
      top: -17px;
      right: -20px;
      z-index: -1;
      @include mobile() {
        width: 102px;
        height: 77px;
        top: -24px;
        right: -29px;
      }
    }
  }
  // 每個區塊 title 偽元素 end
  // 七大堅持 start
  .feature-bg {
    @include mobile() {
      background-position: -50px -50px, 102% 109%;
      background-size: 691px 451px, 617px 520px;
      background-image: url(@/assets/image/feature-bg01.svg), url(@/assets/image/feature-bg02.svg);
    }
  }
  .feature-icon {
    @include mobile() {
      width: 64px;
      height: 64px;
    }
  }
  .feature-number {
    font-size: 155px;
    z-index: -10;
    top: -12px;
    left: 0px;
    @include mobile() {
      top: -5px;
      left: -20px;
    }
  }
  // 七大堅持 end
  // 暢銷餐點 start
  .hot-food-bg {
    background-image: url(@/assets/image/hot-food-bg-sm.svg);
    background-position: bottom right;
    @include mobile() {
      background-image: url(@/assets/image/hot-food-bg.svg);
    }
  }
  // 暢銷餐點 end
  // 好評推薦 start
  // 好評推薦 end
  // 常見問題 start
  // 常見問題 end
</style>
<script>
  // import { RouterLink } from 'vue-router';
  // import { Swiper, SwiperSlide } from 'swiper/vue';
  // import { Autoplay, Navigation, Pagination } from 'swiper';
  import SwiperComment from '@/components/frontend/SwiperComment.vue';
  import SwiperHotFood from '@/components/frontend/SwiperHotFood.vue';

  // Import Swiper styles
  // import 'swiper/css';
  // import 'swiper/css/navigation';
  // import 'swiper/css/pagination';

  // const { VITE_URL, VITE_PATH } = import.meta.env;

  export default {
    // data() {
    //   return {
    //     modules: [Navigation, Pagination, Autoplay],
    //     navigation: {
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev',
    //     },
    //     swiperOptions: {
    //       breakpoints: {
    //         1200: {
    //           slidesPerView: 4,
    //           spaceBetween: 40,
    //         },
    //         576: {
    //           slidesPerView: 3,
    //           spaceBetween: 30,
    //         },
    //         376: {
    //           slidesPerView: 2,
    //           spaceBetween: 20,
    //         },
    //         0: {
    //           slidesPerView: 1.58,
    //           spaceBetween: 16,
    //         },
    //       },
    //     },
    //     products: [],
    //     tempProduct: {},
    //   };
    // },
    components: {
      // Swiper,
      // SwiperSlide,
      // RouterLink,
      SwiperComment,
      SwiperHotFood,
    },
    // methods: {
    //   getProducts() {
    //     this.$http
    //       .get(`${VITE_URL}/api/${VITE_PATH}/products/all`)
    //       .then((res) => {
    //         this.products = res.data.products;
    //       })
    //       .catch((err) => {
    //         alert(err.response.data.message);
    //       });
    //   },
    //   getProduct(id) {
    //     this.$http
    //       .get(`${VITE_URL}/api/${VITE_PATH}/product/${id}`)
    //       .then((res) => {
    //         this.tempProduct = res.data.product;
    //       })
    //       .catch((err) => {
    //         alert(err.response.data.message);
    //       });
    //   },
    // },
    // mounted() {
    //   this.getProducts();
    // },
  };
</script>
