import React from 'react'
import { connect } from 'react-redux';
import Users from './Users';
import { acceptFollow, acceptUnfollow, toggleFollowing, getUsersThunkCreator, follow } from '../../redux/Users-reduser';
import Preloader from '../common/Preloader';
import { getUsersSuper, getSelectPageSize, getSelectTotalUsersCount, getSelectCurrentPage, getSelectIsFetching, getSelectFollowingInProgress } from '../../redux/Users-selectors';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator (this.props.currentPage, this.props.pageSize);
    }
 

    onPageChange = (currentPage) => {
        this.props.getUsersThunkCreator (currentPage, this.props.pageSize);

    }

    render() {
        return <>
            {this.props.isFetching && <Preloader/>}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChange={this.onPageChange}
                currentPage={this.props.currentPage}
                users={this.props.users}
                acceptUnfollow={this.props.acceptUnfollow}
                acceptFollow={this.props.acceptFollow}
                toggleFollowing={this.props.toggleFollowing}
                followingInProgress={this.props.followingInProgress}
                follow={this.props.follow}/>
        </>
    };
}

let mapSteteToProps = (state) => {
    return {
        users: getUsersSuper(state),
        pageSize: getSelectPageSize(state),
        totalUsersCount: getSelectTotalUsersCount(state),
        currentPage: getSelectCurrentPage(state),
        isFetching: getSelectIsFetching(state),
        followingInProgress: getSelectFollowingInProgress(state)
    }
}

export default connect(mapSteteToProps, 
    {acceptFollow, acceptUnfollow, toggleFollowing, getUsersThunkCreator, follow})
    (UsersContainer);