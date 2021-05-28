import React from 'react'
import "./HeroPopup.css"

export default function HeroPopup(prop) {
    const { showDetail, onClickClose } = prop

    return (
        <div>

            <div className="content-popup">
                <div className="content-popup-bg" >
                    <div className="content-popup-use">
                        <div className="box-img-vert" ><img className="img-vert-hero" src={`http://cdn.dota2.com/apps/dota2/images/heroes/${showDetail.name.substr(14)}_vert.jpg`} /></div>
                        <div><h2>{showDetail.localized_name}</h2>
                            <div className="detail">ATTRIBUTE : {showDetail.primary_attr.toUpperCase()}</div>

                            <div className="detail">Attack Type : {showDetail.attack_type == "Melee" ? <img className="icon-attack" src="sword.png" /> : <img className="icon-attack" src="bow.png" />}</div>
                            <div className="detail">  Roles : {showDetail.roles.map((role, index) => (
                                <span>   {role}</span>

                            ))}
                            </div>
                        </div>

                        <button
                            type="button"
                            class="btn-close BTN-Close"
                            aria-label="Close"
                            onClick={onClickClose} /></div>
                </div>
            </div>

        </div >
    )
}
