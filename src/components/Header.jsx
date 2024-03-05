import { useContext } from "react";
import {AppContext} from "../App";

export default function Header() {
    const context = useContext(AppContext);
    console.log("inside header, AppContext: ", context);

    return <h1>{ context.appName }</h1>
}
