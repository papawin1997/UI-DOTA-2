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
                    className="option">
                    <option value=" ">Roles</option>
                    <option value="Carry">Carry</option>
                    <option value="Escape">Escape</option>
                    <option value="Nuker">Nuker</option>
                    <option value="Initiator">Initiator</option>
                    <option value="Durable">Durable</option>
                    <option value="Disabler">Disabler</option>
                    <option value="Jungler">Jungler</option>
                    <option value="Pusher">Pusher</option>
                    <option value="Support">Support</option>
                </select>
            </form>
        </div>
    )
}
