
<div class="grid grid-cols-[2fr,2fr] gap-4">
  <div class="text-center pb-4">
    <img class="h-50 inline-block" src="https://druxtjs.org/logo.svg">
    <div class="mb-2 text-sm">
      <h1>Druxt<small class="text-sm text-gray-400">.module</small></h1>
      <a href="https://drupal.org/project/druxt" target="_blank">drupal.org/project/druxt</a>
    </div>
  </div>
  <div class="pl-8 my-auto">

  ### Requires:

  <div class="text-sm py-4 !all:leading-6 !all:list-none">

  - Decoupled Router
  - JSON:API Menu Items
  - JSON:API Views

  </div>

  ### Provides:

  <div class="text-sm py-4 !all:leading-6 !all:list-none">

  - Read-only permission for required resources
  - Block condition plugin bypass
  - Enables Cross-Origin Resource Sharing (CORS)

  </div>
  </div>
</div>

<!--
- Enables required modules:
  - Decoupled router
  - JSON:API Menu Items at the moment, however it will also support the Decoupled Menu Initiative's solution in the future.
  - JSON:API Views (beta release).
- Adds a Read-only permission for required resources
- As well as some required workaround to enable Decoupled Blocks
- And Enables CORS by default

The Druxt module is ideally a temporary measure, as all the things it does could be handled by Drupal core in the future.
-->
