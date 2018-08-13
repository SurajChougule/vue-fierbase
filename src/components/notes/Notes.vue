<template>
  <div class="notes">
    <note v-for="(note, index) in notesData" :note="note" :key="index">
      </note>
  </div>
</template>
<script>
/* eslint-disable */
import firebase from 'firebase';
import Note from './Note'
import { mapGetters } from 'vuex';

export default {
  name: 'Notes',
  props: {
    notesData: {required: true}
  },
  components: {
    Note
  }
}
</script>
<style>
.notes{
    padding: 0 100px;
  }
</style>