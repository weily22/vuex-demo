const ADD_JA = 'ADD_JA'
export default {
    // 新添语言 默认日语
    [ADD_JA](state, lang) {
        state.lang = (lang || 'ja')
    }
}