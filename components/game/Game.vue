<template>
  <div class="gameWrapper">
    <h2
      class="heading is-primary"
      :class="letterPosition >= 26 ? 'is-size-1' : 'is-large'"
    >
      {{ alphabet[letterPosition] }}
    </h2>
    <input
      ref="letterInput"
      class="is-custom-input"
      :value="inputLetter"
      type="text"
      placeholder="Start The Alphabet"
      autofocus
      @input="changeLetter($event.data)"
      @click="scrollDown"
      @keydown.enter="reset"
    >
    <h3 class="heading is-size-1 mt-4 is-primary">
      {{ timer.toFixed(2) }}
      <i class="fas fa-stopwatch" />
    </h3>
    <button class="button is-secondary-border mt-4" @click="reset">
      Reset
      <i class="fas fa-eraser ml-2" @click="reset()" />
    </button>

    <Records :records="records" @setFilter="setFilter" />

    <button
      v-if="shareAvailable"
      class="button is-fourth-border px-5 py-5 mt-6 mb-6"
      @click="recommend"
    >
      Share this App
      <i class="fas fa-share ml-4 is-secondary" />
    </button>
    <br>
    <ShareModal
      v-if="showShareModal"
      :time="timer.toFixed(2)"
      @closeShareModal="closeShareModal"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ShareModal from '@/components/game/ShareModal.vue'
import Records from '~/components/records/Records'

export default {
  components: {
    ShareModal,
    Records
  },
  data () {
    return {
      letterPosition: 0,
      alphabet: [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'Hooray!!!'
      ],
      inputLetter: '',
      timer: 0.00,
      started: false,
      stopTimer: false,
      recordsSet: false,
      showShareModal: false,
      filter: '',
      shareAvailable: false,
      records: []
    }
  },
  computed: {
    username () {
      return this.$store.state.username
    },
    iOS () {
      return this.$store.state.iOS
    }
  },
  watch: {
    inputLetter (val) {
      if (val.toLowerCase() === this.alphabet[this.letterPosition]) {
        this.letterPosition++
      }
    }
  },
  mounted () {
    this.getRecords(false)
    if (navigator.share !== undefined) {
      this.shareAvailable = true
    }
  },
  methods: {
    ...mapActions({
      getAll: 'recordModule/getAll'
    }),
    changeLetter (letter) {
      if (letter === null) { return }
      letter = letter.slice(-1)
      if (!this.started) { this.startTimer() }
      if (this.alphabet.includes(letter.toLowerCase())) {
        this.inputLetter = letter
      }
      if (this.letterPosition >= this.alphabet.length - 2) {
        this.stopTimer = true
        if (!this.recordsSet) { this.getRecords(true) }
      }
    },
    startTimer () {
      this.stopTimer = false
      this.started = true
      const timerInterval = setInterval(() => {
        if (this.stopTimer) {
          clearInterval(timerInterval)
          this.started = false
          this.stopTimer = false
        } else {
          this.timer += 0.01
        }
      }, 10)
    },
    reset () {
      if (this.showShareModal) { return }
      this.$refs.letterInput.focus()
      this.stopTimer = true
      this.letterPosition = 0
      this.timer = 0.00
      this.started = false
      this.inputLetter = ''
      this.recordsSet = false
      this.scrollDown()
    },
    scrollDown () {
      window.scroll({
        top: 110,
        behavior: 'smooth'
      })
    },
    closeShareModal () {
      this.getAll({ limit: this.limit, filter: this.filter })
      this.showShareModal = false
      this.$refs.letterInput.focus()
    },
    recommend () {
      navigator.share({
        title: 'How fast can You type the alphabet? Test your Typing skills with Alphabet Typer',
        text: !this.iOS ? 'https://play.google.com/store/apps/details?id=com.alphabet_typer.app' : 'https://apps.apple.com/us/app/alphabet-typer/id1610788763'
      })
    },
    getRecords (editRecords) {
      this.records = JSON.parse(localStorage.getItem('records'))
      if (this.records === undefined || this.records === null) { this.records = [] }
      if (editRecords) { this.editRecords() }
    },
    storeRecords () {
      localStorage.setItem('records', JSON.stringify(this.records))
      this.showShareModal = true
    },
    editRecords () {
      if (this.records.length < 5) {
        this.records.push(this.timer.toFixed(2))
      } else if (this.timer < this.records[4]) {
        this.records[4] = this.timer.toFixed(2)
      } else {
        return
      }
      for (let i = 0; i < this.records.length; i++) {
        this.records[i] = parseFloat(this.records[i])
      }
      this.recordsSet = true
      this.records = this.records.sort(function (a, b) { return a - b })
      this.storeRecords(this.records)
    },
    setFilter (filter) {
      this.filter = filter
    }
  }
}
</script>
