import React from 'react'
import "./HeroPopup.css"

export default function HeroPopup(prop) {
    const { showDetail, onClickClose } = prop

    return (
        <div>
            <div className="content">

                <div className="content-popup-bg" >
                    <div className="content-popup-use">
                        <div className="img-hero"><img className="img-hero" src={`http://cdn.dota2.com/apps/dota2/images/heroes/${showDetail.name.substr(14)}_vert.jpg`} /></div>
                        <div className="detail-hero"><p> <h2>{showDetail.localized_name}</h2>
                        ATTRIBUTE : {showDetail.primary_attr.toUpperCase()}<br />
                        Attack Type : {showDetail.attack_type == "Melee" ? <img className="icon-attack" src="sword.png" /> : <img className="icon-attack" src="bow.png" />} <br />
                        Roles : {showDetail.roles.map((role, index) => (
                            <>{role} </>

                        ))} </p></div>


                        <button
                            type="button"
                            class="btn-close BTN-Close"
                            aria-label="Close"
                            onClick={onClickClose} />
                    </div>
                </div>
            </div>
        </div>
    )
}
