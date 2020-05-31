import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal';
import GalleryItem from './GalleryItem'
import { DEFAULT_IMAGES } from '../constants/defaultImages'

Modal.setAppElement('#___gatsby');

const Gallery = ({ images = DEFAULT_IMAGES }) => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const toggleLightbox = useCallback(selectedIndex => {
    setLightboxIsOpen(!lightboxIsOpen)
    setSelectedIndex(selectedIndex)
  }, [lightboxIsOpen])

  return (
    <div>
      {images && (<div className="row">
        {images.map((obj, i) => {
        return (<GalleryItem
          id={obj.id}
          source={obj.source}
          thumbnail={obj.thumbnail}
          title={obj.title}
          tech={obj.tech}
          position={obj.position}
          toggleLightbox={obj.toggleLightbox}
          position={i}
          toggleLightbox={toggleLightbox}
        />); 
        })}
        </div>
      )}
      <Modal
        isOpen={lightboxIsOpen}
        onRequestClose={() => toggleLightbox(0)}
      >
        <article>
          <img src={images[selectedIndex].source}/>
          <h3>{images[selectedIndex].title}</h3>
          <p>{images[selectedIndex].description}</p>
        </article>
      </Modal>
    </div>
  )
}

Gallery.displayName = 'Gallery'
Gallery.propTypes = {
  images: PropTypes.array,
}

export default Gallery
