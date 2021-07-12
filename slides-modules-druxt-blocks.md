<div class="grid grid-cols-[2fr,2fr] gap-4">
  <div class="pb-4 text-center">
    <img class="h-50 inline-block" src="https://druxtjs.org/logo.svg">
    <div class="mb-2 text-sm">
      <h1>DruxtBlocks</h1>
      <a href="https://blocks.druxtjs.org" target="_blank">blocks.druxtjs.org</a>
    </div>
    <div class="opacity-50 mb-2 text-sm">
      Provides Drupal blocks and region components.
    </div>
    <div class="text-center">
      <a class="!border-none" href="https://www.npmjs.com/package/druxt-blocks" target="__blank"><img class="h-4 inline mx-0.5" src="https://img.shields.io/npm/v/druxt-blocks?label=druxt-blocks" alt="NPM version"></a>
    </div>
  </div>
  <div class="pb-4 pl-8">

```vue
// DruxtBlock component
<template>
  <DruxtBlock :id="drupal_internal__id" />
</template>
```

```vue
// DruxtBlockRegion component
<template>
  <DruxtBlockRegion :name="name" :theme="theme" />
</template>
```

  </div>
</div>