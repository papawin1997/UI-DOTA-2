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
    axios.get("http://localhost:8000/showdota").then((result) => {
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
      <div className="filter">
        <FromAttr changeAttr={setHeroAttr} />&nbsp;
        <FormAttck changeAttack={setHeroAttack} />&nbsp;
        <FormRole changeRole={setHeroRole} />
        <InputHero setInputName={setInputName} inputName={inputName} />
      </div>
      <div><Hero heros={heroFilter} /></div>







    </div>
  );
}
