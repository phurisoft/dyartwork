<template>
  <section class="projects section-padding2" style="margin-top: 80px">
    <div class="container">
      <div class="row">
        <div class="col-md-12 animate-box" data-animate-effect="fadeInUp">
          <h2 class="section-title">ผลงานของเรา</h2>
        </div>
      </div>
      <div class="row">
        <div
          v-for="data in infoProject"
          :key="data.project_id"
          class="col-md-6 animate-box"
          data-animate-effect="fadeInUp"
        >
          <ProjectsProjectImage :data="data" :project_id="data.project_id" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      infoProject: [],
    };
  },
  async fetch() {
    this.infoProject = await this.$axios.$get(
      "https://www.dyartwork.com/api/v1/?keyName=project"
    );
  },
};
</script>
