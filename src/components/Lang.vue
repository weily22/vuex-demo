<template>
<div>
  <div class="langTap">
    <p @click="changeChi('zh')">切换中文</p>
    <p @click="changeZh('en')">切换英文</p>
    <p @click="changeZh('ko')">切换韩文</p>
  </div>
  {{lang}}
  <p>{{HEIGHT}}</p>
  <p>{{doneTodos(2)}}</p>
</div>
</template>
<script>
import {mapState, mapGetters} from 'vuex'
export default {
  data () {
    return {
      langu: '中文'
    }
  },
  computed: {
    ...mapState({
      lang: 'lang'
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
