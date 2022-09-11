import React from 'react';

const ShowPost = ({ post }) => {

    return (
        <div class="flex w-full p-8 border-b border-gray-300">
            <img className="w-12 h-12 rounded-full" src={post?.userPhoto} alt="" />
            <div class="flex flex-col flex-grow ml-4">
                <div class="flex">
                    <span class="font-semibold">{post?.user}</span>
                    <span class="ml-auto text-sm">Just now</span>
                </div>
                <p class="mt-1">{post?.post}</p>
                <div class="flex items-center justify-center h-64 mt-2 bg-gray-200">
                    <img className='h-64' src={post?.photo} alt="" />
                </div>
                <div class="flex mt-2">
                    <button class="text-sm font-semibold">Like</button>
                    <button class="ml-2 text-sm font-semibold">Reply</button>
                    <button class="ml-2 text-sm font-semibold">Share</button>
                </div>
            </div>
        </div>
    );
};

export default ShowPost;