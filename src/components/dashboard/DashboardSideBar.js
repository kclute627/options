import React from 'react'
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import ListIcon from '@material-ui/icons/List';
import LocalConvenienceStoreIcon from '@material-ui/icons/LocalConvenienceStore';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

const DashboardSideBar = () => {
    return (
        <div className='dsidebar'>
            <div className="dsidebar-1">
                <div className="dsidebar-1-photo">KC</div>
                <div className='span'></div>
                

            </div>
            <div className="dsidebar-2">
                
                    <div className="dsidebar-2-menu-item">
                           <div className="dsidebar-2-menu-icon"><ImportContactsIcon/></div>
                           <div  className="dsidebar-2-menu-des">Open Orders</div>
                    </div>
                    <div className="dsidebar-2-menu-item">
                        <div className="dsidebar-2-menu-icon"><ListIcon/></div>
                           
                           <div c className="dsidebar-2-menu-des">Watch List </div>
                    </div>
                    <div className="dsidebar-2-menu-item">
                           <div className="dsidebar-2-menu-icon"><LocalConvenienceStoreIcon/></div>
                           <div  className="dsidebar-2-menu-des">Markets</div>
                    </div>
                    <div className="dsidebar-2-menu-item">
                         <div className="dsidebar-2-menu-icon"><ImportExportIcon/></div>
                           <div  className="dsidebar-2-menu-des">Gains / Losses</div>
                    </div>
                    
                    <div className="final">
                        <div className=""><ArrowLeftIcon style={{ fontSize: 50 }} /></div>
                    </div>
                
            </div>
            
        </div>
    )
}

export default DashboardSideBar
