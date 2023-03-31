import { defineStore } from 'pinia';
const { VITE_URL, VITE_PATH } = import.meta.env;
import axios from 'axios';
import Toast from '@/mixins/toast.js';
export default defineStore('blogsStore', {
  state: () => ({
    articles: [],
    isLoading: false,
  }),
  actions: {
    getArticles() {
      this.isLoading = true;
      axios
        .get(`${VITE_URL}/api/${VITE_PATH}/articles`)
        .then((res) => {
          this.isLoading = false;
          this.articles = res.data.articles;
        })
        .catch((err) => {
          Toast.fire({
            icon: 'error',
            title: err.response.data.message,
            width: 250,
          });
        });
    },
  },
});
