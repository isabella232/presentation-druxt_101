
<div class="grid grid-cols-[2fr,2fr] gap-4">
  <div class="pb-4 text-center">
    <img class="h-50 inline-block" src="https://druxtjs.org/logo.svg">
    <div class="mb-2 text-sm">
      <h1>DruxtViews</h1>
      <a href="https://views.druxtjs.org" target="_blank">views.druxtjs.org</a>
    </div>
    <div class="opacity-50 mb-2 text-sm">
      Drupal Views Vue.js components for Nuxt.js
    </div>
    <div class="text-center">
      <a class="!border-none" href="https://www.npmjs.com/package/druxt-views" target="__blank"><img class="h-4 inline mx-0.5" src="https://img.shields.io/npm/v/druxt-views?label=druxt-views" alt="NPM version"></a>
    </div>
  </div>
  <div class="pb-4 pl-8">

```jsx
<DruxtView
  :display-id="displayId"
  :view-id="viewId"
/>
```

![Example DruxtView component](/images/druxt-views-page.png)

  </div>
</div>

<!--
In this case, the route is the Drupal Frontpage View, so the DruxtView module is used to render the page.

The DruxtView component can also be used in a standard Nuxt page or Vue component.

It requires a View ID or UUID, and an optional Display ID.

All configuration is managed in the Drupal backend, but the Frontend developer has access to the configuration, pagination, filters, sorts and more via the DruxtWrapper slots system.
-->
