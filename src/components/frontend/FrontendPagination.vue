<template>
  <!-- <div>
    數據列表
    <ul>
      <li v-for="item in displayedItems" :key="item.id">{{ item }}</li>
    </ul>

    分頁按鈕和切換按鈕
    <div>
      <button v-if="currentPage > 1" @click="currentPage -= 1">上一頁</button>
      <button v-for="page in totalPages" :key="page" @click="currentPage = page">{{ page }}</button>
      <button v-if="currentPage < totalPages" @click="currentPage += 1">下一頁</button>
    </div>
  </div> -->
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum sunt autem natus qui, aliquid aspernatur quia deleniti, perspiciatis dolore, voluptatum obcaecati molestiae possimus nostrum porro
  quasi quod amet sed neque? Commodi saepe vel aspernatur dolorem dolor! Debitis maxime eligendi quam ducimus, sequi numquam sint voluptatibus, nisi quod, laborum doloremque unde harum? Quasi quis
  nulla quia enim amet dolorum numquam voluptate culpa voluptatibus adipisci fugit, quod quos sit perspiciatis aliquam dicta hic, fuga debitis corrupti. Porro repudiandae impedit, reprehenderit
  suscipit iusto officia sunt adipisci? Ipsam numquam sunt perspiciatis dolore, dicta soluta quasi nemo voluptatibus. Sint voluptatem modi error repellat. Qui, perferendis.
</template>

<!-- <script>
  export default {
    // name: 'Pagination',
    props: {
      data: {
        type: Array,
        required: true,
      },
      itemsPerPage: {
        type: Number,
        default: 10,
      },
    },
    data() {
      return {
        currentPage: 1,
      };
    },
    computed: {
      // 計算總頁數
      totalPages() {
        return Math.ceil(this.data.length / this.itemsPerPage);
      },
      // 根據當前頁面和每頁顯示數量，計算需要顯示的數據
      displayedItems() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        return this.data.slice(startIndex, startIndex + this.itemsPerPage);
      },
    },
  };
</script> -->
