import { createSelector } from "reselect";

export const getSelectUsers = (state) => {
    return state.UsersPage.users;
}

export const getUsersSelector = (state) => {
    return getSelectUsers(state).filter( u => true )
}

export const getUsersSuper = createSelector(getSelectUsers, (users) => {
    return users.filter( u => true );
})

export const getSelectPageSize = (state) => {
    return state.UsersPage.pageSize;
}

export const getSelectTotalUsersCount = (state) => {
    return state.UsersPage.totalUsersCount;
}

export const getSelectCurrentPage = (state) => {
    return state.UsersPage.currentPage;
}

export const getSelectIsFetching = (state) => {
    return state.UsersPage.isFetching;
}

export const getSelectFollowingInProgress = (state) => {
    return state.UsersPage.followingInProgress;
}
