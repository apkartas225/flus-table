<template>
    <div class="description">
      <div class="block date">
        <div class="block__title">Дата</div>
        <div class="block__info">{{ getDate }}</div>
      </div>
      <div class="block size">
        <div class="block__title">Размер</div>
        <div class="block__info">{{ blockParams.size }} мм</div>
      </div>
      <div class="block excerpt">
        <div class="block__title">blockParams</div>
        <div class="block__info">
          <span
          :style=" blockParams.exposure > 100 ? 'color:red' : 'color:green'">
            {{ blockParams.exposure }}
          </span>
          </div>
      </div>
      <div class="block turnover">
        <div class="block__title">Оборот</div>
        <div class="block__info">
          <span :style="blockParams.turn > 100 ? 'color:red' : 'color:green'">
            {{ blockParams.turn }}
          </span>
        </div>
      </div>
    </div>

</template>

<script>
import { parseData } from '../helpers/date';
export default {
  name: 'Description-bloks',
  props: {
         blockParams: {
            type: Object,
        },
    },

    computed: {
      getDate(){
          return parseData(this.blockParams.date);
      }
    }
}

</script>

<style>

</style>