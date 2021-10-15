<template>
  <div @click="redirect" class="resultCard td-cursor-pointer hover:td-shadow td-border td-rounded-md td-p-2 td-my-2">
                <p class="result_plugin td-font-bold td-text-base hover:td-text-green-500 td-text-green-600 td-cursor-pointer">#todo plugin <span class="created_date td-text-sm td-px-2">- Oct 12th</span></p>
                <div class="card_cont td-my-0.5 td-flex td-flex-start">
                    <div class="">
                        <img src="../assets/img/no-Img.svg" />

                    </div>
                    <div class="card_desc td-px-2">
                        <p class="result_card_title td-font-bold ">Didier
                            <span class="result_card_time td-px-2 td-font-medium td-text-gray-500 td-text-sm">12:04Am</span></p>
                        <p class="result_card_desc td-text-lg">element does not inherently represent anything. Instead, it's used to group content so it can be easily styled </p>
                    </div>

                </div>

   </div>
   
</template>

<script>
import * as singleSpa from "single-spa";
export default {
  name: 'ResultCard',
  methods: {
    redirect(){
      singleSpa.navigateToUrl('/todo');
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
