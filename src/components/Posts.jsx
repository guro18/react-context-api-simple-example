import { useContext } from "react";
import {AppContext} from "../App";

export default function Posts() {
    const context = useContext(AppContext);
    console.log("inside Posts, AppContext: ", context);

    return (
        <>
            {context.posts.map(post => {
                return (
                    <div className="card">
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </div>
                )
            })}
        </>
    )
}
