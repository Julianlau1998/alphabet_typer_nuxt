<template>
  <div class="is-half column border px-6 py-5">
    <h2 class="heading is-size-5 is-white is-italic">
      {{ article.title }}
    </h2>
    <p class="is-white is-italic">
      {{ article.previewText }}
    </p>
    <div class="mt-3 mb-1">
      <nuxt-link :to="`/learn/${article.link}`" class="is-link">
        Open Article
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

  <style>
    .border {
        border: 2px solid rgb(255, 206, 206);
        box-shadow: 2px 2px 1px rgb(255, 232, 232);
        border-radius: 30px;
        margin: 1rem;
    }
  </style>
