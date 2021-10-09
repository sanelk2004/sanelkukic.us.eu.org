import { useEffect } from "react";

const Page = (props) => {
    const is_debug = process.env.NODE_ENV !== 'production';
    useEffect(() => {
        // eslint-disable-next-line
        is_debug ? document.title = "[DEBUG MODE] " + (props.title || "") + " :: Sanel Kukic" : document.title = (props.title || "") + " :: Sanel Kukic";
    }, [props.title, is_debug]);
    return props.children;
}

export default Page;
