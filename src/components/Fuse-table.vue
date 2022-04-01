<template>
  <div class="fuse-table">
    <div class="table-name">Сводная таблица</div>
    <table class="table">
        <thead>
            <tr>
                <th>Агрегат</th>
                <th>Дата</th>
                <th>Начало</th>
                <th>Длительность, мин.</th>
                <th>Простой</th>
                <th>Тип</th>
            </tr>
        </thead>
        <tbody>
            <tr
            v-for="(row, idx) of blockParams.details"
            :key="idx">
                <td>{{ row.unit }}</td>
                <td>{{ computedDate(row.date) }}</td>
                <td>{{ computedDate(row.start) }}</td>
                <td>{{ row.length }}</td>
                <td>
                <span :style="row.idle ? 'color:red' : '' ">
                    {{ row.idle }}
                    </span>
                </td>
                <td>{{ row.type }}</td>
            </tr>
        </tbody>
    </table>
    <div class="graph">
         <BarChart :chartData="computedGraph"
         :height='300'
         :width='300'
         :options="options"
        />
    </div>
  </div>
</template>

<script>
import { parseData } from '../helpers/date';
import { Chart, registerables } from 'chart.js';
import { BarChart } from 'vue-chart-3';
Chart.register(...registerables);
export default {
    name: 'Fuse-table',
    components: {BarChart},
    props: {
         blockParams: {
            type: Object,
        },
    },
    data: () => ({
        options: {
              responsive: true,
      plugins: {
        legend: {
          display: false,
          position: 'top',
          
        },
        
      },
        }
    }),
    computed: {
        computedGraph(){
             let testData = {
                labels: ['1', '2', '3', '4', '5'],
                datasets: [
                    {
                    data: this.blockParams.graph,
                    backgroundColor: ['#77CdEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
                    },
                ],
            }
            return testData
        }
    },
    methods: {
         computedDate(milliseconds){
           return parseData(milliseconds);
        },
    },
   
}
</script>

<style>
   
</style>