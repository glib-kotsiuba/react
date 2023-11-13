import React from 'react';
import classes from '../styles/UserCard.module.css'

const UserCard = ({ userObj, userInfo }) => {
    function renderUserProgress(currentValue, maxValue){
        let percentComplete = Math.floor((currentValue / maxValue)*100);
        return(
            <div className={classes.userProgress}>
                <progress value={currentValue} max={maxValue}>
                    {percentComplete}%
                </progress>
                <div className={classes.card__info}>
                    <p>{currentValue} / {maxValue} Modules</p>
                <div>{percentComplete}%</div>
            </div>
        </div>
        )
    }
    return(
        <div className={classes.card}>
            <div className={classes.image__container}>
                <img
                src={userObj.image}
                alt=""
                />
                <div className={classes.level}>{userObj.level}</div>
            </div>
            <h3 className={classes.card__title}>{userObj.title}</h3>
            <div className={classes.card__info}>
                <div className={classes.card__contact}>
                    <img
                        src={userInfo.avatar}
                        alt={userInfo.name}
                        className={classes.card__avatar}
                    />
                    <p>{userInfo.name}</p>
                </div>
                <div className={classes.rating}>
                    <p>{userObj.rating}★</p>
                </div>
            </div>

            {userObj.isMyCource ? renderUserProgress(userObj.finishedModules, userObj.modules) : null}

            <div className={classes.card__info}>
                <div>{userObj.students} Student</div>
                <div>{userObj.modules} Modules</div>
                <div>{Math.floor(userObj.duration/60/60)}h {Math.floor(userObj.duration/60 % 60)}m</div>
            </div>
        </div>
    )
}

export default UserCard;