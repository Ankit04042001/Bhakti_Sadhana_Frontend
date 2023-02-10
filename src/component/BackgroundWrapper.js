import React from 'react'

const BackgroundWrapper = (props) => {
    return (
        <div>
            <div className="App">
                <div className='background-wrapper'>
                    <div className='divider'>
                    </div>
                </div>
            </div>
            {props.children}
        </div>
    )
}

export default BackgroundWrapper