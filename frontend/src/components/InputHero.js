import React from 'react'
import "./Form.css"

export default function InputHero(prop) {
    const { setInputName, inputName } = prop
    return (
        <div>
            <div>
                <input className="input-hero"
                    type="text" placeholder="Name..."
                    value={inputName}
                    onChange={(event) => { setInputName(event.target.value) }} />
            </div>
        </div>
    )
}
