<template>
  <div class="home">
    <h2 class="heading is-size-1 is-size-3-mobile mt-5 is-secondary is-italic">
      Type The Alphabet
    </h2>
    <br>
    <p class="text mt-0 is-white is-italic mt-negative-5">
      How fast can you type?
    </p>
    <Game />
    <Content />
  </div>
</template>

<script>
import Game from '@/components/game/Game.vue'
import Content from '@/components/content/Content'

export default {
  name: 'Home',
  components: {
    Game,
    Content
  },
  head () {
    return {
      title: 'Type The Alphabet - How fast can you type the alphabet?',
      meta: [
        { hid: 'og:title_og_article', property: 'og:title', content: 'Type The Alphabet' },
        { hid: 'og:url_og_article', property: 'og:url', content: 'https://alphabet-typer.com' },
        { hid: 'og:description_og_article', property: 'og:description', content: 'How fast can you type the alphabet?' },
        { hid: 'og:image_og_article', property: 'og:image', content: '/static/icon.png' },

        // twitter card
        { hid: 'twitter:title_og_article', name: 'twitter:title', content: 'Type The Alphabet' },
        { hid: 'twitter:url_og_article', name: 'twitter:url', content: 'https://alphabet-typer.com' },
        { hid: 'twitter:description_og_article', name: 'twitter:description', content: 'How fast can you type the alphabet?' },
        { hid: 'twitter:image_og_article', name: 'twitter:image', content: '/static/icon.png' }
      ]
    }
  },
  mounted () {
    this.$store.state.username = localStorage.getItem('username')
  }
}
</script>
