<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-card
        height="200"
        width="400"
        >
        <v-form v-model="valid">
          <v-text-field
            v-model="title"
            :rules="titleRules"
            label="Title"
            required
          ></v-text-field>
          <v-textarea
            v-model="content"
            label="Content"
            :rules="contentRules"
            rows="3"
            required
          ></v-textarea>
          <v-btn
            v-on:click.prevent="createNote()"
            absolute
            dark
            fab
            bottom
            right
            color="red"
            small
          >
            <v-icon>add</v-icon>
          </v-btn>
        </v-form>
        </v-card>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'CreateNote',
    data () {
      return {
        valid: false,
        title: '',
        content: '',
        titleRules: [
          v => !!v || 'Title is required',
          v => v.length <= 20 || 'Title must be less than 20 characters'
        ],
        contentRules: [
          v => !!v || 'Content is required',
          v => v.length <= 50 || 'Content must be less than 50 characters'
        ]
      }
    },
    methods: {
      createNote () {
        if (this.title.trim() || this.content.trim()) {
          var notes = {
            title: this.title,
            content: this.content
          };
          this.$store.dispatch('addNote', notes);
          this.title = "";
          this.content = "";
        }
      }      
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
