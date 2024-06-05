import PropTypes from 'prop-types'
import { useContext, useState } from 'react'
import UpdateUserModal from './UpdateUserModal'
import { useMutation } from '@tanstack/react-query'
import useAxiosPublic from '../../hooks/useAxiosPublic'
import { AuthContext } from '../../providers/AuthProvider'
import { toast } from 'react-toastify'

const UserDataRow = ({ user, refetch }) => {
  const { user: loggedInUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false)
  const axiosPublic = useAxiosPublic()

  const { mutateAsync: makeAdmin } = useMutation({
    mutationFn: async (updatedUser) => {
      const { data } = await axiosPublic.patch(`/users/update/${user.email}`, updatedUser)
      return data
    },
    onSuccess: () => {
      refetch()
      toast.success('User role updated successfully')
      setIsOpen(false)
    },
    onError: (error) => {
      console.error(error)
      toast.error('Failed to update user role')
    }
  })

  const { mutateAsync: makePremium } = useMutation({
    mutationFn: async () => {
      const { data } = await axiosPublic.patch(`/user/update-premium/${user.email}`)
      return data
    },
    onSuccess: () => {
      refetch()
      toast.success('User updated to premium successfully')
    },
    onError: (error) => {
      console.error(error)
      toast.error('Failed to update user to premium')
    }
  })

  const handleMakeAdmin = async () => {
    const updatedUser = { role: "admin" }
    try {
      await makeAdmin(updatedUser)
    } catch (err) {
      console.error(err)
      toast.error('Failed to update user role')
    }
  }

  const handleMakePremium = async () => {
    try {
      await makePremium()
    } catch (err) {
      console.error(err)
      toast.error('Failed to update user to premium')
    }
  }

  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.name}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.role}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button onClick={handleMakeAdmin} className='btn bg-green-600 text-white px-4 py-2 rounded hover:bg-blue-600'>
          Make Admin
        </button>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {user.isPremium ? (
          <span className='text-yellow-600 font-bold'>Premium User</span>
        ) : (
          <button onClick={handleMakePremium} className='btn bg-yellow-400 text-black px-4 py-2 rounded hover:bg-blue-600'>
            Make Premium
          </button>
        )}
      </td>
    </tr>
  )
}

UserDataRow.propTypes = {
  user: PropTypes.object,
  refetch: PropTypes.func,
}

export default UserDataRow
