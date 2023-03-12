import { defineStore } from 'pinia';
import axios from 'axios';
const { VITE_URL, VITE_PATH } = import.meta.env;

export default defineStore('productsStore', {
  state: () => ({
    products: [],
  }),
  getters: {},
  actions: {
    getProducts() {
      axios
        .get(`${VITE_URL}/api/${VITE_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products;
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    // getProduct() {
    //   // this.loading();
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
