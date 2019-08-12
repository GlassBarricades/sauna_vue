<template>
  <div>
      <div class="column home-head justify-center items-center">
      <!-- <img height="500" src="../assets/Bezymyanny-2.svg" alt /> -->
      <h1 class="text-center text-primary">Круглосуточная сауна<br> в городе Жодино</h1>
      <q-btn to="/booking" size="22px" class="q-px-xl q-py-xs" color="secondary" label="Забронировать" />
  </div>
  <div class="home-previos column justify-center items-center">
    <h2 class="text-center">Почему мы:</h2>
    <q-splitter
      v-model="splitterModel"
      style="height: 400px; max-width: 1000px"
    >

      <template v-slot:before>
        <div class="q-pa-md">
          <q-tree
            :nodes="simple"
            node-key="label"
            selected-color="primary"
            :selected.sync="selected"
            default-expand-all
          />
        </div>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="selected"
          animated
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="Преимущества">
            <div class="text-h4 q-mb-md">Welcome</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>

          <q-tab-panel name="Парная">
            <div class="text-h4 q-mb-md">Парная</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>

          <q-tab-panel name="Комната отдыха">
            <div class="text-h4 q-mb-md">Комната отдыха</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>

          <q-tab-panel name="Бассейн">
            <div class="text-h4 q-mb-md">Бассейн</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>
                    <q-tab-panel name="Телевизор">
            <div class="text-h4 q-mb-md">Телевизор</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>
                    <q-tab-panel name="Банкетный стол">
            <div class="text-h4 q-mb-md">Банкетный стол</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>
                    <q-tab-panel name="Система скидок">
            <div class="text-h4 q-mb-md">Система скидок</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
  </div>
</template>

<script>
export default {
   data () {
    return {
      splitterModel: 50,
      selected: 'Преимущества',
      simple: [
        {
          label: 'Преимущества',
          children: [
            {
              label: 'Парная',
              icon: 'fas fa-clipboard-list'
            },
            {
              label: 'Комната отдыха',
              icon: 'fas fa-clipboard-list'
            },
            {
              label: 'Бассейн',
              icon: 'fas fa-clipboard-list'
            },
            {
              label: 'Телевизор',
              icon: 'fas fa-clipboard-list'
            },
            {
              label: 'Банкетный стол',
              icon: 'fas fa-clipboard-list'
            },
            {
              label: 'Система скидок',
              icon: 'fas fa-clipboard-list'
            },
          ]
        }
      ]
    }
  }
};
</script>

<style scoped>
.home-head {
  background-image: url("https://www.angha-spa.com/wp-content/uploads/2019/01/AdobeStock_184448826.jpg") !important;
  height: 92vh;
  width: 100%;
}
.home-previos {
  height: 60vh;
  width: 100%;
}
</style>
