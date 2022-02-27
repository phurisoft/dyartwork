<template>
  <aside id="bauen-aside">
    <!-- Logo -->
    <div class="bauen-logo">
      <a href="/" rel="noreferrer">
        <img src="assets/img/dy/logo/logo.webp" class="logo-img" alt="บริษัท ดี.วาย.งานศิลป์ คอนสตรัคชั่น จำกัด | D.Y.NGANSILP CONSTRUCTION COMPANY LIMITED" />
        <span style="padding-top: 10px;">D.Y.NGANSILP CONSTRUCTION COMPANY LIMITED</span>
      </a>
    </div>
    <!-- Menu -->
    <nav class="bauen-main-menu">
      <ul>
        <li v-bind:class="path === '/' ? 'active' : '' "><a :href="$router.resolve({name: 'index'}).href">หน้าหลัก</a></li>
        <li v-bind:class="path === '/about' ? 'active' : '' "><a :href="$router.resolve({name: 'about'}).href">เกี่ยวกับเรา</a></li>
        <li v-bind:class="path === '/service' ? 'active' : '' "><a :href="$router.resolve({name: 'service'}).href">พันธกิจและวิสัยทัศน์</a></li>
        <li v-bind:class="path === '/project' ? 'active' : '' "><a :href="$router.resolve({name: 'project'}).href">ผลงานของเรา</a></li>
        <li v-bind:class="path === '/awards' ? 'active' : '' "><a :href="$router.resolve({name: 'awards'}).href">รางวัลและประกาศนียบัตร</a></li>
        <li v-bind:class="path === '/info' ? 'active' : '' "><a :href="$router.resolve({name: 'info'}).href">สื่อประชาสัมพันธ์</a></li>
        <li v-bind:class="path === '/news' ? 'active' : '' "><a :href="$router.resolve({name: 'news'}).href">ศูนย์ข้อมูลข่าวสาร</a></li>
        <li v-bind:class="path === '/application' ? 'active' : '' "><a :href="$router.resolve({name: 'application'}).href">ร่วมงานกับเรา</a></li>
        <li v-bind:class="path === '/contact' ? 'active' : '' "><a :href="$router.resolve({name: 'contact'}).href">ติดต่อเรา</a></li>
      </ul>
    </nav>
    <!-- Sidebar Footer -->
    <div class="bauen-footer">
      <ul>
        <li>
          <a rel="noreferrer" href="https://www.facebook.com/%E0%B8%94%E0%B8%B5%E0%B8%A7%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%A8%E0%B8%B4%E0%B8%A5%E0%B8%9B%E0%B9%8C-538365826296351"><i class="ti-facebook"></i></a>
        </li>
      </ul>
    </div>
  </aside>
</template>


<script>
export default {
  data () {
    return {
      path: ""
    }
  },
  mounted() {
     this.path = this.$route.fullPath
  },
 
};
</script>