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
    this.title = 'Touch Typing'
    this.article = `
<h2>Mastering Touch Typing: A Complete Guide</h2>

<p>Touch typing is the skill of using all ten fingers to type without looking at the keyboard. It relies on muscle memory, allowing you to locate and press keys accurately and effortlessly. The foundation of this technique is the home row (A–S–D–F–G–H–J–K–L), which serves as the starting point for finger placement.</p>

<h3>Building Muscle Memory</h3>
<p>To improve touch typing, start by memorizing the layout of the keyboard. Practice positioning your fingers on the home row and reaching for surrounding keys without glancing down. Expand gradually to the top and bottom rows as your confidence grows.</p>

<h3>Practice Regularly</h3>
<p>Daily practice is essential. Begin with simple drills focusing on individual keys, then move on to full words, sentences, and paragraphs. Use typing websites or software that offer structured lessons for various skill levels to guide your progress.</p>

<h3>Set Goals and Track Progress</h3>
<p>Set realistic goals for typing speed and accuracy. Regularly test your skills using online typing tests, and adjust your targets as you improve. Monitoring progress helps maintain motivation and encourages consistent improvement.</p>

<h3>Be Patient and Stay Consistent</h3>
<p>It’s normal to see a temporary drop in speed or accuracy when learning touch typing. Stay patient — with consistent practice, your muscle memory will develop, and your performance will steadily improve.</p>

<h3>Apply Touch Typing Daily</h3>
<p>Reinforce your skills by applying touch typing in real-life tasks like writing emails, working on documents, or chatting online. The more you use it, the more automatic and efficient your typing becomes.</p>

<h3>Ready to Put Your Skills to the Test?</h3>
<p>Once you're comfortable, test your abilities in fun challenges like Type the Alphabet. It's a great way to sharpen your speed, accuracy, and have fun while improving.</p>

<p>With dedication and practice, touch typing becomes second nature — helping you type faster, work more efficiently, and communicate with ease.</p>
`
  }
}
</script>
