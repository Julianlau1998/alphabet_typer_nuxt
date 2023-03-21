<template>
  <div class="mb-5">
    <a
      target="_blank"
      class="share-button"
      :href="twitterUrl"
      data-size="large"
    >
      Twitter
    </a>
    <a
      target="_blank"
      class="share-button ml-4"
      :href="mailUrl"
      data-size="large"
    >
      Mail
    </a>
    <a
      target="_blank"
      :href="facebookUrl"
      class="share-button ml-4 fb-xfbml-parse-ignore"
    >
      facebook
    </a>
  </div>
</template>

<script>
export default {
  name: 'SocialShare',
  props: {
    facebookUrl: {
      type: String,
      required: true
    },
    twitterUrl: {
      type: String,
      required: true
    },
    mailUrl: {
      type: String,
      required: true
    }
  }
}
</script>
