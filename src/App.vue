<template>
  <div id="app">
       <q-layout view="lHh Lpr lFf">
    <q-header elevated class="">
      <q-toolbar app>
        <q-btn
          flat
          dense
          @click.stop="drawer = !drawer"
          aria-label="Menu"
          icon="fas fa-bars"
          class="mobile-only"
        />

        <q-toolbar-title>
          <img height="50" src="./assets/Bezymyanny-2.svg" alt="">
          <!-- <img height="50" src="./assets/Logo.svg" alt=""> -->
          
         <!-- Сауна "На Набережной" -->
        </q-toolbar-title>

        <div class="desktop-only">
          <q-btn flat v-for="(menuItem, index1) in menuItems" :to="menuItem.path" :key="index1">{{ menuItem.title }}</q-btn>
        </div>

        <q-btn class="desktop-only" color="secondary">Заказать обратный звонок</q-btn>
        <a href="tel:+375297680118"><q-btn class="mobile-only" color="secondary">Позвонить</q-btn></a>

        <div class="desktop-only">
          <q-btn flat v-for="(socialItem, index2) in socialItems" :key="index2" target="_blank"><q-icon :name='socialItem.icon' /></q-btn>
        </div>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      bordered
      persistent=false
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Меню</q-item-label>
        <q-separator />
        <q-item v-for="(menuItem, index3) in menuItems" :to="menuItem.path" :key="index3" exact>
          <q-item-section>
            <q-item-label>{{menuItem.title}}</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />

        <q-item-label header>Социальные сети</q-item-label>
        <q-item :class="socialItem.color" v-for="(socialItem, index) in socialItems" :key="index" clickable tag="a" target="_blank" :href='socialItem.link'>
          <q-item-section  avatar>
            <q-icon :name='socialItem.icon' />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ socialItem.title }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      drawer: null,
      // leftDrawerOpen: this.$q.platform.is.desktop,
      menuItems: [
          { title: 'Главная', path: '/'},
          { title: 'Акции', path: '/stock'},
          { title: 'Бронирование', path: '/booking'},
          { title: 'Услуги', path: '/service'},
          { title: 'Фотографии', path: '/gallery'},
          { title: 'Отзывы', path: '/testimonial'},
          { title: 'Контакты', path: '/contact'},
        ],
      socialItems: [
          {title: 'Вконтакте', link: 'https://vk.com/saunazhodino', icon: 'fab fa-vk', color: 'text-primary'},
          {title: 'FaceBook', link: 'https://www.facebook.com/groups/sauna.zhodino/', icon: 'fab fa-facebook', color: 'text-primary'},
          {title: 'Одноклассники', link: 'https://ok.ru/sauna.zhodino', icon: 'fab fa-odnoklassniki-square', color: 'text-warning'},
      ], 
    }
  },
}
</script>
