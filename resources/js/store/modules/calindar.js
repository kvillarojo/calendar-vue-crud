import axios from 'axios'

const state = {
    message: null,
    error: null,
    fetching: false,
    data: [
        {
            id: 0,
            value: 1,
            isActive: true,
            eventName: 'Test Event'
        },
        {
            id: 0,
            value: 2,
            isActive: false,
            eventName: 'Test Event'
        }
    ]
}

const getters = {
    calindarEvents: (state) => state.data
}

const actions = {}

const mutations = {}

export default {
    state,
    getters,
    actions,
    mutations
}
