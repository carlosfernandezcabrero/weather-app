<template>
  <footer
    class="py-12 text-center bg-primary mt-32 w-full flex flex-col gap-y-2 text-base"
  >
    <div>
      <label for="locale-select" class="block mb-1"
        >{{ $t('language') }}:
      </label>
      <select
        id="locale-select"
        v-model="$i18n.locale"
        class="bg-background text-highlight pl-4 rounded-md mb-6 border border-border"
        @change="
          ({ target }) => {
            setLocale(target.value)
            weatherDataStore.language = target.value
            weatherDataStore.refreshData()
          }
        "
      >
        <option v-for="locale in locales" :value="locale">{{ locale }}</option>
      </select>
    </div>
    <p>
      {{ $t('icons') }}
      <a class="font-bold" href="https://icons8.com/" target="_blank">Icons8</a>
    </p>
    <p>
      {{ $t('ideas') }}
      <a class="font-bold" href="https://github.com/ikurotime" target="_blank">
        David Huertas
      </a>
    </p>
    <p>
      <a
        class="text-xl font-bold"
        href="https://github.com/carlosfernandezcabrero/weather-app"
        target="_blank"
      >
        GitHub
      </a>
    </p>
  </footer>
</template>

<script setup>
import { useWeatherDataStore } from '~/store'

const { locales, setLocale } = useI18n()
const weatherDataStore = useWeatherDataStore()
</script>
