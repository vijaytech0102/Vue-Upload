<template>
  <div id="app">
    <div class="img">
      <cloudImage id="one" path="folder/myfile.jpeg" />
      <cloudImage path="folder/myfile.jpeg" />
    </div>
    <input type="file" ref="myfile" />
    <button @click="upload">upload</button>
  </div>
</template>

<script>
import { storage } from './firebase';
import { ref, uploadBytes } from 'firebase/storage';
import CloudImage from './components/CloudImage.vue';
export default {
  name: 'App',
  components: {
    CloudImage,
  },
  methods: {
    upload: function () {
      const storageRef = ref(storage, 'folder/myfile.jpeg');
      uploadBytes(storageRef, this.$refs.myfile.files[0]).then((snapshot) => {
        console.log('uploaded');
      });
    },
  },
};
</script>

<style>
#one {
  padding: 10px;
}
.img{
  display:flex;
  margin: auto, 0;
  padding: 5px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
