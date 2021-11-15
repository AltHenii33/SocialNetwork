import React from 'react'
import Styles from './Users.module.css';
import { NavLink } from 'react-router-dom';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span onClick={() => { props.onPageChange(p); }} className={props.currentPage === p && Styles.selectedPage}> {p} </span>
            })}
        </div>
        {
            props.users && props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/Profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : 'data:image/jpeg;base64,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'} className={Styles.userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id == u.id)} onClick={() => {
                                props.follow(u.id, u.followed)
                            }}>unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id == u.id)} onClick={() => { 
                                props.follow(u.id, u.followed)
                             }}>follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>
            )
        }
    </div>
};
export default Users;