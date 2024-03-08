import { createSelector } from "@reduxjs/toolkit";

// on récupère les données du slice que l'on met dans des constantes
const selectAlbums = state => state.albums.albums;
const selectLoading = state => state.albums.loading;
const selectAlbumDetail = state => state.albums.albumDetail;
// on crée le selector
export const selectAlbumData = createSelector(
    [selectAlbums, selectLoading, selectAlbumDetail],
    // on effecte une destructuration des données
    (albums, loading, albumDetail)=>({albums, loading, albumDetail})
)