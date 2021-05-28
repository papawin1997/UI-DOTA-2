import React, { useState, useEffect } from "react";
import axios from "axios";
import Hero from "./Hero"
import FormRole from "./components/FormRole";
import FormAttck from "./components/FormAttck";
import FromAttr from "./components/FromAttr";
import InputHero from "./components/InputHero";



export default function HeroList(props) {

  const [hero, setHero] = useState([]);
  const [heroAttr, setHeroAttr] = useState(" ");
  const [heroAttack, setHeroAttack] = useState(" ");
  const [heroRole, setHeroRole] = useState(" ");
  const [inputName, setInputName] = useState("")

  useEffect(() => {
    axios.get("https://myappdota2.herokuapp.com/showdota").then((result) => {
      const { data } = result;

      data.sort(function (a, b) {
        if (a.localized_name > b.localized_name) {
          return 1;
        } else if (a.localized_name < b.localized_name) {
          return -1;
        }
        return 0;
      });

      setHero(data);

    });
  }, []);




  ////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const changeAttr = (event) => {
    setHeroAttr(event.target.value);

  }//Filter Hero Attr
  const changeAttack = (event) => {
    setHeroAttack(event.target.value);
  }



  const heroFilter = hero.filter((result) => {
    if (heroAttr == " " && heroAttack == " " && heroRole == " ") {
      return result.localized_name.toLowerCase().includes(inputName.toLowerCase())
    }
    else if (heroAttr !== " " && heroAttack == " " && heroRole == " ") {
      return result.localized_name.toLowerCase().includes(inputName.toLowerCase()) && result.primary_attr.includes(heroAttr)
    }
    else if (heroAttr !== " " && heroAttack !== " " && heroRole == " ") {
      return result.localized_name.toLowerCase().includes(inputName.toLowerCase()) && result.primary_attr.includes(heroAttr) && result.attack_type.includes(heroAttack)
    }
    else if (heroAttr !== " " && heroAttack !== " " && heroRole !== " ") {
      return result.localized_name.toLowerCase().includes(inputName.toLowerCase()) && result.primary_attr.includes(heroAttr)
        && result.attack_type.includes(heroAttack) && result.roles.includes(heroRole)
    }
    else if (heroAttr == " " && heroAttack !== " " && heroRole !== " ") {
      return result.localized_name.toLowerCase().includes(inputName.toLowerCase()) && result.attack_type.includes(heroAttack) && result.roles.includes(heroRole)
    }
    else if (heroAttr == " " && heroAttack == " " && heroRole !== " ") {
      return result.localized_name.toLowerCase().includes(inputName.toLowerCase()) && result.roles.includes(heroRole)
    }
    else if (heroAttr == " " && heroAttack !== " " && heroRole == " ") {
      return result.localized_name.toLowerCase().includes(inputName.toLowerCase()) && result.attack_type.includes(heroAttack)
    } else if (heroAttr !== " " && heroAttack == " " && heroRole !== " ") {
      return result.localized_name.toLowerCase().includes(inputName.toLowerCase()) && result.roles.includes(heroRole) && result.primary_attr.includes(heroAttr)
    }
  })
  // }).map((hero, key) => {
  //   return <Hero hero={hero} key={key} />
  // })





  return (
    <div>
      {/* <div className="filter">
        <div>
        <div className="container-naja">
          <h1>DOTA 2</h1>

          <div className="item">
            <InputHero setInputName={setInputName} inputName={inputName} />
            <FromAttr changeAttr={setHeroAttr} />&nbsp;
                <FormAttck changeAttack={setHeroAttack} />&nbsp;
                <FormRole changeRole={setHeroRole} />
          </div>

          <Hero heros={heroFilter} />
        </div>
      </div>
      <div>
      </div>
        <Hero heros={heroFilter} /> */}

      <div className="container">
        <div className="navbar"><h1>DOTA 2</h1>

          <div className="item">
            <div> <InputHero setInputName={setInputName} inputName={inputName} /></div>
            <div className="select-flex"></div>
            <div><FromAttr changeAttr={setHeroAttr} /></div>
            <div><FormAttck changeAttack={setHeroAttack} /></div>
            <div> <FormRole changeRole={setHeroRole} /></div>
          </div>
        </div>

        <div className="content">
          <Hero heros={heroFilter} />

        </div>

      </div>

    </div>

  );
}
