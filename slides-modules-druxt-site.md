
<div class="grid grid-cols-[2fr,2fr] gap-4">
  <div class="text-center pb-4">
    <img class="h-50 inline-block" src="https://druxtjs.org/logo.svg">
    <div class="mb-2 text-sm">
      <h1>DruxtSite</h1>
      <a href="https://site.druxtjs.org" target="_blank">site.druxtjs.org</a>
    </div>
    <div class="opacity-50 mb-2 text-sm">
      Out of the box, Decoupled Drupal site experience.
    </div>
    <div class="text-center">
      <a class="!border-none" href="https://www.npmjs.com/package/druxt-site" target="__blank"><img class="h-4 inline mx-0.5" src="https://img.shields.io/npm/v/druxt-site?label=druxt-site" alt="NPM version"></a>
    </div>
  </div>

  <div>
  <div class="content-card !all:leading-12 mb-2 !all:list-none">

  - Decoupled router
  - Drupal powered Entity, Fields and Forms
  - Blocks and Regions
  - ~~Vuews~~ Views
  - Menus, Breadcrumbs, etc
  - Reactive content editing
  </div>
    
  ```vue
  // DruxtSite component
  <template>
    <DruxtSite :theme="theme" />
  </template>
  ```
  </div>
</div>

<!--
Druxt is not necessarily for out of the box Drupal sites but the DruxtSite module is.

It provides all the necessary modules to get setup for Decoupled Drupal development in under 5 minutes.

And as Druxt is Reactive by default, it supports inline content editing via the `v-model` directive.
-->
