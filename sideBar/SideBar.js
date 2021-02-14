import React from 'react'
import './SideBar.css'
import SideBarRow from '../sideBarRow/SideBarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon  from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import { ExpandMoreOutlined } from '@material-ui/icons'
import { useStateValue } from '../store/StateProvider';

function SideBar() {
    const [{user}, dispatch] = useStateValue();

    return (
        <div className="sideBar">
            <SideBarRow title={user.displayName} src={user.photoURL} />
            <SideBarRow title="Covid-19 Information Center" Icon={LocalHospitalIcon} />
            <SideBarRow title="Pages"  Icon={EmojiFlagsIcon} />
            <SideBarRow title="Friends"  Icon={PeopleIcon} />
            <SideBarRow title="Messenger"  Icon={ChatIcon} />
            <SideBarRow title="Videos"  Icon={VideoLibraryIcon} />
            <SideBarRow title="MarketPlace" Icon={StorefrontIcon} />
            <SideBarRow title="MarketPlace"  Icon={ExpandMoreOutlined} />
        </div>
    )
}

export default SideBar
