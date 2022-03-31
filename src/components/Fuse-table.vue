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
            v-for="(row, idx) of element.details"
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
  </div>
  
</template>

<script>
export default {
    name: 'Fuse-table',
    props: {
         element: {
            type: Object,
        },
    },
    methods: {
         computedDate(now){
              let date = new Date(now),
              month = date.getMonth() + 1,
              day = date.getDate(),
              year = date.getFullYear();

              day = day < 10 ? `${0}${day}` : day;
              
          return  `${day}.${month}.${year}`;
      },
      
    },
   
}
</script>

<style>

</style>