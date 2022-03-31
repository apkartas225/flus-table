<template>
  <div class="wrapper">
    <Header
    :currentPage='currentPage'
    :element='elements[currentPage]'
    :elements='elements'
    @showNextPage='this.currentPage++'
    @showPrevPage='this.currentPage--'
    />

    <Description
    :element='elements[currentPage]'
     />
    
    <div class="table">
     

      <Table 
      :element='elements[currentPage]'
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

<style >
/* @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed'); */
body{
  margin: 0;
  background: #E5E5E5;
}


.title{
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.025em;
  color: #6C757D;

}
.arrow-img{
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px 0px 0px 5px;
  width: 35px;
  height: 35px;
  background: #727CF4;
  cursor: pointer;
}
.arrow-img:hover{
  transform: scale(1.1);
}
.arrow-img.right{
  border-radius: 0px 5px 5px 0px;
}
button{
  outline: none;
  border: none
}
.wrapper{
  margin-top: 100px;
  width: 100%;
  /* background: #E5E5E5 */
}
.header {
  padding: 0 10px;
  background: white;
  box-shadow: 0px 2px 2px rgba(29, 35, 66, 0.05);
  border-radius: 5px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 54px;
  border: 1px solid  #E5E5E5;
}
.description{
  padding: 0 10px;
  box-shadow: 0px 2px 2px rgba(29, 35, 66, 0.05);
  border-radius: 5px;
  max-width: 1220px;
  margin: 0 auto;
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
 
}

.description .block {
    background: #FFFFFF;
    box-shadow: 0px 2px 2px rgb(29 35 66 / 5%);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 274px;
    margin-top: 10px;
    height: 95px;
    padding-left: 20px;
}
.block__title{
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.025em;

color: #A1A6AD;
}
.block__info{
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 33px;
  letter-spacing: -0.04em;

color: #6C757D;
}
.arrows{
  display: flex;
  width: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.table-name{
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.025em;
  color: #A1A6AD;
}
.fuse-table{
  background: white;
  padding: 19px 17px;
}
.table {
  box-shadow: 0px 2px 2px rgba(29, 35, 66, 0.05);
  border-radius: 5px;
  padding: 0 10px;
  max-width: 1220px;
  margin: 0 auto;
  width: 100%;
  margin-top: 10px;
  background: #E5E5E5;
	width: 100%;
	margin-bottom: 20px;
	border-collapse: collapse; 
}
.table th {
  font-weight: 400;
  font-family: 'Rubik';
  font-style: normal;
  height: 40px;
  font-size: 15px;
  line-height: 18px;
  text-align: left;
  color: #6C757D;
	padding: 5px;
	background: #F7F7F7;
  letter-spacing: -0.025em;
}
.table td {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  height: 40px;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.025em;
  background: white;
  color: #A1A6AD;
	border-bottom: 2px solid #FAFAFA;
	padding: 5px;
}
</style>
