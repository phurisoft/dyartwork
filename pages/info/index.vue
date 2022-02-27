<template>
  <div class="content-wrapper">
    <section class="content-lines-wrapper">
      <div class="content-lines-inner">
        <div class="content-lines"></div>
      </div>
    </section>
    <section class="bauen-blog3 section-padding2" style="margin-top: 100px">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="section-title">ประชาสัมพันธ์</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8">
            <div class="row" v-for="info in infos" :key="info.id">
              <div class="col-md-12">
                <div class="item">
                  <div class="post-img">
                    <a :href="`/info/post/?id=${info.id}`">
                      <img
                        :src="
                          'https://dyartwork.com/api/v1/picture/' + info.image
                        "
                        alt=""
                        style="width: 100%; height: 350px"
                      />
                    </a>
                  </div>
                  <div class="post-cont">
                    <a href="javascript:viod(0)"
                      ><span class="tag">วันที่เขียน</span></a
                    >
                    <i>|</i> <span class="date">{{ info.created_date }}</span>
                    <h5>
                      <a :href="`/info/post/?id=${info.id}`">{{ info.topic }}</a>
                    </h5>
                    <span v-html="info.content.substring(0, 150)"> </span>
                  </div>
                </div>
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
      infos: [],
    };
  },
  created() {
    this.fetchJobs();
  },
  methods: {
    async fetchJobs() {
      let data = await this.$axios.$get(
        "https://www.dyartwork.com/api/v1/?keyName=info"
      );
      this.infos = data;
    },
  },
};
</script>
