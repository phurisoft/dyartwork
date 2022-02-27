<template>
  <div>
    <!-- Preloader -->
    <div id="preloader"></div>
    <!-- Progress scroll totop -->
    <div class="progress-wrap cursor-pointer">
        <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
    </div>
    <!-- Sidebar Section -->
    <a href="#" class="js-bauen-nav-toggle bauen-nav-toggle"><i></i></a>
    <LayoutMenu />
    <div id="bauen-main">
      <Nuxt />
    </div>
  </div>
</template>