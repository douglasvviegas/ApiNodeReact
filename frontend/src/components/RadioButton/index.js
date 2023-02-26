import React from 'react'
import './styles.css'


function RadioButton(){
    return(
        <>
            <div className='radioOptions'>
                <div>
                    <input type="radio" />
                    <span>Todos</span>
                </div>
                <div>
                    <input type="radio" />
                    <span>Normal</span>
                </div>
                <div>
                    <input type="radio" />
                    <span>Prioridade</span>
                </div>
            </div>
        </>
    )
}

export default RadioButton;