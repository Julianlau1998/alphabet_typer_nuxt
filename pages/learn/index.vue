<template>
  <div class=" container">
    <Articles />
    <nuxt-link to="/" class="button mt-6">
      Go Back
    </nuxt-link>

    <div class="mt-8">
      <div class="home is-text-wrapper">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Articles from '../../components/articles/Articles.vue'
import Footer from '~/components/base/Footer.vue'

export default {
  components: { Articles, Footer }
}

</script>
