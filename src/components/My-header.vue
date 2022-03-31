<template>
  <div class="header">
      <div class="title">Плавка: {{element.id}}</div>
      <div class="arrows">
        <button
         class="arrow-img"
         :disabled='isDisabledPrev'
         :class='{ "disabled": isDisabledPrev }'
         @click="showPrevPage">

          <img src="../assets/leftArr.svg" alt="">
        </button>
        <button
         class="arrow-img right"
         :class='{ "disabled": isDisabledNext }'
         :disabled='isDisabledNext'
         @click="showNextPage"> 
          <img src="../assets/rightArr.svg" alt="">
        </button>
      </div>
    </div>
</template>

<script>
export default {
    name: 'My-header',
    props: {
        elements: {
            type: Object,
        },
         element: {
            type: Object,
        },
        currentPage: {
            type: Number,
        }
    },
    methods: {
        showNextPage(){
            this.$emit('showNextPage');
        },

        showPrevPage(){
            this.$emit('showPrevPage')
        },
    },
    computed: {
        isDisabledNext(){
            return this.currentPage === this.elements.length - 1;
        },
        isDisabledPrev(){
            return this.currentPage === 0;
        }
    }

    
}
</script>

<style scoped>

.disabled{
    background: grey;
}

</style>