<template>
  <VueLoading v-model:active="isLoading" />
  <!-- 購物車有商品時 -->
  <div v-if="cartsTotal.carts?.length">
    <div class="row justify-content-center mb-10">
      <div class="col-3 border-bottom border-5 border-primary">
        <div class="d-flex flex-column align-items-center">
          <div class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-1" style="width: 20px; height: 20px">1</div>
          <p class="text-primary mb-2 fw-bold">填寫資料</p>
        </div>
      </div>
      <div class="col-3 border-bottom border-5 border-gray">
        <div class="d-flex flex-column align-items-center">
          <div class="rounded-circle bg-gray text-white d-flex align-items-center justify-content-center mb-1" style="width: 20px; height: 20px">2</div>
          <p class="text-gray mb-2 fw-bold">確認付款</p>
        </div>
      </div>
      <div class="col-3 border-bottom border-5 border-gray">
        <div class="d-flex flex-column align-items-center">
          <div class="rounded-circle bg-gray text-white d-flex align-items-center justify-content-center mb-1" style="width: 20px; height: 20px">3</div>
          <p class="text-gray mb-2 fw-bold">完成訂購</p>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <section class="col-lg-5 mb-5 mb-lg-0">
        <div class="d-flex justify-content-between align-items-center">
          <a href="#/products">
            <p class="d-flex align-items-center text-dark mb-6"><span class="material-icons fs-6 me-2"> arrow_back_ios_new </span>繼續購物</p>
          </a>
          <button type="button" class="btn btn-sm btn-outline-gray" @click="confirmRemove" style="font-size: 12px">清空購物車</button>
        </div>
        <table class="table align-middle">
          <tbody>
            <tr class="border-bottom"></tr>
            <tr v-for="cart in cartsTotal.carts" :key="cart.id">
              <td class="d-flex align-items-center justify-content-between gap-5 py-4 px-0">
                <div class="d-flex align-items-center">
                  <a role="button" class="btn p-0 me-3" :class="{ disabled: loadingStatus === cart.id }" @click.prevent="removeCart(cart.id)" style="border-color: transparent">
                    <img src="@/assets/image/delete.svg" alt="delete" />
                  </a>
                  <img :src="cart.product.imageUrl" class="object-fit-cover flex-shrink-0" width="80" height="80" alt="cart.product.title" />
                </div>
                <div class="d-flex align-items-center justify-content-between w-75">
                  <div>
                    <p class="mb-1">{{ cart.product.title }}</p>
                    <p class="mb-1">NT${{ $filters.toThousands(cart.product.price) }} / {{ cart.product.unit }}</p>
                    <div style="width: 80px">
                      <select v-model="cart.qty" class="form-select form-select-sm" @change="setCartQty(cart)" :disabled="loadingStatus === cart.id">
                        <option v-for="i in 20" :key="i + 1234" :value="i">{{ i }}</option>
                      </select>
                    </div>
                  </div>
                  <p class="mb-0 text-end">NT${{ $filters.toThousands(cart.total) }}</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="d-flex align-items center gap-1">
          <span class="material-icons"> discount </span>
          <label class="form-label">結帳輸入 <span class="text-primary fw-bold">vegan888</span> 即享有八八折優惠</label>
          <button type="button" class="btn btn-outline-gray-dark btn-sm py-0 mb-2 flex-shrink-0" style="font-size: 12px" @click="copyText">複製</button>
        </div>

        <div class="input-group input-group-sm mb-3">
          <input type="text" class="form-control" placeholder="請輸入優惠碼" aria-label="請輸入優惠碼" :value="couponCode" aria-describedby="button-addon2" />
          <button class="btn btn-outline-primary" type="button" id="button-addon2" @click="addCoupon">套用</button>
        </div>
        <div class="d-flex justify-content-between">
          <p class="fs-6 mb-2">小計</p>
          <p class="fs-6 mb-2 fw-bold">NT${{ $filters.toThousands(cartsTotal.total) }}</p>
        </div>
        <div class="d-flex justify-content-between">
          <p class="fs-6 mb-2">
            運費
            <small v-if="cartsTotal.total < 500" class="text-danger">(消費滿 $500 可享免運優惠)</small>
            <small v-else class="text-danger">(恭禧您已達免運門檻！)</small>
          </p>
          <p class="fs-6 mb-2 fw-bold">NT${{ shipping }}</p>
        </div>
        <div class="d-flex justify-content-between">
          <p class="fs-6 mb-2">總計</p>
          <p class="fs-6 mb-2 fw-bold">NT${{ $filters.toThousands(cartsTotal.total + shipping) }}</p>
        </div>
        <div v-if="cartsTotal.total !== cartsTotal.final_total" class="d-flex justify-content-between mb-2">
          <p class="fs-6 mb-2 text-danger">折扣價</p>
          <p class="fs-6 mb-2 fw-bold text-danger">NT${{ $filters.toThousands(cartsTotal.final_total + shipping) }}</p>
        </div>
      </section>
      <section class="col-lg-5">
        <div class="card border-0 bg-primary-light py-4 p-lg-5">
          <div class="card-body">
            <v-form v-slot="{ errors }" @submit="onSubmit" ref="form">
              <h2 class="h5 text-center mb-6">訂單連絡資訊</h2>
              <div class="mb-4">
                <label for="name" class="form-label">姓名<span class="text-danger">*</span></label>
                <v-field id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }" placeholder="請填寫真實姓名" rules="required" v-model="user.name"></v-field>
                <error-message name="姓名" class="invalid-feedback"></error-message>
              </div>
              <div class="mb-4">
                <label for="phone" class="form-label">手機<span class="text-danger">*</span></label>
                <v-field id="phone" name="手機" type="tel" class="form-control" :class="{ 'is-invalid': errors['手機'] }" placeholder="0912345678" :rules="isPhone" v-model="user.tel"></v-field>
                <error-message name="手機" class="invalid-feedback"></error-message>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">信箱<span class="text-danger">*</span></label>
                <v-field
                  id="email"
                  name="信箱"
                  type="email"
                  class="form-control"
                  :class="{ 'is-invalid': errors['信箱'] }"
                  placeholder="name@email.com"
                  rules="email|required"
                  v-model="user.email"
                ></v-field>
                <error-message name="信箱" class="invalid-feedback"></error-message>
              </div>
              <div class="form-check mb-4">
                <input class="form-check-input" type="checkbox" value="" id="subscribe" checked />
                <label class="form-check-label" for="subscribe">願意收到好蔬房的相關訊息和優惠資訊</label>
              </div>
              <div class="mb-4">
                <label for="address" class="form-label">外送地址<span class="text-danger">*</span>（到店自取者請填寫「自取」）</label>
                <v-field
                  id="address"
                  name="外送地址"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['外送地址'] }"
                  placeholder="自取／○○區○街○巷○號"
                  rules="required"
                  v-model="user.address"
                ></v-field>
                <error-message name="外送地址" class="invalid-feedback"></error-message>
              </div>
              <div class="mb-4">
                <label for="message" class="form-label">訂單備註</label>
                <v-field as="textarea" id="message" name="訂單備註" class="form-control" rows="5" v-model="message" style="resize: none"></v-field>
              </div>
              <div class="mb-4">
                <p>註：<span class="text-danger">*</span>為必填欄位</p>
              </div>
              <button type="submit" class="btn btn-primary w-100">送出訂單</button>
            </v-form>
          </div>
        </div>
      </section>
    </div>
  </div>
  <!-- 購物車為空時 -->
  <div v-else class="text-center">
    <img src="@/assets/image/empty-cart.svg" alt="empty-cart" class="mb-6" />
    <h3 class="mb-6">您的購物車目前是空的喔</h3>
    <a href="#/products" class="btn btn-primary fs-lg-5 px-5 py-3 px-lg-6">現在就去逛逛</a>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'pinia';
  import loadingStore from '@/store/loadingStore.js';
  import cartsStore from '@/store/cartsStore.js';
  import Toast from '@/mixins/toast.js';

  const { VITE_URL, VITE_PATH } = import.meta.env;

  export default {
    data() {
      return {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
        orderId: '',
        couponCode: '',
      };
    },
    methods: {
      copyText() {
        this.couponCode = 'vegan888';
        this.getCart();
      },
      addCoupon() {
        const data = {
          code: this.couponCode,
        };
        this.$http
          .post(`${VITE_URL}/api/${VITE_PATH}/coupon`, { data })
          .then((res) => {
            Toast.fire({
              icon: 'success',
              title: res.data.message,
              width: 250,
            });
            this.getCart();
          })
          .catch((err) => {
            Toast.fire({
              icon: 'error',
              title: err.response.data.message,
              width: 250,
            });
          });
      },
      onSubmit() {
        if (this.cartsTotal.carts.length) {
          this.loading();
          const data = {
            user: this.user,
            message: this.message,
          };
          this.$http
            .post(`${VITE_URL}/api/${VITE_PATH}/order`, { data })
            .then((res) => {
              Toast.fire({
                icon: 'success',
                title: res.data.message,
                width: 250,
              });
              this.loading();
              this.getCart();
              this.$refs.form.resetForm();
              this.orderId = res.data.orderId;
              this.$router.push(`/order/checkout/${this.orderId}`);
            })
            .catch((err) => {
              Toast.fire({
                icon: 'error',
                title: err.response.data.message,
                width: 250,
              });
            });
        } else {
          Toast.fire({
            icon: 'error',
            title: '目前購物車沒有任何品項，無法送出訂單。',
            width: 250,
          });
        }
      },
      isPhone(value) {
        const phoneNumber = /^(09)[0-9]{8}$/;
        return phoneNumber.test(value) ? true : '需為正確的手機號碼格式';
      },
      ...mapActions(loadingStore, ['loading']),
      ...mapActions(cartsStore, ['addToCart', 'getCart', 'removeCart', 'confirmRemove', 'removeCartsAll', 'setCartQty']),
    },
    computed: {
      ...mapState(cartsStore, ['cartsTotal', 'cartsTotalNum', 'shipping']),
      ...mapState(loadingStore, ['isLoading', 'loadingStatus']),
    },
    mounted() {
      this.getCart();
      this.loading();
    },
  };
</script>
