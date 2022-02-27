<template>
  <div class="content-wrapper">
    <!-- Lines -->
    <section class="content-lines-wrapper">
      <div class="content-lines-inner">
        <div class="content-lines"></div>
      </div>
    </section>
    <!-- Header Banner -->
    <section>&nbsp;</section>
    <!-- Post -->
    <section class="pb-90">
      <div class="container">
        <div class="row">
          <div
            class="col-md-12"
            v-for="main in mainPicture"
            :key="main.picture_id"
          >
            <img
              :src="`https://dyartwork.com/api/v1/picture/${main.image}`"
              class="mb-30"
              alt=""
              style="width: 100%; height: 400px"
            />
            <h2 class="section-title2">{{ infoProject.project_name }}</h2>
            <h6>รายละเอียดงาน</h6>
            <p
              v-if="infoProject.project_detail"
              v-html="infoProject.project_detail"
            ></p>
            <p v-else>-</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <h6>รูปภาพงาน</h6>
          </div>
        </div>
        <div class="row">
          <div
            class="col-md-6"
            v-for="detail in detailPicture"
            :key="detail.picture_id"
          >
            <p v-if="detail">
              <img
                :src="`https://dyartwork.com/api/v1/picture/${detail.image}`"
                class="mb-30"
                alt=""
              />
            </p>

            <p v-else>-</p>
          </div>
        </div>
      </div>
    </section>
    <LayoutFooter />
  </div>
</template>


<script>
export default {
  props: ["id"],
  data() {
    return {
      infoProject: [],
      mainPicture: [],
      detailPicture: [],
    };
  },
  created() {
    this.getData(this.$route.query.id);
    this.getMainPicture(this.$route.query.id);
    this.getDetailPicture(this.$route.query.id);
  },
  methods: {
    async getData(id) {
      const { data } = await this.$axios.get(
        `https://www.dyartwork.com/api/v1/?id=${id}&keyName=project`
      );
      this.infoProject = data;
    },
    async getMainPicture(id) {
      const { data } = await this.$axios.get(
        `https://www.dyartwork.com/api/v1/?id=${id}&keyName=project_image&path=project`
      );
      this.mainPicture = data;
    },
    async getDetailPicture(id) {
      const { data } = await this.$axios.get(
        `https://www.dyartwork.com/api/v1/?id=${id}&keyName=project_image&path=project_detail`
      );
      this.detailPicture = data;
    },
  },
};
</script>
