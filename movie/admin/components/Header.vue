<template>
  <div>
    <!-- header -->
    <header class="header">
      <div class="header__content">
        <!-- header logo -->
        <NuxtLink to="/" class="header__logo">
          <img src="img/logo.svg" alt="" />
        </NuxtLink>
        <!-- end header logo -->

        <!-- header menu btn -->
        <button class="header__btn" type="button">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <!-- end header menu btn -->
      </div>
    </header>
    <!-- end header -->
  </div>
</template>

<script>
export default {
  name: 'HeaderPage',
}
</script>
