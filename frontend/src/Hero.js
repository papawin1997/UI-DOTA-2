import React, { useState } from 'react'
import HeroPopup from './components/HeroPopup';
import "./App.css"


export default function Hero(props) {
    const { heros } = props
    const [showDetail, setShowDetail] = useState(false)
    function onClickClose() {
        setShowDetail(false);
    }
    function onClickImg(hero) {
        setShowDetail(hero);
    }

    let showNewHero = null;
    if (!!showDetail) {
        showNewHero = (
            <HeroPopup showDetail={showDetail} onClickClose={onClickClose} />
        );
    }



    return (
        <div className="item-heros">{showNewHero}
            {heros.map((hero) => (
                <img className="show-img" onClick={() => { onClickImg(hero) }} src={`http://cdn.dota2.com/apps/dota2/images/heroes/${hero.name.substr(14)}_lg.png`} />
            ))}
        </div>
    )
}
