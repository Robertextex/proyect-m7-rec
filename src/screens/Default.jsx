
import Description from "./Default/_components/Description";
import Logo from "./Default/_components/Logo";

import OpenLink from "../components/OpenLink";
import LessonInfo from "./Default/_components/LessonInfo";
import Contador from "./Default/_components/Contador";

const Default =() => {
        return (
            <>
            <header className="App-header">
                <Contador/>
                <Logo />
                <Description />

                <OpenLink title= "learn react" url="http//:react.dev"/>
                <OpenLink title= "Mi Proyecto react (GIt hub)" url="https://github.com/Robertextex/Proyecto-M7"/>
                <LessonInfo unitNumber={"1"} title={"Introduccion a React"}/>
                <LessonInfo unitNumber={"2"} title={"Context API par un desarrollo global"}/>
            </header>
            </>
    );
};
export default Default;