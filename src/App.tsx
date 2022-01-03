import React from 'react';
import Button from "./components/Button";
import {mdiArrowCollapseRight, mdiChevronDown, mdiChevronRight, mdiMagnify, mdiRefresh} from "@mdi/js";
import Icon from "@mdi/react";

function App() {
    return (
        <div className="flex bg-primary-bg h-screen">
            <div className="p-3">
                <img src="https://static.twitchcdn.net/assets/sword-984631c83c6ea671a347.svg"
                     alt="Moderator View icon"/>
                <div></div>
            </div>
            <div className="w-full"></div>
            <div className="w-80 flex flex-col">
                <div className="bg-primary-bg flex justify-between p-1">
                    <span className="flex items-center font-bold">
                        <img alt="logo" className="w-9 rounded-full mr-3"
                             src="https://static-cdn.jtvnw.net/jtv_user_pictures/a5da37d4-a15f-47f1-b127-effcd58b94c6-profile_image-70x70.jpg"/> CHANNEL TOOLS</span>
                    <Button color="link" icon={mdiArrowCollapseRight} />
                </div>
                <div className="bg-alt-secondary-b grow">
                    <div className="flex bg-dropdown-bg justify-between p-3 border-y-alt-text">
                        <Icon path={mdiChevronDown} size={1}/>
                        <span className="font-bold">Users in Chat</span>
                        <Icon path={mdiMagnify} size={1}/>
                    </div>
                    <div className="bg-alt-secondary-bg h-full">
                        <div className="flex justify-between items-center p-4">
                            <input className="bg-secondary-bg p-1.5 rounded" placeholder="Filter "/>
                            <Icon path={mdiRefresh} size={1}/>
                        </div>
                    </div>
                </div>
                <div className="flex bg-dropdown-bg p-3 border-y-alt-text relative">
                    <Icon path={mdiChevronRight} size={1}/>
                    <div className="grow">
                        <p className="font-bold text-center">Channel Actions</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
