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

    <div class="is-text-wrapper">
      <h1 class="heading is-size-1 is-size-3-mobile is-secondary mt-5 mb-6">
        Welcome to Type the Alphabet - The Ultimate Typing Speed Challenge
      </h1>

      <h2 class="heading is-size-3 is-size-3-mobile mt-5 is-white mt-6">
        How Fast Can You Type the Alphabet?
      </h2>

      <p class="text mt-0 is-white is-italic">
        Introducing 'Type the Alphabet,' the addictive and exciting web app that tests your typing speed and accuracy! Designed for both beginners and advanced typists, our game provides endless fun and an opportunity to improve your typing skills. Compete with friends, family, or other players from around the world to see who can type the alphabet fastest!
      </p>

      <h2 class="heading is-size-3 is-size-3-mobile mt-5 is-white mt-6">
        How to Play Type the Alphabet
      </h2>

      <p class="text mt-0 is-white is-italic">
        Playing 'Type the Alphabet' is simple and intuitive. Just start with the letter A and the timer will start as well. Then type the alphabet as quickly as possible. Your time will be displayed upon completion, and you can try again to improve your score. Don't forget to share your results on social media and challenge your friends to beat your time!
        You can restart the game by clicking 'Enter'.
      </p>

      <h2 class="heading is-size-3 is-size-3-mobile mt-5 is-white mt-6">
        Global Leaderboard and Achievements
      </h2>

      <p class="text mt-0 is-white is-italic">
        Think you've got what it takes to become the world's fastest typist? Join our global leaderboard by setting an impressive time and see how you rank against other players. Keep practicing and watch your name climb the ranks!
      </p>

      <h2 class="heading is-size-3 is-size-3-mobile mt-5 is-white mt-6">
        Tips to Improve Your Typing Speed
      </h2>

      <p class="text mt-0 is-white is-italic">
        Looking for ways to enhance your typing abilities? Here are some tips to help you type faster and more accurately:
        Maintain a proper typing posture.
        Use the home row technique to position your fingers correctly.
        Practice touch typing regularly.
        Focus on accuracy before speed.
        With dedication and practice, you'll see your typing speed soar in no time!
      </p>

      <h2 class="heading is-size-3 is-size-3-mobile mt-5 is-white mt-6">
        Contact Us and Stay Connected
      </h2>

      <p class="text mt-0 is-white is-italic">
        We love hearing from our players! If you have any questions, feedback, or suggestions, feel free to reach out to us <a href="mailto:jlauapps@gmail.com?subject=Type The Alphabet">here</a>. Let's keep the typing community growing and thriving together!
        <br>
        Don't wait any longer - start your 'Type the Alphabet' journey today and become the ultimate typing champion!
      </p>
    </div>
  </div>
</template>

<script>
import Game from '@/components/game/Game.vue'
export default {
  name: 'Home',
  components: {
    Game
  },
  head () {
    return {
      title: 'Type The Alphabet',
      meta: [
        {
          hid: 'description-main',
          name: 'description',
          content: 'Improve your typing speed with \'Type the Alphabet\' - the ultimate online game that challenges you to type the alphabet as fast as you can. Compete with friends and climb the leaderboard!'
        },
        {
          hid: 'keywords-main',
          name: 'keywords',
          content: 'Type the Alphabet, Typing speed challenge, Alphabet typing game, Alphabet Typer, Online typing competition, Typing leaderboard, Typing speed test, Julian Lau'
        },
        { hid: 'og:title_og_article', property: 'og:title', content: 'Type The Alphabet' },
        { hid: 'og:url_og_article', property: 'og:url', content: 'https://app.alphabet-typer.com' },
        { hid: 'og:description_og_article', property: 'og:description', content: 'How fast can you type the alphabet?' },
        { hid: 'og:image_og_article', property: 'og:image', content: '/static/icon.png' },

        // twitter card
        { hid: 'twitter:title_og_article', name: 'twitter:title', content: 'Type The Alphabet' },
        { hid: 'twitter:url_og_article', name: 'twitter:url', content: 'https://app.alphabet-typer.com' },
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
