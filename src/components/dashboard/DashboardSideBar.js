import React from 'react'

const DashboardSideBar = () => {
    return (
        <div className='dsidebar'>
            <div className="dsidebar-1">
                <div className="dsidebar-1-photo">KC</div>
                <div className='span'></div>
                

            </div>
            <div className="dsidebar-2">
                
                    <div className="dsidebar-2-menu-item">
                           <div className="">Icon</div>
                           <div className="">Open Orders</div>
                    </div>
                    <div className="dsidebar-2-menu-item">
                           <div className="">Icon</div>
                           <div className="">Watch List </div>
                    </div>
                    <div className="dsidebar-2-menu-item">
                           <div className="">Icon</div>
                           <div className="">Markets</div>
                    </div>
                    <div className="dsidebar-2-menu-item">
                           <div className="">Icon</div>
                           <div className="">Gains / Losses</div>
                    </div>
                    
                    <div className="final">
                        <div className="">CLOSE ARROW</div>
                    </div>
                
            </div>
            
        </div>
    )
}

export default DashboardSideBar
