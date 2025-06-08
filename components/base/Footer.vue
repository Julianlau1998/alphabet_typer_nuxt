<template>
  <div>
    <div>
      <h2 class="heading is-size-4 is-size-4-mobile mt-5 is-white mt-8">
        Contact Us and Stay Connected
      </h2>

      <p class="text is-left-aligned mt-0 is-white is-italic mb-6">
        We love hearing from our players! If you have any questions, feedback, or suggestions, feel free to reach out to us <a href="mailto:jlauapps@gmail.com?subject=Type The Alphabet">here</a>. Let's keep the typing community growing and thriving together!
        <br>
        Don't wait any longer - start your 'Type the Alphabet' journey today and become the ultimate typing champion!
      </p>

      <Apps />

      <h2 class="heading is-size-4 is-size-4-mobile is-white mt-5 mb-3">
        Share
      </h2>

      <Social
        :facebook-url="facebookURL"
        :twitter-url="twitterURL"
        :mail-url="mailURL"
      />
    </div>

    <p class="text is-white mb-5 mt-5">
      Copyright © Julian Lau - {{ new Date().getFullYear() }}
    </p>

    <div class="mb-6">
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
  </div>
</template>

<script>
import Social from '~/components/Social'
import Apps from '~/components/apps/Apps.vue'

export default {
  name: 'ContentComponent',
  components: {
    Social,
    Apps
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
  }
}
</script>
