import { useEffect } from 'react';

const UseTitle = title => {
    useEffect(() => {
        document.title = `Westford - ${title}`
    }, [title])
};

export default UseTitle;