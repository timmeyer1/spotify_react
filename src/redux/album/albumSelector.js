import { createSelector } from "@reduxjs/toolkit";

// on récupère les données du slice que l'on met dans des constantes
const selectAlbums = state => state.albums.albums;
const selectLoading = state => state.albums.loading;
// on crée le selector
export const selectAlbumData = createSelector(
    [selectAlbums, selectLoading],
    // on effecte une destructuratiob des données
    (albums, loading)=>({albums, loading})
)