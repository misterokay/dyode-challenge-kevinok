import React from 'react';

const AnnouncementBar = ({ msg, mobileMsg, backgroundColor, textColor, link }) => {
    const style = {
        backgroundColor: backgroundColor,
        color: textColor
    }

    return (
        <div className="announcement-bar" style={style}>
            {link ? 
                <>
                    <a href={link} className={mobileMsg ? "announcement-text desktop-only" : "announcement-text"}>{msg}</a>
                    <a href={link} className="announcement-text mobile-only">{mobileMsg}</a>
                </>
                :
                <>
                    <span className={mobileMsg ? "announcement-text desktop-only" : "announcement-text"}>{msg}</span>
                    <span className="announcement-text mobile-only">{msg}</span>
                </>
            }
        </div>
    );
}

export default AnnouncementBar;