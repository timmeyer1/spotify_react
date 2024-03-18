import { createSelector } from "@reduxjs/toolkit";

const selectLoading = state => state.user.loading;
const selectUserFavorite = state => state.user.userFavorite;
const selectUser = state => state.user.user;
const selectAvatar = state => state.user.avatar

// on crée le selector
export const selectUserData = createSelector(
    [selectLoading, selectUserFavorite, selectUser, selectAvatar],
    (loading, userFavorite, user, avatar) => ({loading, userFavorite, user, avatar})
)