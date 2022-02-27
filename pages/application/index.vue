<template>
  <div class="content-wrapper">
    <!-- Lines -->
    <section class="content-lines-wrapper">
      <div class="content-lines-inner">
        <div class="content-lines"></div>
      </div>
    </section>
    <section class="pb-90" style="margin-top: 100px">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="section-title">ร่วมงานกับเรา</h2>
          </div>
          <div class="col-md-8">
            <ul class="accordion-box clearfix">
              <li
                class="accordion block"
                v-for="job_application of job_applications"
                :key="job_application.id"
              >
                <div class="acc-btn" style="color: #fff">
                
                  {{ job_application.title }}
                </div>
                <div class="acc-content">
                  <div class="content">
                    <div class="text">
                      <h6>ลักษณะงาน</h6>
                      <span
                        v-html="job_application.detail"
                        style="color: #ecf0f1"
                      ></span>
                    </div>
                    <div class="text">
                      <h6>คุณสมบัติ</h6>
                      <span
                        v-html="job_application.skill"
                        style="color: #ecf0f1"
                      ></span>
                    </div>
                    <br />
                    <div class="text">
                      <h6>สวัสดิการ</h6>
                      <span
                        v-html="job_application.other"
                        style="color: #ecf0f1"
                      ></span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
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
      job_applications: []
    }
  },
  created () {
    this.fetchJobs();
  },
  methods: {
    async fetchJobs () {
      let data = await this.$axios.$get("https://www.dyartwork.com/api/v1/?keyName=job_application");
      this.job_applications = data;
    }
  }
};
</script>