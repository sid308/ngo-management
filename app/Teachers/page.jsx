"use client"
import React from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from 'react';






const Teachers = () => {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div className='ml-72'>
            <p className=' text-5xl mt-10 font-sans font-semibold underline text-gray-800'>Teacher Management</p>

            {/* table */}
            <div className="-my-2 py-2 overflow-x-auto     lg:mt-10">
                <div className="align-middle inline-block w-full  overflow-hidden bg-white  pt-3 rounded-bl-lg rounded-br-lg">
                    <table className="min-w-full">
                        <thead>
                            <tr>

                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Fullname</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Email</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Phone</th>
                                {/* <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Status</th> */}
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Created At</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300">
                                    <button type="button" className="px-3 py-2 border-blue-500 border text-blue-500 rounded-lg transition duration-300 hover:bg-blue-700 hover:text-white">Add Teacher</button>
                                </th>

                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            <tr>

                                <td className="px-6 py-4  border-b border-gray-500">
                                    <div className="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
                                </td>
                                <td className="px-6 py-4  border-b text-blue-900 border-gray-500 text-sm leading-5">damilareanjorin1@gmail.com</td>
                                <td className="px-6 py-4  border-b text-blue-900 border-gray-500 text-sm leading-5">+2348106420637</td>

                                <td className="px-6 py-4  border-b border-gray-500 text-blue-900 text-sm leading-5">September 12</td>
                                <td className="flex items-center justify-center gap-x-4  border-b text-3xl py-4  border-gray-500 leading-5">
                                    <IoEyeOutline className='cursor-pointer'  />
                                    
                                    <CiEdit className='cursor-pointer' />
                                    <AiOutlineDelete className='cursor-pointer' />

                                </td>
                            </tr>
                            <tr>

                                <td className="px-6 py-4  border-b border-gray-500">
                                    <div className="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
                                </td>
                                <td className="px-6 py-4  border-b text-blue-900 border-gray-500 text-sm leading-5">damilareanjorin1@gmail.com</td>
                                <td className="px-6 py-4  border-b text-blue-900 border-gray-500 text-sm leading-5">+2348106420637</td>

                                <td className="px-6 py-4  border-b border-gray-500 text-blue-900 text-sm leading-5">September 12</td>
                                <td className="flex items-center justify-center gap-x-4  border-b text-3xl py-4  border-gray-500 leading-5">
                                    <IoEyeOutline className='cursor-pointer' title='view' name='View' />
                                    <CiEdit className='cursor-pointer' />
                                    <AiOutlineDelete className='cursor-pointer' />

                                </td>
                            </tr>
                            <tr>

                                <td className="px-6 py-4  border-b border-gray-500">
                                    <div className="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
                                </td>
                                <td className="px-6 py-4  border-b text-blue-900 border-gray-500 text-sm leading-5">damilareanjorin1@gmail.com</td>
                                <td className="px-6 py-4  border-b text-blue-900 border-gray-500 text-sm leading-5">+2348106420637</td>

                                <td className="px-6 py-4  border-b border-gray-500 text-blue-900 text-sm leading-5">September 12</td>
                                <td className="flex items-center justify-center gap-x-4  border-b text-3xl py-4  border-gray-500 leading-5">
                                    <IoEyeOutline className='cursor-pointer' />
                                    <CiEdit className='cursor-pointer' />
                                    <AiOutlineDelete className='cursor-pointer' />

                                </td>
                            </tr>
                            <tr>

                                <td className="px-6 py-4  border-b border-gray-500">
                                    <div className="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
                                </td>
                                <td className="px-6 py-4  border-b text-blue-900 border-gray-500 text-sm leading-5">damilareanjorin1@gmail.com</td>
                                <td className="px-6 py-4  border-b text-blue-900 border-gray-500 text-sm leading-5">+2348106420637</td>

                                <td className="px-6 py-4  border-b border-gray-500 text-blue-900 text-sm leading-5">September 12</td>
                                <td className="flex items-center justify-center gap-x-4  border-b text-3xl py-4  border-gray-500 leading-5">
                                    <IoEyeOutline className='cursor-pointer' />
                                    <CiEdit className='cursor-pointer' />
                                    <AiOutlineDelete className='cursor-pointer' />

                                </td>
                            </tr>
                            <tr>

                                <td className="px-6 py-4  border-b border-gray-500">
                                    <div className="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
                                </td>
                                <td className="px-6 py-4  border-b text-blue-900 border-gray-500 text-sm leading-5">damilareanjorin1@gmail.com</td>
                                <td className="px-6 py-4  border-b text-blue-900 border-gray-500 text-sm leading-5">+2348106420637</td>

                                <td className="px-6 py-4  border-b border-gray-500 text-blue-900 text-sm leading-5">September 12</td>
                                <td className="flex items-center justify-center gap-x-4  border-b text-3xl py-4  border-gray-500 leading-5">
                                    <IoEyeOutline className='cursor-pointer' />
                                    <CiEdit className='cursor-pointer' />
                                    <AiOutlineDelete className='cursor-pointer' />

                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>


        </div>
    )
}

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return (

        <div className="" isOpen={open} onClick={onClose}>
            <form className="w-full max-w-lg" id='editModal'>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            First Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Last Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Password
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
                        <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                            City
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                            State
                        </label>
                        <div className="relative">
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option>New Mexico</option>
                                <option>Missouri</option>
                                <option>Texas</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                            Zip
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
                    </div>
                </div>
            </form>
        </div>

    )
}

export default Teachers