function Table({ users }) {
  return (
    <div>
      <div className="container px-4 mx-auto">
        <h1 className='text-center m-4 text-2xl text-red-600'>User Information</h1>

        <div className="px-5 mt-8">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    EMAIL
                  </th>
                  <th scope="col" className="px-6 py-3">
                    USERNAME
                  </th>
                  <th scope="col" className="px-6 py-3">
                    AGE
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ACTION
                  </th>
                </tr>
              </thead>


              <tbody>
                {users?.map((user, index) => (
                  <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {index + 1}
                    </th>
                    <td className="px-6 py-4">
                      {user.email}
                    </td>
                    <td className="px-6 py-4">
                      {user.name}
                    </td>
                    <td className="px-6 py-4">
                      {user.age}
                    </td>
                    <td className="px-6 py-4">
                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Table
