<template>
  <div class="q-pa-md">
    <q-stepper
      v-model="step"
      ref="stepper"
      color="primary"
      animated
    >
      <q-step
        :name="1"
        title="Введите данные"
        icon="settings"
        :done="step > 1"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore perferendis impedit dolor distinctio accusamus libero cumque molestiae ratione commodi, quos neque molestias facilis modi animi velit amet qui dolorem delectus.
      </q-step>

      <q-step
        :name="2"
        title="Дополнительная информация"
        caption="Optional"
        icon="create_new_folder"
        :done="step > 2"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, corporis.
      </q-step>


      <q-step
        :name="3"
        title="Создание брони"
        icon="add_comment"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusamus fuga assumenda suscipit, rem quia.
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 4 ? 'Отправить' : 'Далее'" />
          <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Назад" class="q-ml-sm" />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      step: 1
    }
  }
}
</script>