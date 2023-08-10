import React from 'react'
import Skeleton from 'react-loading-skeleton'
export const SkeletonCard = () => {
  return (
        <>
            <div className="max-w p-6 m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><Skeleton/></h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><Skeleton count={1}/></p>
            <div className="flex">
                <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    <Skeleton width="70px"/>
                </button>
            </div>

        </div>
        </>
  )
}
