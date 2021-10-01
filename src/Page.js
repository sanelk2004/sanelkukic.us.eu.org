import { useEffect } from "react";

const Page = (props) => {
    useEffect(() => {
        document.title = (props.title || "") + " :: Sanel Kukic";
    }, [props.title]);
    return props.children;
}

export default Page;