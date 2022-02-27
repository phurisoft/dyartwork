<template>
  <section class="about section-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mb-30 animate-box" data-animate-effect="fadeInUp">
          <h3 style="color: #fff">หนังสือรับรองผลงาน</h3>
        </div>
      </div>
      <div class="row">
        <div
          v-for="index in papers"
          :key="index"
          class="col-md-4 mt-4 animate-box"
          data-animate-effect="fadeInUp"
        >
          <div class="about-img">
            <div>
              <a :href="getImage(index)" class="img-zoom">
                <img
                  class="mx-auto d-block"
                  :src="getImage(index)"
                  style="height: 400px; width: 300px"
                  alt="หนังสือรับรอง"
                />
              </a>
            </div>
            <div class="about-img-2 about-buro">หนังสือรับรอง</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      papers: 15,
    };
  },
  methods: {
    getImage: (index) => "assets/img/dy/paper/paper" + index + ".jpg",
  },
};
</script>
