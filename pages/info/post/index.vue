<template>
  <div class="content-wrapper">
    <!-- Lines -->
    <section class="content-lines-wrapper">
      <div class="content-lines-inner">
        <div class="content-lines"></div>
      </div>
    </section>
    <!-- Header Banner -->
    <section
      class="banner-header banner-img valign bg-img bg-fixed"
      data-overlay-darkgray="5"
      data-background="../assets/img/banner.jpg"
    ></section>
    <!-- Post -->
    <section class="pb-90">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <img
              :src="`https://www.dyartwork.com/api/v1/picture/${info.image}`"
              class="mb-30"
              alt=""
            />
            <h2 class="section-title2">{{ info.topic }}</h2>
            <span v-html="info.content"></span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: [],
    };
  },
  mounted() {
    this.getData(this.$route.query.id);
  },
  methods: {
    async getData(id) {
      const { data } = await this.$axios.get(
        `https://www.dyartwork.com/api/v1/?id=${id}&keyName=info`
      );
      this.info = data;
    },
  },
};
</script>