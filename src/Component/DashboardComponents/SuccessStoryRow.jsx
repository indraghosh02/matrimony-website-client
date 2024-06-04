import PropTypes from 'prop-types'
import { useState } from 'react'
import StoryModal from './StoryModal'

const SuccessStoryRow = ({ story }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleButtonClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <tr>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{story.selfId}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{story.partnerId}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <button
            onClick={handleButtonClick}
            className='bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
          >
            View Story
          </button>
        </td>
      </tr>
      <StoryModal isOpen={isModalOpen} onClose={handleCloseModal} story={story} />
    </>
  )
}

SuccessStoryRow.propTypes = {
  story: PropTypes.shape({
    selfId: PropTypes.string.isRequired,
    partnerId: PropTypes.string.isRequired,
    story: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
}

export default SuccessStoryRow
