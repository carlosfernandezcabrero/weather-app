<template>
  <section>
    <SectionTitle>{{ $t('next-three-days') }}</SectionTitle>
    <div class="flex flex-col gap-y-14 mx-auto">
      <Forecast3Days />
      <SelectedDay />
    </div>
  </section>
</template>
