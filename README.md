# vuex-demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
# Vuex demo

集中式存储管理应用

* state ，驱动应用的数据源；
* view，以声明方式将state映射到视图；
* actions，响应在view上的用户输入导致的状态变化。

**STORE**

> 改变store状态的唯一途径就是显示的提交
>
> 每个应用将仅仅包含一个store 实例
>
> ```js
> computed: mapState({
>   lang: state => state.lang,
>   langs (state) {
>     return state.lang + this.langu
>   }
> })
> ```
>
> ```js
> mapState(['lang'])
> ```
>
> 和局部计算属性混合使用
>
> ```
> ...mapState(['lang']),
> ```
>
> end

**getter**

>其返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算
>
>再通过属性访问的时候是作为vue响应式系统的一部分缓存其中的
>
>getter再通过方法访问时不会缓存，每次都会被调用
>
>```js
>...mapGetters(['doneTodos']),
>```
>
>end

**mutation**

>每个mutation都有一个字符串的事件类型(type)和一个回调函数（handler，第一个参数为state）。
>
>提交载荷 (大多数情况下是一个对象)
>
>```js
>changeLanguage (state, lang) {
>  state.lang = lang
>}
>
>this.$store.commit('changeLanguage',lang)
>载荷：lang
>#####==============================================###########
>this.$store.commit('changeLanguage', {
>  lang: lang
>})
>载荷：{
>  lang: lang
>}
>// type方式声明
>this.$store.commit({
>  type: 'changeChinese',
>  lang: '中文'
>})
>```
>
>当需要在对象上添加新属性时：
>
>* 使用Vue.set(obj, 'newProp', 123) 或者以新对象替换老对象。
>
>```js
>changeChinese (state, lang) {
>	state.lang = lang.lang
>	state.newObj = {...state.lang, newProp: 123}
>}
>```
>
>同步事务
>
>```js
>    ...mapMutations([
>      'ADD_JA',
>      'changeLanguage'
>    ]),
>```
>
>```js
>...mapMutations({
>      Ja: 'ADD_JA',
>      Zh: 'changeLanguage',
>      Ko: 'changeLanguage'
>    }),
>```
>
>End

**Action**

>提交的是mutation，而不是直接变更状态
>
>可以包含任意异步操作
>
>Action 通过 `store.dispatch` 方法触发：
>
>```js
>this.$store.dispatch('changeKO')
>```
>
>```Js
>changeFR ({commit,state},lang) {
>    setTimeout(() => {
>      commit('changeFR',lang)
>    }, 300)
>  }
>```
>
>```js
>...mapActions(['changeFR']),
>```
>
>```js
>...mapActions({
>	FR: 'changeFR'
>}),
>```
>
>store.dispatch可以处理被触发的action处理函数返回的Promise，并且store.dispatch仍然返回Promise
>
>```js
>changeDE2 () {
>  	this.$store.dispatch('changeDE').then(() => {
>    	this.DE = '已切成德语了'
>  	})
>}
>```
>
>
>
>End





