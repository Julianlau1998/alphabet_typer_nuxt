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
    this.title = 'Improve typing speed'
    this.article = `
  <h2>Tips to Improve Your Typing Speed</h2>
  
  <p>Want to type faster and more accurately? Whether you're learning to type from scratch or just looking to improve your speed, small changes can make a big difference. Follow these practical tips to build better habits and boost your typing performance.</p>
  
  <h3>1. Maintain Proper Typing Posture</h3>
  <p>Your posture plays a key role in typing speed and accuracy. Sit with your back straight, feet flat on the floor, and eyes level with the screen. Keep your wrists slightly elevated and relaxed above the keyboard — not resting on the desk.</p>
  
  <h3>2. Use the Home Row Technique</h3>
  <p>The home row is the foundation of efficient typing. Place your fingers on the middle row of the keyboard: A–S–D–F for the left hand and J–K–L–; for the right hand. This setup helps you reach other keys quickly and consistently with the correct fingers.</p>
  
  <h3>3. Practice Touch Typing</h3>
  <p>Touch typing means typing without looking at the keyboard. It may feel difficult at first, but with regular practice, it becomes second nature. Use online tools or games to reinforce muscle memory and improve finger placement.</p>
  
  <h3>4. Focus on Accuracy First</h3>
  <p>Typing correctly is more important than typing quickly. Speed will naturally improve as you become more accurate. Avoid rushing — mistakes cost more time than typing carefully in the first place.</p>
  
  <h3>5. Be Consistent</h3>
  <p>Set aside a few minutes each day for focused practice. Even 5–10 minutes daily can lead to noticeable improvement over time. Track your progress and challenge yourself to improve gradually.</p>
  
  <h3>Final Thoughts</h3>
  <p>Typing faster and more accurately is a skill that benefits you in school, work, and everyday digital tasks. By following these simple tips and practicing consistently, you'll see your typing speed improve in no time.</p>
  `
  }
}
</script>
