<template>
  <div class="">
    <ArticleComponent :title="title" :article="article" />
    <nuxt-link to="/learn" class="button mt-6">
      Go Back
    </nuxt-link>
    <div class="mt-8">
      <h1 class="heading is-size-2 is-size-3-mobile mt-5 is-secondary is-italic mb-6">
        More Articles
      </h1>
      <div class="container is-widescreen">
        <Articles :hide-title="true" />
      </div>
      <div class="home is-text-wrapper">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import ArticleComponent from '../../../components/Article/article-component.vue'
import Articles from '~/components/articles/Articles.vue'
import Footer from '~/components/base/Footer.vue'

export default {
  components: { ArticleComponent, Articles, Footer },
  data () {
    return {
      title: '',
      article: ''
    }
  },
  created () {
    this.title = 'Leaderboard'
    this.article = `
<h2>Global Leaderboard</h2>

<p>Think you're fast at typing? Prove it by joining our global leaderboard. Every time you complete the alphabet typing challenge, your best time is recorded and compared with players worldwide.</p>

<p>Set a personal best, rise through the ranks, and see how you stack up against other top typists. The more you practice, the higher you can climb. Ready to become the fastest?</p>
`
  }
}
</script>
