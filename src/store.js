import { createStore } from "vuex"

const store = createStore({
    state: {
        copy_films: [],
        films: [],
        film: { id: '', description: '', director: '', image: '', movie_banner: '', original_title: '', original_title_romanised: '', producer: '', release_date: '', rt_score: '', running_time: '', title: ''},
        modalActive: false,
        loadingActive: false,
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMVwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY0MTA0NjI1NywiZXhwIjoxNjQxMTMyNjU5LCJuYmYiOjE2NDEwNDYyNTksImp0aSI6ImgyMDJGTGpST2R5UHZ0OFEiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.Su_PEcp_k5ScYhXedxWWnSzJxTD18Vo_bpDpLdY6kZ4'
    },
    mutations: {
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
        async getFilms({commit, state}) {
            const send = await fetch('http://127.0.0.1:8001/api/ghibli/film', {
                method: 'get',
                headers: new Headers({
                    'Authorization': 'Bearer ' + state.token,
                    'Content-Type': 'application/json'
                }),
            });
            const {films} = await send.json()
            commit('setFilms', films)
        },
        async getFilm({commit, state}, payload) {
            console.log(payload)
            // return
            const send = await fetch('http://127.0.0.1:8001/api/ghibli/film/detail/' + payload, {
                method: 'get',
                headers: new Headers({
                    'Authorization': 'Bearer ' + state.token,
                    'Content-Type': 'application/json'
                }),
            });
            const { film } = await send.json()
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