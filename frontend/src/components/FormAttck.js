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
                    className="option input-style"
                >
                    <option value=" ">ATTACK TYPE</option>
                    <option value="Melee">MELEE</option>
                    <option value="Ranged">RANGED</option>
                </select>
            </form>
        </div>
    )
}
