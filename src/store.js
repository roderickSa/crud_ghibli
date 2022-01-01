import { createStore } from "vuex"

const store = createStore({
    state: {
        user: {
            mail: 'rodolfo@admin.com',
            pass: 'rodolfito'
        },
        copy_films: [],
        films: [],
        film: { id: '', description: '', director: '', image: '', movie_banner: '', original_title: '', original_title_romanised: '', producer: '', release_date: '', rt_score: '', running_time: '', title: ''},
        modalActive: false,
        loadingActive: false,
        token: ''
    },
    mutations: {
        setToken(state, payload) {
            state.token = payload
        },
        setFilms( state, payload ) {
            state.films = payload
            state.copy_films = payload
        },
        filteredFilms( state, payload ) {
            state.films = state.copy_films
            // const value = payload.target.value
            const new_films = state.films.filter(film => (film.title.toLowerCase().indexOf(payload) !== -1))
            state.films = new_films
        },
        setFilm( state, payload ) {
            state.film = payload
        },
        setActiveModal(state) {
            state.modalActive = true
        },
        setInactiveModal(state) {
            state.modalActive = false
        },
        setActiveLoading(state) {
            state.loadingActive = true
        },
        setInactiveLoading(state) {
            state.loadingActive = false
        },
    },
    actions:{
        async getToken({ commit, state }) {
            const response = await fetch('http://127.0.0.1:8001/api/auth/login', {
                method: 'post',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }),
                body: JSON.stringify(state.user),
            });
            const { access_token } = await response.json()
            localStorage.setItem('token', access_token)
            commit('setToken', access_token)
        },
        async getFilms({commit, state}) {
            try {
                const send = await fetch('http://127.0.0.1:8001/api/ghibli/film', {
                    method: 'get',
                    headers: new Headers({
                        'Authorization': 'Bearer ' + state.token,
                        'Content-Type': 'application/json'
                    }),
                });
                const { films, status } = await send.json()
                if(status === false) {
                    this.getToken()
                }
                commit('setFilms', films)
            } catch (error) {
                // aca podriamos llamr al token denuevo
                console.log(error)
            }
        },
        async getFilm({commit, state}, payload) {
            // console.log(payload)
            // return
            const send = await fetch('http://127.0.0.1:8001/api/ghibli/film/detail/' + payload, {
                method: 'get',
                headers: new Headers({
                    'Authorization': 'Bearer ' + state.token,
                    'Content-Type': 'application/json'
                }),
            });
            const { film, status } = await send.json()
            if (status === false) {
                this.getToken()
            }
            if (film === undefined || Object.keys(film).length === 0 || !film ) {
                commit('setFilm', null)
                return
            }
            commit('setFilm', film)
        }
    },
    getters: {
        films(state) {
            return state.films
        },
        // films_fitered:(state) => (event) => {
        //     const value = event.target.value
        //     return state.films.filter(film => (film.title.indexOf(value) !== -1 ) )
        // }
    }
})

export default store