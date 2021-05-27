import React, { useState } from 'react'
import HeroPopup from './components/HeroPopup';


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
        <div>{showNewHero}
            <div className="container-naja">
                {heros.map((hero) => (
                    <img onClick={() => { onClickImg(hero) }} src={`http://cdn.dota2.com/apps/dota2/images/heroes/${hero.name.substr(14)}_lg.png`} />
                ))}
            </div >
        </div>
    )
}
