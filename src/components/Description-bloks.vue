<template>
    <div class="description">
      <div class="block date">
        <div class="block__title">Дата</div>
        <div class="block__info">{{ getDate }}</div>
      </div>
      <div class="block size">
        <div class="block__title">Размер</div>
        <div class="block__info">{{ element.size }} мм</div>
      </div>
      <div class="block excerpt">
        <div class="block__title">Выдержка</div>
        <div class="block__info">
          <span
          :style=" element.exposure > 100 ? 'color:red' : 'color:green'">
            {{ element.exposure }}
          </span>
          </div>
      </div>
      <div class="block turnover">
        <div class="block__title">Оборот</div>
        <div class="block__info">
          <span :style="element.turn > 100 ? 'color:red' : 'color:green'">
            {{ element.turn }}
          </span>
        </div>
      </div>
    </div>

</template>

<script>
export default {
  name: 'Description-bloks',
  props: {
         element: {
            type: Object,
        },
    },

    computed: {
      getDate(){
          let date = new Date(this.element.date),
              month = date.getMonth() + 1,
              day = date.getDate(),
              year = date.getFullYear();
              
              day = day < 10 ? `${0}${day}` : day;
              
          return  `${day}.${month}.${year}`;
      }
    }
}

</script>

<style>

</style>