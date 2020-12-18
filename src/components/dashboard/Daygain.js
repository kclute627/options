import React from 'react'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

const Daygain = () => {
    return (
        <div className ='rights'>
            <div className="rights__gain">
                <div className="rights__gain-top">
                    Todays Portfolio Change
                </div>
                <div className="rights__gain-bottom">
                    {/* dummy data for now  */}
                    <div className="rights__gain-bottom-1">
                        16.05% <ArrowDropUpIcon style={{color: ' rgb(4, 185, 13)', fontSize: 60}}/>
                    </div>
                    <div className="rights__gain-bottom-1">
                        {/* dummy data for now  */}
                        $899.25 <ArrowDropUpIcon style={{color: ' rgb(4, 185, 13)', fontSize: 60}}/>
                    </div>


                </div>
            </div>
            
        </div>
    )
}

export default Daygain
