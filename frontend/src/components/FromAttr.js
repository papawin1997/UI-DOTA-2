import React from 'react'
import "./Form.css"

export default function FromAttr(prop) {
    const { changeAttr } = prop
    return (
        <div>
            <form>
                <select
                    name="rounds"
                    id="rounds"
                    onChange={(event) => { changeAttr(event.target.value) }}
                    className="option">
                    <option value=" ">
                        Attribute
                    </option>
                    <option value="agi">Agi</option>
                    <option value="str">Str</option>
                    <option value="int">Int</option>

                </select>
            </form>
        </div>
    )
}
