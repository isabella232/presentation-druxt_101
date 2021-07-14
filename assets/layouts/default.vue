<template>
  <DruxtSite theme="bartik">
    <template #default="{ props }">
      <b-container>
        <DruxtBlockRegion v-bind="props.header" />

        <DruxtBlockRegion v-bind="props.content" />
      </b-container>
    </template>
  </DruxtSite>
</template>
