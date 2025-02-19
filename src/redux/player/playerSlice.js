import { createSlice } from "@reduxjs/toolkit"

// on va initialiser nos state dans une constante initialeState
const initialState = {
    currentSong: [], //tableau de chansons
    currentAlbum: [], // album en cours de lecture
    currentIndex: 0, // index de la chanson en cours de lecture
    currentArtist: '', //artiste en cours de lecture
    isActive: false, // état du player
    isPlaying: false, // etat de lecture
    activeSong: {}, // chanson en cours de lecture
}

// création du slice pour la gestion du player
const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers:{
        setActiveSong: (state, action) => {
            // stockage de la chanson en lecture dans activeSong
            state.activeSong = action.payload?.songs[action.payload?.index];
            // stockage du tableau de chansons
            state.currentSong = action.payload?.data?.songs
            // stockage de l'index
            state.currentIndex = action.payload?.index;
            // stockage de l'état du player
            state.isActive = true;
        },

        setActiveAlbum: (state, action) => {
            // on stock les infos de l'album
            state.currentAlbum = action.payload?.data;
        },

        // pour avancer la liste de lecture
        nextSong: (state, action) => {
            // on récupère la chanson dans le tableau à l'index donné
            state.activeSong = state.currentSong[action.payload];
            // on stock l'index
            state.currentIndex = action.payload;
            state.isActive = true;
        },
        // pour reculer la liste de lecture
        prevSong: (state, action) => {
            // on récupère la chanson dans le tableau à l'index donné
            state.activeSong = state.currentSong[action.payload];
            // on stock l'index
            state.currentIndex = action.payload;
            state.isActive = true;
        },

        playPause: (state, action) => {
            state.isPlaying = action.payload
        },
        
        setCurrentArtist: (state, action) => {
            state.currentArtist = action.payload
        }
    }
})

// export des actions 
export const { setActiveSong, setActiveAlbum, nextSong, prevSong, playPause, setCurrentArtist } = playerSlice.actions;

// export du reducer
export default playerSlice.reducer