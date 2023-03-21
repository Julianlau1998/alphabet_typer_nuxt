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
    <br>
    <div class="is-text-wrapper mt-100">
      <h1 class="heading is-size-3 is-size-3-mobile is-secondary mt-5 mb-6">
        Type the Alphabet - The Ultimate Typing Speed Challenge
      </h1>

      <h2 class="heading is-size-4 is-size-4-mobile mt-5 is-white mt-6">
        How Fast Can You Type the Alphabet?
      </h2>

      <p class="text is-left-aligned mt-0 is-white is-italic">
        Introducing 'Type the Alphabet' The Ultimate Typing Speed Challenge that tests your typing speed and accuracy! Designed for both beginners and advanced typists, our game provides endless fun and an opportunity to improve your typing skills. Compete with friends, family, or other players from around the world to see who can type the alphabet fastest!
      </p>

      <h2 class="heading is-size-4 is-size-4-mobile mt-5 is-white mt-6">
        How to Play Type the Alphabet
      </h2>

      <p class="text is-left-aligned mt-0 is-white is-italic">
        Playing 'Type the Alphabet' is simple and intuitive. Just start with the letter A and the timer will start as well. Then type the alphabet as quickly as possible. Your time will be displayed upon completion, and you can try again to improve your score. Don't forget to share your results on social media and challenge your friends to beat your time!
        You can restart the game by clicking 'Enter'.
      </p>

      <h2 class="heading is-size-4 is-size-4-mobile mt-5 is-white mt-6">
        Global Leaderboard and Achievements
      </h2>

      <p class="text is-left-aligned mt-0 is-white is-italic">
        Think you've got what it takes to become the world's fastest typist? Join our global leaderboard by setting an impressive time and see how you rank against other players. Keep practicing and watch your name climb the ranks!
      </p>

      <h2 class="heading is-size-4 is-size-4-mobile mt-5 is-white mt-6">
        Tips to Improve Your Typing Speed
      </h2>

      <p class="text is-left-aligned mt-0 is-white is-italic">
        Looking for ways to enhance your typing abilities? Here are some tips to help you type faster and more accurately:
        Maintain a proper typing posture.
        Use the home row technique to position your fingers correctly.
        Practice touch typing regularly.
        Focus on accuracy before speed.
        With dedication and practice, you'll see your typing speed soar in no time!
      </p>

      <h2 class="heading is-size-4 is-size-4-mobile mt-5 is-white mt-6">
        Touch Typing
      </h2>

      <p class="text is-left-aligned mt-0 is-white is-italic">
        Touch typing involves using all ten fingers to type without looking at the keyboard. This method relies on muscle memory, enabling you to find and press the correct keys effortlessly. The foundation of touch typing is the home row, which is the central row of keys on a standard keyboard (ASDFGHJKL). Each finger is assigned specific keys around the home row, allowing for efficient and accurate typing.
      </p>
      <br>
      <p class="text is-left-aligned mt-0 is-white is-italic">
        To develop muscle memory, it's essential to familiarize yourself with the position of each key on the keyboard. Starting from the home row, learn the keys your fingers are responsible for and practice reaching for them without looking. Gradually expand your reach to the top and bottom rows. Regular practice will help you memorize the key locations and improve your typing speed.
      </p>
      <br>
      <p class="text is-left-aligned mt-0 is-white is-italic">
        Consistent practice is the key to mastering touch typing. Begin with basic exercises that focus on individual letters and gradually progress to words, sentences, and paragraphs. Online resources and typing software offer various practice exercises and tutorials tailored to different skill levels. Incorporate these tools into your practice routine to enhance your typing proficiency.
      </p>
      <br>
      <p class="text is-left-aligned mt-0 is-white is-italic">
        Setting achievable goals and monitoring your progress can motivate you to improve your touch typing skills. Determine specific targets for typing speed and accuracy, and work consistently towards achieving them. Regularly assess your performance using online typing tests or software, and adjust your goals as needed to maintain a steady growth trajectory.
      </p>
      <br>
      <p class="text is-left-aligned mt-0 is-white is-italic">
        Learning touch typing requires time and dedication. You may initially experience a decrease in speed or accuracy as you adapt to the new technique. However, with consistent practice and patience, you'll notice significant improvements in your typing performance. Embrace the challenges and stay persistent to reap the long-term benefits of touch typing.
      </p>
      <br>
      <p class="text is-left-aligned mt-0 is-white is-italic">
        Once you're comfortable with touch typing, apply your skills in everyday tasks such as writing emails, working on documents, or engaging in online communication. Consistently using touch typing in real-life scenarios will reinforce your muscle memory and help you become a more efficient and accurate typist.
      </p>
      <br>
      <p class="text is-left-aligned mt-0 is-white is-italic">
        By following these steps and dedicating time to practice, you'll master touch typing and see a marked improvement in your typing speed and accuracy. Apply your newfound skills in 'Type the Alphabet' and challenge yourself to become the ultimate typing champion!
      </p>

      <h2 class="heading is-size-4 is-size-4-mobile mt-5 is-white mt-6">
        Contact Us and Stay Connected
      </h2>

      <p class="text is-left-aligned mt-0 is-white is-italic mb-6">
        We love hearing from our players! If you have any questions, feedback, or suggestions, feel free to reach out to us <a href="mailto:jlauapps@gmail.com?subject=Type The Alphabet">here</a>. Let's keep the typing community growing and thriving together!
        <br>
        Don't wait any longer - start your 'Type the Alphabet' journey today and become the ultimate typing champion!
      </p>

      <h2 class="heading is-size-4 is-size-4-mobile mt-5 is-white mt-6 mb-3">
        Share
      </h2>

      <Social
        :facebook-url="facebookURL"
        :twitter-url="twitterURL"
        :mail-url="mailURL"
      />
    </div>
    <div class="my-6">
      <NuxtLink to="/info" class="mx-3">
        Info
      </NuxtLink>
      <NuxtLink to="/privacy" class="mx-3">
        Privacy
      </NuxtLink>
      <NuxtLink to="/termsConditions" class="mx-3">
        Terms
      </NuxtLink>
      <a href="https://jlapps.netlify.app" class="mx-3">
        Contact
      </a>
    </div>
    <br>
    <div class="mb-6">
      <a href="https://play.google.com/store/apps/details?id=com.alphabet_typer.app" class="mx-3">
        <button class="button is-secondary">
          Get Type The Alphabet on Google Play
        </button>
      </a>
      <a href="https://apps.apple.com/us/app/type-the-alphabet/id1610788763" class="mx-3">
        <button class="button is-secondary is-">
          Get Type The Alphabet on the App Store
        </button>
      </a>
    </div>
  </div>
</template>

<script>
import Game from '@/components/game/Game.vue'
import Social from '~/components/Social'

export default {
  name: 'Home',
  components: {
    Game,
    Social
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
  },
  mounted () {
    this.$store.state.username = localStorage.getItem('username')
  }
}
</script>
