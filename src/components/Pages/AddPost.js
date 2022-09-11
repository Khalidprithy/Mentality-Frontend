import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import toast from 'react-hot-toast';

const AddPost = () => {

    const imageStorageKey = '252bb439cd1e3bfb0cf4929db5f825ce';
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    const onSubmit = async data => {
        const image = data.photo[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData

        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        user: user.displayName,
                        userPhoto: user.photoURL,
                        email: user.email,
                        post: data.post,
                        photo: img

                    }
                    fetch('http://localhost:5000/post', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(added => {
                            if (added.insertedId) {
                                toast.success('Successfully added new product');
                                reset();
                            }
                            else {
                                toast.error('Failed to add product')
                            }
                        })
                }
                console.log('imgbb', result)
            })
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="flex w-full p-8 border-b-4 border-gray-300">
                    <img className='w-12 h-12 rounded-full' src={user?.photoURL} alt="" />
                    <div class="flex flex-col flex-grow ml-4">
                        <textarea className='mb-3 p-2 rounded-md border-2 hover:border-primary' placeholder={`Share your story...${user?.displayName}`} {...register("post")} />
                        <div class="flex justify-between items-center mt-2">
                            <input className='mb-3 p-2 rounded-md border-2 hover:border-primary w-28' type='file' placeholder='Photo URL' {...register("photo", { required: true })} />
                            <input className="btn btn-md btn-outline btn-primary rounded-sm" type="submit" value='Add Product' />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddPost;