<template>
  <div class="note" v-if="note">
    <h1>{{note.title}}</h1>
    <pre>{{note.content}}</pre>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Note',
  props: {
    note: {required: true}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.note{
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 5px #ccc;
    padding: 10px;
    width: 240px;
    margin: 16px;
    float: left;
  }
  .note h1{
    font-size: 1.1em;
    margin-bottom: 6px;
  }
  .note pre {
    font-size: 1.1em;
    margin-bottom: 10px;
    white-space: pre-wrap; 
    word-wrap: break-word;
    font-family: inherit;
  }
</style>
