import axios from 'axios';
import { defineStore } from 'pinia';
import loadingStore from '@/store/loadingStore.js';
const status = loadingStore();
const { VITE_URL, VITE_PATH } = import.meta.env;

export default defineStore('productsStore', {
  state: () => ({
    products: [],
    // product: {},
  }),
  getters: {},
  actions: {
    getProducts() {
      status.isLoading = true;
      axios
        .get(`${VITE_URL}/api/${VITE_PATH}/products/all`)
        .then((res) => {
          status.isLoading = false;
          this.products = res.data.products;
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    // getProduct() {
    //   // status.loading();
    //   const { id } = this.$route.params;
    //   axios
    //     .get(`${VITE_URL}/api/${VITE_PATH}/product/${id}`)
    //     .then((res) => {
    //       this.product = res.data.product;
    //     })
    //     .catch((err) => {
    //       alert(err.response.data.message);
    //     });
    // },
  },
});
