<template>
  <Line
    id="graph"
    :data="{
      labels: labels,
      datasets: [
        {
          backgroundColor: '#c8e6e8',
          borderColor: '#c8e6e8',
          data: graphConfig.data()
        }
      ]
    }"
    :options="{
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        y: {
          ticks: {
            callback: graphConfig.y
          }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: graphConfig.tooltip
          }
        }
      }
    }"
  />
</template>

<script setup>
import {
  CategoryScale,
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip
} from 'chart.js'
import { Line } from 'vue-chartjs'

defineProps(['graphConfig', 'labels'])

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip)
ChartJS.defaults.color = '#d4d4d4'
</script>
