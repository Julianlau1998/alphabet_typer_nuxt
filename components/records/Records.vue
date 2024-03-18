<template>
  <div>
    <p v-if="!records.length" class="mt-6 is-white px-3">
      How fast can you type the alphabet?
      Just start with an 'A' and the timer will start too.
    </p>
    <div class="columns is-justify-content-center has-text-start mt-5">
      <div v-if="records.length" class="column is-3 mt-5 is-white">
        <h3 class="heading is-size-4 is-fourth is-italic">
          Your <br> Records:
        </h3>
        <p
          v-for="(record, recordsIndex) in records"
          :key="recordsIndex"
          class="text"
        >
          {{ `${recordsIndex+1}. ${record}s` }}
        </p>
      </div>

      <div class="column is-3 mt-5 is-white">
        <div class="columns is-justify-content-flex-end mb-0 is-multiline">
          <div class="column is-12">
            <h3 class="heading is-size-4 is-third is-italic mb-negative-2">
              Leaderboard:
            </h3>
          </div>
          <div class="column is-12 mb-1">
            <Dropdown
              :options="recordOptions"
              @setFilter="setFilter"
            />
          </div>
        </div>
        <span>
          <p
            v-for="(record, fetchedRecordsIndex) in fetchedRecords"
            :key="fetchedRecordsIndex"
            class="text is-record-item"
          >
            {{ `${fetchedRecordsIndex+1}. ${record.username}: ${record.record}s` }}
          </p>
          <p
            v-if="isLoadMoreAvailable && fetchedRecords.length < 100"
            class="is-primary is-pointer mb-2 mt-2"
            @click="loadMore"
          >
            Load More
            <i class="fas fa-angle-down" />
          </p>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Dropdown from '~/components/helpers/Dropdown'

export default {
  name: 'Records',
  components: {
    Dropdown
  },
  props: {
    records: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      limit: '10',
      offset: 0,
      recordOptions: [
        { name: 'All Time', value: 0 },
        { name: 'Last Day', value: 1 },
        { name: 'Last Week', value: 7 },
        { name: 'Last Month', value: 30 },
        { name: 'Last Year', value: 365 }
      ]
    }
  },
  computed: {
    ...mapState([
      'recordModule'
    ]),
    fetchedRecords () {
      return this.recordModule.records.data
    },
    isLoadMoreAvailable () {
      return this.recordModule.records.load_more
    }
  },
  created () {
    this.getAll({ limit: this.limit, filter: this.filter, offset: this.offset })
  },
  methods: {
    ...mapActions({
      getAll: 'recordModule/getAll'
    }),
    setFilter (filter) {
      this.$emit('setFilter', filter)
      this.filter = filter
      this.offset = 0
      this.getAll({ limit: this.limit, filter })
    },
    loadMore () {
      this.offset += 10
      this.getAll({ limit: this.limit, filter: this.filter, offset: this.offset })
    }
  }
}
</script>
