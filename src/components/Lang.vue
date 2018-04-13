<template>
<div>
  <div class="langTap">
    <p @click="Zh('zh')">切换中文</p>
    <p @click="Ko('Ko')">切换Ko</p>
    <p @click="changeZh('en')">切换英文</p>
    <p @click="changeLanguage('ko')">切换韩文</p>
    <p @click="ADD_JA('ja')">切换日文</p>
    <p @click="changeKO">切换韩文KO</p>
    <p @click="changeFR2">切换法语</p>
    <p @click="FR({lang:'fr-fr'})">fr-fr</p>
    <p @click="changeFR({lang:'FR'})">FR</p>
    <p @click="changeDE('DE')">切换DE</p>
    <p @click="changeDE2">切换德语</p>
  </div>
  {{lang}}
  <p>{{HEIGHT}}</p>
  <p>{{DE}}</p>
  <p>{{doneTodos(2)}}</p>
  <p>{{obj}}</p>
</div>
</template>
<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  data () {
    return {
      langu: '中文',
      DE: ''
    }
  },
  computed: {
    ...mapState({
      lang: 'lang',
      obj: 'newObj'
      // doneTodos: state => state.getters.doneTodos()
    }),
    ...mapGetters(
      ['doneTodos']
    ),
    HEIGHT () {
      return 'height'
    }
  },
  methods: {
    ...mapMutations([
      'ADD_JA',
      'changeLanguage',
      'changeDE'
    ]),
    ...mapMutations({
      Ja: 'ADD_JA',
      Zh: 'changeLanguage',
      Ko: 'changeLanguage'
    }),
    ...mapActions(['changeFR']),
    ...mapActions({
      FR: 'changeFR'
    }),
    changeZh (lang) {
      this.$store.commit('changeLanguage', {
        lang: lang
      })
    },
    changeChi (lang) {
      this.$store.commit({
        type: 'changeChinese',
        lang: '中文'
      })
    },
    changeJa (lang) {
      this.$store.commit({
        type: 'ADD_JA',
        lang: '日文'
      })
    },
    changeKO () {
      this.$store.dispatch('changeKO')
    },
    changeFR2 () {
      this.$store.dispatch({
        type: 'changeFR',
        lang: '法语'
      })
    },
    changeDE2 () {
      this.$store.dispatch('changeDE').then(() => {
        this.DE = '已切成德语了'
      })
    }
  }
  // store
}
</script>
<style lang="less" scoped>
  .langTap{
    width:100px;
    border:1px solid #f0f0f0;
    padding:20px;
    cursor: pointer;
  }
</style>
