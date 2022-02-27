<template>
  <section class="projects section-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2 class="section-title">ผลงานของเรา</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="owl-carousel owl-theme">
            <div v-for="project in listProject" :key="project.project_id">
              <div class="item">
                <div class="position-re o-hidden">
                  <img  :src="`https://dyartwork.com/api/v1/picture/${project.image}`" :alt="project.project_name" style="width:100%; height:300px;" />
                </div>
                <div class="con">
                  <h5>
                    <a href="javascript:void(0);" rel="noreferrer">{{ project.project_name }}</a><br/>
                    <p>มูลค่างาน {{ new Intl.NumberFormat().format(project.project_price) }}</p>
                  </h5>
                  <div class="line"></div>
                  <a href="javascript:void(0);" rel="noreferrer"><i class="ti-arrow-right"></i></a>
                </div>
              </div>
            </div>
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
      pictures: [],
      projects: [],
      listProject: []
    };
  },
  async fetch() {
    const response = await this.$axios.$get(
      "https://www.dyartwork.com/api/v1/?keyName=project"
    );
    this.projects = response;

    for(let project of response){
       let picture = await this.$axios.$get("https://www.dyartwork.com/api/v1/",{
         params: {
           keyName: "project_image",
           path: "project",
           id: project?.project_id
         }
       })
       this.pictures.push(picture[0])
    }

    this.projects.filter(project => this.pictures.some(picture => {
      if(project?.project_id === picture?.use_id && picture?.table_name === "project" ) {
        this.listProject.push({...project,...picture})
      }
    }));

  },
};
</script>
