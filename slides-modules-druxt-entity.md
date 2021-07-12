
<div class="grid grid-cols-[2fr,2fr] gap-4">
  <div class="pb-4 text-center">
    <img class="h-50 inline-block" src="https://druxtjs.org/logo.svg">
    <div class="mb-2 text-sm">
      <h1>DruxtEntity</h1>
      <a href="https://entity.druxtjs.org" target="_blank">entity.druxtjs.org</a>
    </div>
    <div class="opacity-50 mb-2 text-sm">
      Drupal Display Mode powered Entity, Form and Field Vue.js component system.
    </div>
    <div class="text-center">
      <a class="!border-none" href="https://www.npmjs.com/package/druxt-entity" target="__blank"><img class="h-4 inline mx-0.5" src="https://img.shields.io/npm/v/druxt-entity?label=druxt-entity" alt="NPM version"></a>
    </div>
  </div>
  <div class="pb-4 pl-8">

```vue
// DruxtEntity component
<template>
  <DruxtEntity :mode="displayMode" :type="resourceType" :uuid="uuid" />
</template>
```

```vue
// Default template
<template>
  <DruxtEntity v-bind="{ mode, type, uuid }">
    <template #default="{ entity, schema }">
      <h1>{{ entity.attributes.title }}</h1>
    </template>
  </DruxtEntity>
</template>
```

```vue
// Wrapper & slots
<template>
  <div>
    <h1>{{ $attrs.entity.attributes.title }}</h1>
    <slot name="field_media_image" />
    <slot name="body" />
  </div>
</template>
```

  </div>
</div>

<!--
The DruxtEntity module displays a Drupal content entity using Drupal's Display modes and field configuration.

The DruxtEntity component requires the Entity UUID, resource type and an optional display mode.

It also supports Form schemas for content editing via the schemaType property, as well as the DruxtEntityForm component
-->
