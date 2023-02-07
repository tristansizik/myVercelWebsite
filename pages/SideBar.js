
import { AiOutlineRocket, AiOutlineGithub, AiOutlineCloud, AiOutlineHome} from 'react-icons/ai';

const SideBar  = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0
                        flex flex-col
                        bg-gray-900 text-white shadow-lg
                        dark:bg-gray-700">
            <SideBarIcon icon={<AiOutlineRocket size="28" />} text={"rocket!"} />
            <SideBarIcon icon={<AiOutlineGithub size="28" />} text={"My github"}/>
            <SideBarIcon icon={<AiOutlineCloud size="28" />}  text={"My soundcloud"}/>
            <SideBarIcon icon={<AiOutlineHome size="28" />}   text={"Home"}/>
        </div>
    );
};

const SideBarIcon = ({icon, text = 'tooltip '}) => (
    <div className="sidebar-icon group">
        {icon}

        <span class="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);


export default SideBar;
