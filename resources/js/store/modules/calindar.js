import axios from 'axios'

const state = {
    message: null,
    error: null,
    fetching: false,
    data: [],
    monthName: 'Not Set'
}

const getters = {
    calindarEvents: (state) => state.data,
    monthName: (state) => state.monthName
}

const actions = {}

const mutations = {}

export default {
    state,
    getters,
    actions,
    mutations
}
