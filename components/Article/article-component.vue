<template>
  <article class="is-text-wrapper">
    <h1 class="heading is-size-2 is-size-3-mobile mt-5 is-secondary is-italic mt-6">
      {{ title }}
    </h1>
    <p class="text is-left-aligned mt-6 is-white is-italic" v-html="article" />
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    article: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
  h2 {
    font-size: large;
    font-weight: 700;
  }
  h3 {
    margin-top: 3rem;
    font-size: large;
    font-weight: 700;
  }
</style>
