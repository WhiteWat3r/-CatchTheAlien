import {useWindowSize} from "../hooks/useWindowSize";
import {Router} from "./Router";
import {useGetCurrentBreakpoint} from "../hooks/useGetCurrentBreakpoint";
import Sound from "./Sound";

export const MobileContainer: React.FC = () => {
    const [, windowHeight] = useWindowSize()
    const {currentBreakpointName} = useGetCurrentBreakpoint()

    return (
        <div id={"container"} 
        style={{transform: currentBreakpointName === "desktop" ? `scale(${1 - 667 / windowHeight + 1})` : ''}}
             className={`relative w-full h-full desktop:h-[667px] desktop:w-[375px] rounded-none overflow-hidden desktop:rounded-2xl desktop:shadow-2xl object-cover bg-cover bg-center bg-bg-1`}>
            <Sound/>
            <Router/>
        </div>
    );
};
