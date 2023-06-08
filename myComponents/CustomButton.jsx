import './custom_button.css'
import React from 'react'

function CustomButton(props) {
    const onPressed = (event) => {
        console.log("on pressed", event)
    }
    return (
        <button onClick={props.onClick
        } id={props.id} className={`btn ${props.colorClass}`}>{props.title}
            {
                props.isdownload
                    ? <span style={{ marginleft: '20px' }}>

                    </span> : <span >

                    </span>
            }
            {
                props.isdownload &&
                <span class="material-symbols-outlined">
                    arrow_downward
                </span>

            }
        </button>
    )
}

export default CustomButton