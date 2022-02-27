<template>
  <div class="content-wrapper">
    <section class="content-lines-wrapper">
      <div class="content-lines-inner">
        <div class="content-lines"></div>
      </div>
    </section>
    <section class="bauen-blog section-padding2" style="margin-top: 100px">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h3 style="color: #fff">ศูนย์ข้อมูลข่าวสาร</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6" v-for="infoNew in infoNews" :key="infoNew.id">
            <div class="item">
              <div class="position-re o-hidden">
                <a :href="`/news/post/?id=${infoNew.id}`">
                <img
                  :src="'https://dyartwork.com/api/v1/picture/' + infoNew.image"
                  alt=""
                  style="width: 100%; height: 350px"
                />
                </a>
              </div>
              <div class="con">
                <span class="category">
                  <a href="javascript:void(0)">วันที่เขียน </a>
                  {{ infoNew.created_date }}
                </span>
                <h5>
                  <a :href="`/news/post/?id=${infoNew.id}`">{{ infoNew.topic }}</a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <LayoutFooter />
  </div>
</template>

<script>
export default {
  data() {
    return {
      infoNews: [],
    };
  },
  created() {
    this.fetchJobs();
  },
  methods: {
    async fetchJobs() {
      let data = await this.$axios.$get(
        "https://www.dyartwork.com/api/v1/?keyName=news"
      );
      this.infoNews = data;
    },
  },
};
</script>
