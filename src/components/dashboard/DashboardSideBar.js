import React from 'react'
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import ListIcon from '@material-ui/icons/List';
import LocalConvenienceStoreIcon from '@material-ui/icons/LocalConvenienceStore';
import ImportExportIcon from '@material-ui/icons/ImportExport';

const DashboardSideBar = () => {
    return (
        <div className='dsidebar'>
            <div className="dsidebar-1">
                <div className="dsidebar-1-photo">KC</div>
                <div className='span'></div>
                

            </div>
            <div className="dsidebar-2">
                
                    <div className="dsidebar-2-menu-item">
<<<<<<< HEAD
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
=======
                           <ImportContactsIcon/>
                           <div className="">Open Orders</div>
                    </div>
                    <div className="dsidebar-2-menu-item">
                           <ListIcon/>
                           <div className="">Watch List </div>
                    </div>
                    <div className="dsidebar-2-menu-item">
                           <LocalConvenienceStoreIcon/>
                           <div className="">Markets</div>
                    </div>
                    <div className="dsidebar-2-menu-item">
                           <ImportExportIcon/>
>>>>>>> d2a5c2a33db0c0cde0d111bc224e71daf09875c9
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
