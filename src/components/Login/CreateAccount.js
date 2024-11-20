import React from 'react';
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const CreateAccount = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const imageHostKey = 'c70a5fc10619997bd7315f2bf28d0f3e';
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm();
   const currentDate = new Date();
   const formattedDate = currentDate.toLocaleDateString('en-US', {
     year: 'numeric',
     month: 'numeric',
     day: 'numeric',
   });
   const [createUserWithEmailAndPassword, user, loading, error] =
     useCreateUserWithEmailAndPassword(auth);

   const [updateProfile, updating, updateError] = useUpdateProfile(auth);
   const navigate = useNavigate();
   const location = useLocation();

   let from = location.state?.from?.pathname || '/';

   let signInError;
   if (gUser) {
     navigate('/');
   }
   // const password = watch('password');

   const createDBUser = data => {
     const image = data.img[0];
     const formData = new FormData();
     formData.append('image', image);
     const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
     fetch(url, {
       method: 'POST',
       body: formData,
     })
       .then(res => res.json())
       .then(imageData => {
         const image = imageData.data.url;
         const updateData = {
           name: data.name,
           email: data.email,
           role: data.role,
           storeName: data.storeName,
           phone: data.phone,
           img: image,
           date: formattedDate,
         };

         console.log('aci', updateData);
         fetch(`http://localhost:5000/create-user/${data?.email}`, {
           method: 'PUT',
           headers: {
             'content-type': 'application/json',
           },
           body: JSON.stringify(updateData),
         })
           .then(res => res.json())
           .then(data => {
             navigate('/user-admin');
             toast.success('Create profile');
             reset();
           });
       });
   };

  const onSubmit = data => {
    createUserWithEmailAndPassword(data.email, data.password);
    updateProfile({ displayName: data.name });
    createDBUser(data);
  };
  return (
    <div
      style={{
        // backgroundImage: `url("https://cdn.wallpapersafari.com/31/82/cyBn5z.jpg")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        // height: '900px',
      }}
      className="  "
    >
      <div className="flex justify-center   pt-5 pb-5">
        <div className="card  shadow-xl bg-violet-200">
          <div className="card-body text-indigo-900">
            <h2 className="text-center text-2xl font-bold mb-0">Add User</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex gap-x-4 text-black">
                <div className="flex gap-12 items-center">
                  <div>
                    {/* name */}
                    <div className="form-control w-full   ">
                      <label className="label">
                        <span className="label-text text-black">Name</span>
                      </label>
                      <input
                        style={{ width: '300px' }}
                        type="text"
                        placeholder="Your name"
                        className="input input-bordered bg-white w-full   "
                        {...register('name', {
                          required: {
                            value: true,
                            message: 'Name is Required',
                          },
                        })}
                      />
                      <label className="label">
                        {errors.name?.type === 'required' && (
                          <span className="label-text-alt text-red-500">
                            {errors.name.message}
                          </span>
                        )}
                      </label>
                    </div>
                    {/* email */}
                    <div className="form-control w-full   ">
                      <label className="label">
                        <span className="label-text text-black -mt-5">
                          Email
                        </span>
                      </label>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered bg-white w-full   "
                        {...register('email', {
                          required: {
                            value: true,
                            message: 'Email is Required',
                          },
                          pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: 'Provide a valid Email',
                          },
                        })}
                      />
                      <label className="label">
                        {errors.email?.type === 'required' && (
                          <span className="label-text-alt text-red-500">
                            {errors.email.message}
                          </span>
                        )}
                        {errors.email?.type === 'pattern' && (
                          <span className="label-text-alt text-red-500">
                            {errors.email.message}
                          </span>
                        )}
                      </label>
                    </div>
                    {/* Phone */}
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Phone</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Phone"
                        className="input input-bordered w-full"
                        {...register('phone', {
                          required: 'Phone is Required',
                        })}
                      />
                      <label className="label">
                        {errors.phone && (
                          <span className="label-text-alt text-red-500">
                            {errors.phone.message}
                          </span>
                        )}
                      </label>
                    </div>
                    {/* Store Name Field */}
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Store Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Store Name"
                        className="input input-bordered w-full"
                        {...register('storeName', {
                          required: 'Store Name is Required',
                        })}
                      />
                      <label className="label">
                        {errors.storeName && (
                          <span className="label-text-alt text-red-500">
                            {errors.storeName.message}
                          </span>
                        )}
                      </label>
                    </div>
                  </div>
                  <div>
                    {/* Role Field */}
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Role</span>
                      </label>
                      <select
                        className="select select-bordered w-full"
                        {...register('role', {
                          required: 'Role is Required',
                        })}
                      >
                        <option value="" disabled selected>
                          Select Role
                        </option>
                        <option value="Admin">Admin</option>
                        <option value="Manager">Manager</option>
                        <option value="Employee">Employee</option>
                      </select>
                      <label className="label">
                        {errors.role && (
                          <span className="label-text-alt text-red-500">
                            {errors.role.message}
                          </span>
                        )}
                      </label>
                    </div>
                    {/* image */}
                    <div className="form-control w-full ">
                      <label className="label">
                        <span className="label-text">Image</span>
                      </label>
                      <input
                        type="file"
                        placeholder="Image"
                        className="input input-bordered  w-full pt-2"
                        {...register('img', {
                          required: {
                            value: true,
                            message: 'Image is Required',
                          },
                        })}
                      />
                      <label className="label">
                        {errors.img?.type === 'required' && (
                          <span className="label-text-alt text-red-500">
                            {errors.img.message}
                          </span>
                        )}
                      </label>
                    </div>
                    {/* Password */}
                    <div className="form-control w-full  ">
                      <label className="label">
                        <span className="label-text text-black -mt-3">
                          Password
                        </span>
                      </label>
                      <input
                        type="password"
                        placeholder="Password"
                        className="input input-bordered text-black  bg-white w-full   "
                        {...register('password', {
                          required: {
                            value: true,
                            message: 'Password is Required',
                          },
                          minLength: {
                            value: 6,
                            message: 'Must be 6 characters or longer',
                          },
                        })}
                      />
                      <label className="label">
                        {errors.password?.type === 'required' && (
                          <span className="label-text-alt text-red-500">
                            {errors.password.message}
                          </span>
                        )}
                        {errors.password?.type === 'minLength' && (
                          <span className="label-text-alt text-red-500">
                            {errors.password.message}
                          </span>
                        )}
                      </label>
                    </div>
                    {/* conform password */}
                    <div className="form-control w-full  ">
                      <label className="label">
                        <span className="label-text text-black -mt-3">
                          Confirm Password
                        </span>
                      </label>
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        className="input input-bordered text-black  bg-white w-full   "
                        {...register('confirmPassword', {
                          required: {
                            value: true,
                            message: 'Confirm Password is Required',
                          },
                          validate: value =>
                            value === watch('password') ||
                            'Passwords do not match',
                        })}
                      />
                      <label className="label">
                        {errors.confirmPassword?.type === 'required' && (
                          <span className="label-text-alt text-red-500">
                            {errors.confirmPassword.message}
                          </span>
                        )}
                        {errors.confirmPassword?.type === 'validate' && (
                          <span className="label-text-alt text-red-500">
                            {errors.confirmPassword.message}
                          </span>
                        )}
                      </label>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
              {signInError}
              <input
                className="btn btn-primary w-full text-white mt-0"
                type="submit"
                value="Add"
              />
            </form>
            {/* <p className=" text-white ">
                Already have a account{' '}
                <Link
                  to="/login"
                  className=" text-orange-100 ml-3  hover:text-primary hover:underline"
                >
                  Login
                </Link>
              </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
