import PropTypes from 'prop-types'
import { useEffect } from 'react'

const StoryModal = ({ isOpen, onClose, story }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center'>
      <div className='bg-white p-8 rounded shadow-lg w-1/2'>
        <h2 className='text-2xl font-bold mb-4'>Story</h2>
        <p>{story.story}</p>
        <p>Married on: {story.date}</p>
        <button
          onClick={onClose}
          className='mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700'
        >
          Close
        </button>
      </div>
    </div>
  )
}

StoryModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  story: PropTypes.shape({
    story: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
}

export default StoryModal
