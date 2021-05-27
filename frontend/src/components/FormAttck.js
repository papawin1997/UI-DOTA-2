import React from 'react'
import "./Form.css"

export default function FormAttck(prop) {
    const { changeAttack } = prop

    return (
        <div>
            <form>

                <select
                    name="rounds"
                    id="rounds"
                    onChange={(event) => { changeAttack(event.target.value) }}
                    className="option"
                >
                    <option value=" ">Attack Type</option>
                    <option value="Melee">Melee</option>
                    <option value="Ranged">Ranged</option>
                </select>
            </form>
        </div>
    )
}
