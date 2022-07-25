import React from 'react';
import HomeSidebar from '../../Sidebar/HomeSidebar';
import Post from '../Post/Post';
import Banner from './Banner';
import States from './States';

const Home = () => {
    return (
        <div className=''>
            <div class="grid grid-cols-4">
                <aside class="self-start hidden md:block border sticky top-0 col-span-1">
                    <HomeSidebar></HomeSidebar>
                </aside>
                <main class="col-span-4 md:col-span-3 border">
                    <Banner></Banner>
                    <States></States>
                    <Post></Post>
                </main>
            </div>

        </div>
    );
};

export default Home;
