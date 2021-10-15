<template>
  <div>
    <!-- {{user}} -->
    <div
      class="td-px-4 td-bg-green-500 td-flex td-justify-between td-items-center"
      >
      <div class="td-flex td-items-center">
        <h1 class="td-px-2 td-py-2 td-text-white td-text-xl">
          Search results for “Eric”
        </h1>
      </div>

      <div class="td-flex td-items-center"></div>
    </div>
    <div >
      <!-- <template v-if="results.length <= 0 ">
        <div class="td-px-4">
          <Empty />
        </div>
         
      </template> -->
      <template >
        <div class="td-px-4 h-100">
            <ResultCard v-for="i in 4" :key="i"/>
        </div>
      </template>
  </div>
  </div>
</template>

<script>
 import ResultCard from './components/ResultCard.vue'
// import
// import Empty from './components/Empty.vue'
import * as singleSpa from "single-spa"
import { GetUserInfo } from 'zuricontrol'
export default {
  name: "App",
  data(){
    return {
      user : null,
      results: []
    }
  },
  components: {
     ResultCard,
    //  Empty
  },
  methods(){},
  mounted() {
    GetUserInfo().then(user => {
            // console.log('user', user);
            this.user = user
        });
    const appNames = singleSpa.getAppNames()
    // console.log(appNames)
  }
}
</script>

<style lang="css">
@import "./assets/styles/main.css";
</style>
