<template>
  <div class="container mt-20">
    <div class="text-end m-5">
      <button type="button" class="btn btn-primary" @click="openModal('create')">新增貼文</button>
    </div>
    <div class="row">
      <div class="col-12">
        <!-- 優惠券列表 start -->
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">文章標題</th>
              <th scope="col">作者</th>
              <th scope="col">描述</th>
              <th scope="col">建立時間</th>
              <th scope="col">是否公開</th>
              <th scope="col">操作</th>
            </tr>
          </thead>
          <tbody>
            <!-- <tr v-for="coupon in coupons" :key="coupon.id">
              <td>{{ coupon.title }}</td>
              <td>{{ coupon.code }}</td>
              <td>{{ coupon.percent }}%</td>
              <td>{{ new Date(coupon.due_date * 1000).toLocaleDateString() }}</td>
              <td>
                <span v-if="coupon.is_enabled" class="text-success">啟用</span>
                <span v-else class="text-danger">未啟用</span>
              </td>
              <td>
                <button class="btn btn-sm btn-outline-primary me-1" @click="openModal('edit', coupon)">編輯</button>
                <button class="btn btn-sm btn-outline-danger" @click="openModal('delete', coupon)">刪除</button>
              </td>
            </tr> -->
          </tbody>
        </table>
        <!-- 優惠券列表 end -->
      </div>
    </div>
  </div>
  <!-- 新增/編輯 Modal -->
  <ArticleModal ref="modal" :article="tempArticle"></ArticleModal>
  <!-- 刪除 Modal -->
  <!-- <DeleteCouponModal ref="deleteModal" :coupon="tempCoupon" @deleteCoupon="deleteCoupon"></DeleteCouponModal> -->
  <!-- 優惠券分頁 -->
  <!-- <AdminPagination :pages="page" @change-page="getCoupons"></AdminPagination> -->
</template>
<script>
  import ArticleModal from '@/components/admin/ArticleModal.vue';
  export default {
    data() {
      return {
        articles: {},
        tempArticle: {
          tag: [],
        },
      };
    },
    components: { ArticleModal },
    methods: {
      openModal() {
        this.tempArticle = {
          tag: [],
          create_at: new Date().getTime() / 1000,
        };
        this.$refs.modal.articleModal.show();
      },
      getArticles() {},
    },
  };
</script>
