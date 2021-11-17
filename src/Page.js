import { useEffect } from "react";

const Page = (props) => {
    const is_debug = process.env.NODE_ENV !== 'production';
    useEffect(() => {
        // eslint-disable-next-line
        is_debug ? document.title = "[DEBUG MODE] " + (props.title || "") + " :: " + process.env.REACT_APP_SITE_TITLE : document.title = (props.title || "") + " :: " + process.env.REACT_APP_SITE_TITLE;
    }, [props.title, is_debug]);
    return props.children;
}

export default Page;
