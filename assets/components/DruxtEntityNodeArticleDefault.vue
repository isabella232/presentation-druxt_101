<template>
  <b-container>
    <b-img class="mb-4" src="https://source.unsplash.com/collection/94734566/1920x540" fluid-grow />

    <b-row>
      <b-col cols="12" md="8">
        <h1 class="mb-0">{{ entity.attributes.title }}</h1>
        <small>Posted today</small>

        <div class="mb-4">
          <DruxtEntity v-for="tag of tags" :key="tag.id" class="d-inline-block mr-1" v-bind="{ ...tag, uuid: tag.id }">
            <template #default="{ entity }">
              <b-badge>{{ entity.attributes.name }}</b-badge>
            </template>
          </DruxtEntity>
        </div>

        <slot name="body" />
        <!-- <DruxtEntityForm v-model="model" :type="entity.type" /> -->
      </b-col>

      <b-col>
        <aside>
          <h3>Latest news</h3>

          <!-- @todo - Latest news view -->
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

<script>
import { DruxtEntityMixin } from 'druxt-entity'

export default {
  mixins: [DruxtEntityMixin],

  computed: {
    tags: ({ entity }) => entity.relationships.field_tags.data,
  }
}
</script>
