import React, { useState } from 'react'
import "./Form.css"

export default function FormRole(prop) {
    const { changeRole } = prop

    return (
        <div>
            <form>
                <select
                    name="rounds"
                    id="rounds"
                    onChange={(event) => { changeRole(event.target.value) }}
                    className="option input-style">
                    <option value=" ">ROLES</option>
                    <option value="Carry">CARRY</option>
                    <option value="Escape">ESCAPE</option>
                    <option value="Nuker">NUKER</option>
                    <option value="Initiator">INITIATOR</option>
                    <option value="Durable">DURABLE</option>
                    <option value="Disabler">DISABLER</option>
                    <option value="Jungler">JUNGLER</option>
                    <option value="Pusher">PUSHER</option>
                    <option value="Support">SUPPORT</option>
                </select>
            </form>
        </div>
    )
}
