<template>
  <b-container>
    <b-img class="mb-4" src="https://source.unsplash.com/collection/94734566/1920x540" fluid-grow />

    <b-row>
      <b-col cols="12" md="8">
        <h1 class="mb-0">An interesting title</h1>
        <small>Posted yesterday by Author</small>

        <div class="mb-4">
          <b-badge>Druxt</b-badge>
          <b-badge>Drupal</b-badge>
          <b-badge>Nuxt</b-badge>
        </div>
        <p>
          Quisque velit nisi, pretium ut lacinia in, elementum id enim. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
        </p>
        <p>
          Donec rutrum congue leo eget malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada.
        </p>
        <p>
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla porttitor accumsan tincidunt.
        </p>
      </b-col>

      <b-col class="text-">
        <aside>
          <h3>Latest news</h3>
          <b-card
            img-src="https://source.unsplash.com/collection/94734566/200x60"
            title="Title"
          >
            <b-card-text>
              <small>
                Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
              </small>
              <b-button block class="mt-3" size="sm">
                Read more
              </b-button>
            </b-card-text>
          </b-card>
        </aside>
      </b-col>
    </b-row>
  </b-container>
</template>
