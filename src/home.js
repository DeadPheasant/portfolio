import React from 'react'

function Home() {
    return(
        <div className="Home">
            <div className="image">
                {/* <img className="icon" src={Icons} alt="" /> */}
            </div>
            <div className="extra_tab"></div>

            <div className="about">
                <h1>Hello,</h1>
                <h1>I'm <span className="color">Lovekesh</span>,</h1>
                <h1>Web Developer &#x26; Designer.</h1>
                <p>HTML / CSS / JavaScript / ReactJS</p>
            </div>
        </div>
    )
}

export default Home