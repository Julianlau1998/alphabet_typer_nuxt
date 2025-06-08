<template>
  <div>
    <h1 v-if="!hideTitle" class="heading is-secondary is-italic is-size-2 mt-5">
      Articles
    </h1>
    <div
      v-for="(group, index) in groupedArticles"
      :key="index"
      class="columns is-justify-content-center has-text-start px-5 mx-5"
      :class="{'mt-5': !hideTitle && index === 0}"
    >
      <MiniArticle
        v-for="article in group"
        :key="article.link"
        :article="article"
        class="mb-6"
      />
    </div>
  </div>
</template>

<script>
import MiniArticle from '../../components/Article/MiniArticle.vue'

export default {
  components: {
    MiniArticle
  },
  props: {
    hideTitle: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      articles: [
        {
          title: 'How to Play Type the Alphabet',
          previewText: "Learn how to play 'Type the Alphabet' — a fast and fun typing game that challenges you to type A to Z as quickly as possible. Perfect for improving your speed and reflexes.",
          link: 'how-to-play'
        },
        {
          title: 'Tips to Improve Your Typing Speed',
          previewText: 'Boost your typing speed and accuracy with these essential tips, including posture, finger placement, and daily practice routines that deliver real results.',
          link: 'how-to-improve'
        },
        {
          title: 'Global Leaderboard and Achievements',
          previewText: 'Think you’re fast? Compete on our global leaderboard and see how your typing skills stack up against players worldwide. Keep practicing to climb the ranks!',
          link: 'leaderboard'
        },
        {
          title: 'Quick Tips for Faster Typing',
          previewText: 'Want faster typing in less time? Follow these quick tips on posture, accuracy, and practice to level up your typing skills with just a few minutes a day.',
          link: 'typing-speed'
        },
        {
          title: 'Mastering Touch Typing: A Complete Guide',
          previewText: 'Touch typing helps you type without looking at the keyboard. Learn how to build muscle memory, set goals, and practice effectively for long-term typing success.',
          link: 'touch-typing'
        }
      ]
    }
  },
  computed: {
    groupedArticles () {
      const groups = []
      for (let i = 0; i < this.articles.length; i += 2) {
        groups.push(this.articles.slice(i, i + 2))
      }
      return groups
    }
  }
}
</script>
