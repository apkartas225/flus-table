<template>
  <div class="wrapper">
    <Header
    :currentPage='currentPage'
    :blockParams='elements[currentPage]'
    :dataTable='elements'
    @showNextPage='this.currentPage++'
    @showPrevPage='this.currentPage--'
    />

    <Description
    :blockParams='elements[currentPage]'
     />
    
    <div class="table">

      <Table 
      :blockParams='elements[currentPage]'
      />

    </div>
  </div>
</template>

<script>
import { dataTable } from './data';
import Table from './components/Fuse-table.vue'
import Description from './components/Description-bloks.vue';
import Header from './components/My-header.vue';
export default {
  name: "App",
  components: { Description, Header, Table },
  
  data: () => ({
    elements: dataTable,
    currentPage: 0,
  }),
};

</script>

<style>

@import './style.css';

</style>
