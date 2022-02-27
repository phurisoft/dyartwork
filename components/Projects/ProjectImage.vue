<template>
  <div class="item">
    <div
      class="position-re o-hidden"
      v-for="main in mainPicture"
      :key="main.picture_id"
    >
      <img
        :src="`https://dyartwork.com/api/v1/picture/${main.image}`"
        alt=""
        style="width: 100%; height: 350px"
      />
    </div>
    <div class="con">
      <!-- <h6><a href="cotton-house.html">Interior</a></h6> -->
      <h5>
        <a
          :href="`/project/post/?id=${project_id}`"
          v-html="data.project_name"
        ></a
        ><br />
        <p>
          มูลค่างาน {{ new Intl.NumberFormat().format(data.project_price) }}
        </p>
      </h5>
      <div class="line"></div>
      <!-- <a :href="`/news/post/?id=${infoNew.id}`">{{ infoNew.topic }}</a> -->
      <a :href="`/project/post/?id=${project_id}`"
        ><i class="ti-arrow-right" rel="noreferrer"></i
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data", "project_id"],
  data() {
    return {
      mainPicture: [],
    };
  },
  async fetch() {
    this.mainPicture = await this.$axios.$get(
      "https://www.dyartwork.com/api/v1/",
      {
        params: {
          keyName: "project_image",
          path: "project",
          id: this.project_id,
        },
      }
    );
  },
};
</script>
