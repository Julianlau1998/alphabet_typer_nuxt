<template>
  <div class="mt-8">
    <div class="is-text-wrapper mt-1">
      <h1 class="heading is-size-3 is-size-3-mobile is-secondary mt-5 mb-6">
        Type the Alphabet - Tips And Tricks
      </h1>

      <h2 class="heading is-size-4 is-size-4-mobile is-white mt-5">
        How to Play Type the Alphabet
      </h2>

      <p class="text is-left-aligned mt-0 is-white is-italic">
        To begin, simply press the 'A' key on your keyboard. This starts the game and begins the timer. From there, type each letter of the alphabet in order as quickly and accurately as you can — from A all the way to Z.
        Want to try again? Just press the 'Enter' key to restart the game instantly. There’s no limit to how many times you can play — so keep practicing and see how fast you can go!
      </p>

      <h2 class="heading is-size-4 is-size-4-mobile mt-5 is-white mt-6">
        Global Leaderboard and Achievements
      </h2>

      <p class="text is-left-aligned mt-0 is-white is-italic">
        Think you've got what it takes to become the world's fastest typist? Join our global leaderboard by setting an impressive time and see how you rank against other players. Keep practicing and watch your name climb the ranks!
      </p>
    </div>
    <div class="home container">
      <div class="mt-6 ">
        <Articles />
      </div>
      <div class="is-text-wrapper">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Articles from '../../components/articles/Articles.vue'
import Footer from '../../components/base/Footer'

export default {
  name: 'ContentComponent',
  components: { Articles, Footer },
  computed: {
    twitterURL () {
      return 'https://twitter.com/intent/tweet?text=Type The Alphabet - How fast can you type the alphabet&url=alphabet-typer.com&hashtags=#TypeTheAlphabet'
    },
    facebookURL () {
      return 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Falphabet-typer.comF2&amp;src=sdkpreparse'
    },
    mailURL () {
      return 'mailto:?to=&body=https://alphabet-typer.com&subject=Type The Alphabet'
    }
  }
}
</script>

<style scoped>

</style>
