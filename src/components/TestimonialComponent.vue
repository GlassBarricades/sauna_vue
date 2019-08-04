<template>
  <div class="row full-width items-center" style="min-height: 90vh;">
      <div class="col-md-6">
      <q-scroll-area class="shadow-10 q-ml-md" style="height: 85vh; max-width: 90%;">
         <ul style="padding-left: 0" class="q-list q-list--bordered q-list--separator" bordered separator>
      <q-item v-for="(testimonialItem, index) in testimonialItems" :key="index" tag="li" clickable v-ripple>
                <q-item-section avatar>
          <q-avatar size="80px">
            <img :src="testimonialItem.avatar">
          </q-avatar>
        </q-item-section>
        <q-item-section>
        <q-item-label caption>{{ testimonialItem.userName }}</q-item-label>
        <q-item-label caption>{{ testimonialItem.date }}</q-item-label>
        <q-item-label>{{ testimonialItem.text }}</q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="li" clickable v-ripple>
        <q-item-section>
          <q-item-label>Item with caption</q-item-label>
          <q-item-label caption>Caption</q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="li" clickable v-ripple>
        <q-item-section>
          <q-item-label overline>OVERLINE</q-item-label>
          <q-item-label>Item with caption</q-item-label>
        </q-item-section>
      </q-item>
    </ul>
      </q-scroll-area>
    </div>
      <div class="col-md-6">
          <div class="q-pa-md" style="max-width: 500px">
            <q-form
      class="q-gutter-md"
    >
    <q-input
        v-model="userName"
        ref="testimonialName"
        filled
        type="text"
      />

          <q-input filled v-model="date" mask="date" :rules="['date']" ref="testimonialDate">
      <template v-slot:append>
        <q-icon name="far fa-calendar-alt" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date v-model="date" @input="() => $refs.qDateProxy.hide()" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>

      <q-input
      v-model="text"
      filled
      ref="testimonialText"
      type="textarea"

    />
            <div>
        <q-btn label="Отправить" v-on:click="addComment" color="primary"/>
      </div>

     </q-form>
  </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      social: '',
      date: '2019/02/01',
      avatar: '',
      text: '',
      userName: '',
      testimonialItems: [
          {avatar: 'https://pp.userapi.com/c846020/v846020543/1597da/bkqVbPSqB7A.jpg', name: '1', userName: 'Корней Чуковский', date: '23.06.1988', time: '18:05', social: 'fab fa-vk', text: 'Был в этой сауне пару раз с друзьями.очень понравилось!в парной не слабая температура,вода в бассейне очень приятная-летняя(не ледяная и не горячая)отдыхали в сауне за еврооптом около 8 школы,так там хлорки в бассейне было столько,что не могли открыть глаза,а здесь вообще не чувствовалась.нам очень понравилось!обязательно еще приедем)))для человек 5-6 само то!хотя нас было человек 9 и нам было пофиг)советую побывать в данной сауне!)'}, 
          {avatar: 'https://pp.userapi.com/c846020/v846020543/1597da/bkqVbPSqB7A.jpg', name: '2', userName: 'Корней Чуковский', date: '23.06.1988', time: '18:05', social: 'fab fa-vk', text: 'Был в этой сауне пару раз с друзьями.очень понравилось!в парной не слабая температура,вода в бассейне очень приятная-летняя(не ледяная и не горячая)отдыхали в сауне за еврооптом около 8 школы,так там хлорки в бассейне было столько,что не могли открыть глаза,а здесь вообще не чувствовалась.нам очень понравилось!обязательно еще приедем)))для человек 5-6 само то!хотя нас было человек 9 и нам было пофиг)советую побывать в данной сауне!)'},  
          {avatar: 'https://pp.userapi.com/c846020/v846020543/1597da/bkqVbPSqB7A.jpg', name: '3', userName: 'Корней Чуковский', date: '23.06.1988', time: '18:05', social: 'fab fa-vk', text: 'Был в этой сауне пару раз с друзьями.очень понравилось!в парной не слабая температура,вода в бассейне очень приятная-летняя(не ледяная и не горячая)отдыхали в сауне за еврооптом около 8 школы,так там хлорки в бассейне было столько,что не могли открыть глаза,а здесь вообще не чувствовалась.нам очень понравилось!обязательно еще приедем)))для человек 5-6 само то!хотя нас было человек 9 и нам было пофиг)советую побывать в данной сауне!)'}, 
          {avatar: 'https://pp.userapi.com/c846020/v846020543/1597da/bkqVbPSqB7A.jpg', name: '4', userName: 'Корней Чуковский', date: '23.06.1988', time: '18:05', social: 'fab fa-vk', text: 'Был в этой сауне пару раз с друзьями.очень понравилось!в парной не слабая температура,вода в бассейне очень приятная-летняя(не ледяная и не горячая)отдыхали в сауне за еврооптом около 8 школы,так там хлорки в бассейне было столько,что не могли открыть глаза,а здесь вообще не чувствовалась.нам очень понравилось!обязательно еще приедем)))для человек 5-6 само то!хотя нас было человек 9 и нам было пофиг)советую побывать в данной сауне!)'},  
          {avatar: 'https://pp.userapi.com/c846020/v846020543/1597da/bkqVbPSqB7A.jpg', name: '5', userName: 'Корней Чуковский', date: '23.06.1988', time: '18:05', social: 'fab fa-vk', text: 'Был в этой сауне пару раз с друзьями.очень понравилось!в парной не слабая температура,вода в бассейне очень приятная-летняя(не ледяная и не горячая)отдыхали в сауне за еврооптом около 8 школы,так там хлорки в бассейне было столько,что не могли открыть глаза,а здесь вообще не чувствовалась.нам очень понравилось!обязательно еще приедем)))для человек 5-6 само то!хотя нас было человек 9 и нам было пофиг)советую побывать в данной сауне!)'},  
          {avatar: 'https://pp.userapi.com/c846020/v846020543/1597da/bkqVbPSqB7A.jpg', name: '6', userName: 'Корней Чуковский', date: '23.06.1988', time: '18:05', social: 'fab fa-vk', text: 'Был в этой сауне пару раз с друзьями.очень понравилось!в парной не слабая температура,вода в бассейне очень приятная-летняя(не ледяная и не горячая)отдыхали в сауне за еврооптом около 8 школы,так там хлорки в бассейне было столько,что не могли открыть глаза,а здесь вообще не чувствовалась.нам очень понравилось!обязательно еще приедем)))для человек 5-6 само то!хотя нас было человек 9 и нам было пофиг)советую побывать в данной сауне!)'},  
          {avatar: 'https://pp.userapi.com/c846020/v846020543/1597da/bkqVbPSqB7A.jpg', name: '7', userName: 'Корней Чуковский', date: '23.06.1988', time: '18:05', social: 'fab fa-vk', text: 'Был в этой сауне пару раз с друзьями.очень понравилось!в парной не слабая температура,вода в бассейне очень приятная-летняя(не ледяная и не горячая)отдыхали в сауне за еврооптом около 8 школы,так там хлорки в бассейне было столько,что не могли открыть глаза,а здесь вообще не чувствовалась.нам очень понравилось!обязательно еще приедем)))для человек 5-6 само то!хотя нас было человек 9 и нам было пофиг)советую побывать в данной сауне!)'},
          {avatar: 'https://pp.userapi.com/c846020/v846020543/1597da/bkqVbPSqB7A.jpg', name: '8', userName: 'Корней Чуковский', date: '23.06.1988', time: '18:05', social: 'fab fa-vk', text: 'Был в этой сауне пару раз с друзьями.очень понравилось!в парной не слабая температура,вода в бассейне очень приятная-летняя(не ледяная и не горячая)отдыхали в сауне за еврооптом около 8 школы,так там хлорки в бассейне было столько,что не могли открыть глаза,а здесь вообще не чувствовалась.нам очень понравилось!обязательно еще приедем)))для человек 5-6 само то!хотя нас было человек 9 и нам было пофиг)советую побывать в данной сауне!)'}, 
          ],
    }
  },
  methods: {
    addComment: function () {
      this.testimonialItems.unshift({
        text: this.$refs.testimonialText.value,
        userName: this.$refs.testimonialName.value,
        date: this.$refs.testimonialDate.value,
      })
      }
  },
};
</script>

<style scope>



</style>