import React from 'react';
import { HalfMalf }
    from 'react-spinner-animated';

import 'react-spinner-animated/dist/index.css'


const Loading = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <HalfMalf bgColor={"#fffff"}
                center={false} width={"100px"} height={"100px"} />
        </div>

    );
};

export default Loading;