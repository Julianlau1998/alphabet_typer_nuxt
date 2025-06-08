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
    this.title = 'How To Play Type The Alphabet'
    this.article = `
<h3>Getting Started</h3>
<p>To begin, simply press the 'A' key on your keyboard. This starts the game and begins the timer. From there, type each letter of the alphabet in order as quickly and accurately as you can — from A all the way to Z.</p>

<h3>Restarting the Game</h3>
<p>Want to try again? Just press the 'Enter' key to restart the game instantly. There’s no limit to how many times you can play — so keep practicing and see how fast you can go!</p>

<h3>Track Your Performance</h3>
<p>Once you've typed the entire alphabet, your time will be displayed immediately. The faster you finish, the better your score. Try to beat your personal best by practicing regularly, and aim for a flawless run with no mistakes.</p>

<h3>Challenge Your Friends</h3>
<p>One of the best parts of "Type the Alphabet" is competing with others. Share your results on social media and invite your friends to beat your time. It’s a great way to stay motivated and have fun together.</p>

<h3></h3>
<p>"Type the Alphabet" is a simple, intuitive game that helps improve your typing speed while having fun. Whether you're a beginner or an experienced typist, it's a great way to test your reflexes and challenge your friends.</p>
`
  }
}
</script>
