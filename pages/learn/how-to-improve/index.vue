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
    this.title = 'Tips To Improve your Typing'
    this.article = `
<h2>How to Type Faster and More Accurately</h2>

<p>Are you looking for ways to improve your typing skills? Whether you're preparing for school, work, or simply want to type the alphabet faster for fun, boosting your typing speed and accuracy can save you time and reduce frustration. Here are five essential tips to help you type faster and more accurately — even if you're a beginner.</p>

<h3>1. Maintain Proper Typing Posture</h3>
<p>Good typing starts with good posture. Sit up straight, keep your feet flat on the floor, and position your screen at eye level. Your wrists should be slightly elevated and relaxed — not resting on the keyboard or desk. A healthy posture helps reduce fatigue and improve typing efficiency.</p>

<h3>2. Use the Home Row Technique</h3>
<p>The home row is the foundation of proper typing. Your fingers should rest on the middle row of keys:<br>
Left hand: A–S–D–F<br>
Right hand: J–K–L–;<br>
Your thumbs rest on the space bar. From this position, each finger is responsible for specific keys. This method increases speed and minimizes errors over time.</p>

<h3>3. Practice Touch Typing Daily</h3>
<p>Touch typing means typing without looking at your keyboard. It may feel slow at first, but consistent daily practice builds muscle memory. Use typing games like Alphabet Typer or platforms like Keybr and TypingClub to develop fluency and confidence.</p>

<h3>4. Focus on Accuracy First</h3>
<p>Don’t worry about typing fast right away. It's better to type correctly than quickly. Mistakes slow you down more than typing carefully. Aim for 95% accuracy, and speed will naturally increase as you build rhythm and confidence.</p>

<h3>5. Be Consistent and Track Progress</h3>
<p>Set aside 5–10 minutes each day to practice. Use a timer or play typing speed games that measure your results. You’ll notice improvement in just a few weeks with regular effort.</p>

<h3>Final Thoughts</h3>
<p>Typing faster and more accurately is a skill that pays off every day — in school, work, and online communication. Whether you're racing through emails or trying to type the alphabet in record time, these simple techniques can help you become a keyboard pro.</p>
`
  }
}
</script>
