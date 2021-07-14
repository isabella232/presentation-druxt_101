
# v-model

<div class="my-10 grid grid-cols-[40px,260px] w-min gap-y-4">
  <ri-cloud-line class="opacity-50"/>
  <div><a href="https://nginx.feature-239-editbar.demo-druxtjs-org.au2.amazee.io/en/recipes/vegan-chocolate-and-nut-brownies" target="_blank">nginx.feature-239-editbar.demo-druxtjs-org.au2.amazee.io</a></div>
  <mdi-github class="opacity-50" />
  <div><a href="https://github.com/druxt/demo.druxtjs.org/pull/261" target="_blank">druxt/demo.druxtjs.org/pull/261</a></div>
</div>

```vue
<template>
  <div>
    <DruxtEntity v-bind="props" v-model="model">
    <DruxtEntityForm v-bind="props" v-model="model">
  </div>
</template>

<script>
export default {
  data: () => ({
    model: null,
    props: { type: 'node--article', uuid: '...' }
  }),
}
</script>
```

<!--
[Click play]

The EditBar is a User Experience experiment to demonstrate one of the many ways to bring editing to the frontend in a Fully Decoupled Drupal site.

Let's take a quick walk through of the site __ BRIAN:
(BRIAN TO SHARE)
- This is the first time I've seen a content preview out of Drupal that actually works

The source code is all available on github, so be sure to check it out.
-->
