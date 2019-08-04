<template>
<div>
  <div class="row q-mt-md q-mb-md justify-center">
        <q-btn-group>
      <q-btn color="primary" label="Все" />
      <q-btn color="primary" label="Малое отделение" />
      <q-btn color="primary" label="Большое отделение" />
    </q-btn-group>
  </div>
  <div class="row">
        <div v-for="(galleryItem, index) in galleryItems" :key="index" class="col-md-2">
      <img width="100%" :src="galleryItem.src" alt="" color="primary" @click="fixed = true" clickable />
    </div>

    <q-dialog v-model="fixed">
      <q-card style="width: 930px; max-width: 80vw;">

        <q-separator />

        <q-card-section>
          <img src="https://cdn.quasar.dev/img/mountains.jpg" alt="">
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn flat label="Закрыть" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      fixed: false,
      galleryItems: [
        {
          src: 'https://cdn.quasar.dev/img/mountains.jpg',
          tag: 'small',
          name: 'Картинка',
          i: '',

        },
        {
          src: 'https://cdn.quasar.dev/img/mountains.jpg',
          tag: 'small',
          name: 'Картинка',
          i: '',

        },
        {
          src: 'https://cdn.quasar.dev/img/mountains.jpg',
          tag: 'small',
          name: 'Картинка',
          i: '',

        },
        {
          src: 'https://cdn.quasar.dev/img/mountains.jpg',
          tag: 'small',
          name: 'Картинка',
          i: '',

        },
        {
          src: 'https://cdn.quasar.dev/img/mountains.jpg',
          tag: 'small',
          name: 'Картинка',
          i: '',

        },

        {
          src: 'https://cdn.quasar.dev/img/mountains.jpg',
          tag: 'small',
          name: 'Картинка',
          i: '',

        },
        {
          src: 'https://cdn.quasar.dev/img/mountains.jpg',
          tag: 'small',
          name: 'Картинка',
          i: '',

        },
        {
          src: 'https://cdn.quasar.dev/img/mountains.jpg',
          tag: 'small',
          name: 'Картинка',
          i: '',

        },
        {
          src: 'https://cdn.quasar.dev/img/mountains.jpg',
          tag: 'small',
          name: 'Картинка',
          i: '',

        },
        {
          src: 'https://cdn.quasar.dev/img/mountains.jpg',
          tag: 'small',
          name: 'Картинка',
          i: '',

        },
        {
          src: 'https://cdn.quasar.dev/img/mountains.jpg',
          tag: 'small',
          name: 'Картинка',
          i: '',

        },
        {
          src: 'https://cdn.quasar.dev/img/mountains.jpg',
          tag: 'small',
          name: 'Картинка',
          i: '',

        },
        {
          src: 'https://cdn.quasar.dev/img/mountains.jpg',
          tag: 'small',
          name: 'Картинка',
          i: '',

        },
        {
          src: 'https://cdn.quasar.dev/img/mountains.jpg',
          tag: 'small',
          name: 'Картинка',
          i: '',

        },
        {
          src: 'https://cdn.quasar.dev/img/mountains.jpg',
          tag: 'small',
          name: 'Картинка',
          i: '',

        },
        {
          src: 'https://cdn.quasar.dev/img/mountains.jpg',
          tag: 'small',
          name: 'Картинка',
          i: '',

        },
        {
          src: 'https://cdn.quasar.dev/img/mountains.jpg',
          tag: 'small',
          name: 'Картинка',
          i: '',

        },

      ]
    }
  }
}
</script>

<style scoped>

</style>

