<template>
  <div>
    <div class="row justify-center">
      <h4 class="text-center">Оставьте заявку на бронь и мы с вами свяжемся в течение суток<br> для уточнения деталей и обсуждения цен</h4>
    </div>
    <div class="row">
      <div class="col-md-6 column justify-center items-center">
        <h5>В нашей сауне действует гибкая СИСТЕМА СКИДОК.</h5>
        <p>Вы можете получить скидку, если:</p>
        <q-list dense bordered padding class="rounded-borders">
      <q-item v-for="(stockItem, index) in stockItems" :key="index" clickable v-ripple>
        <q-item-section avatar>
          <q-icon color="primary" name="fas fa-check-square" />
        </q-item-section>
        <q-item-section>
          {{stockItem.text}}
        </q-item-section>
      </q-item>
    </q-list>
      </div>
      <div class="col-md-6">
          <q-stepper
          class="q-mr-xl"
      v-model="step"
      ref="stepper"
      color="primary"
      animated
    >
      <q-step
        :name="1"
        title="Контактное лицо"
        icon="fas fa-user-check"
        :done="step > 1"
        style="min-height: 200px;"
      >
        <q-form
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Ваше имя *"
        hint="Имя"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Пожалуйста заполните это поле']"
      />
            <q-input
        filled
        v-model="name"
        label="Ваше отчество *"
        hint="Отчество"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Пожалуйста заполните это поле']"
      />
            <q-input
        filled
        v-model="name"
        label="Ваш номер телефона *"
        hint="Телефон"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Пожалуйста заполните это поле']"
      />
    </q-form>
      </q-step>

      <q-step
        :name="2"
        title="Данные о заказе"
        icon="fas fa-database"
        :done="step > 2"
        style="min-height: 200px;"
      >
        <q-form
      class="q-gutter-md"
    >
            <div>
        <q-radio v-model="section" val="true" label="Маленькое отделени() *" color="cyan" /><br>
        <q-radio v-model="section" val="false" label="Большое отделение() *" color="cyan" />
            </div>
           <q-input filled v-model="date" mask="date" :rules="['date']" ref="testimonialDate" label="Дата заказа *">
      <template v-slot:append>
        <q-icon name="far fa-calendar-alt" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date v-model="date" @input="() => $refs.qDateProxy.hide()" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
                  <q-input filled v-model="time" mask="time" :rules="['time']" label="Время начала заказа *">
        <template v-slot:append>
          <q-icon name="far fa-clock" class="cursor-pointer">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-time v-model="time" />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <q-select v-model="model" :options="options" label="Продолжительность заказа *" />
      <q-select v-model="visit" :options="visitItems" label="Количество человек *" />
    </q-form>
      </q-step>

      <q-step
        :name="3"
        title="Дополнительные данные для связи (не обязательно)"
        icon="far fa-list-alt"
        style="min-height: 200px;"
      >
         <q-form
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="social"
        label="Cсылка на вашу страницу в социальных сетя"
      />

      <q-input
        filled
        type="email"
        v-model="email"
        label="Ваш e-mail"
      />
      <q-select v-model="mangal" :options="mangalItems" label="Нужен ли мангал" />
      <q-select v-model="venik" :options="venikItems" label="Веник" />
    </q-form>
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 3 ? 'Отправить' : 'Далее'" />
          <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Назад" class="q-ml-sm" />
        </q-stepper-navigation>
      </template>

      <template v-slot:message>
        <q-banner v-if="step === 1" class="bg-cyan-8 text-white q-px-lg">
          Данные о контактном лице для бронирования
        </q-banner>
        <q-banner v-else-if="step === 2" class="bg-cyan-8 text-white q-px-lg">
          Данные о вашем заказе
        </q-banner>
        <q-banner v-else-if="step === 3" class="bg-cyan-8 text-white q-px-lg">
          Дополнительная информация
        </q-banner>
      </template>
    </q-stepper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: null,
      options: [
        '2 часа', '3 часа', '4 часа', '5 часов', '6 часов', '7 часов','8 часов', '9 часов', '10 часов', '11 часов', '12 часов', 'более 12 часов'
      ],
      visitItems: [
        'меньше 4-х', '4-7', '8-10', '11-12', '13-15', 'больше 15-ти',
      ],
      visit: null,
      date: '2019/02/01',
      time: '00:00',
      section: false,
      step: 1,
      stockItems: [
        {text: 'вы заказали сауну на будний день (с понедельника по четверг включительно)'},
        {text: 'посетителей сауны меньше четырёх человек'},
        {text: 'ваш заказ по продолжительности превышает 8 часов'},
        {text: 'вы наш постоянный клиент и оставили отзыв на сайте'},
        {text: 'вы заказали сауну на будний день (с понедельника по четверг включительно)'},
      ],
      social: null,
      email: null,
      mangal: null,
      mangalItems: ['Да', 'Нет'],
      venik: null,
      venikItems: ['Принесу свой', 'Нужен', 'Не нужен'],

    }
  }
}
</script>