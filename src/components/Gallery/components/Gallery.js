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
        onRequestClose={() => toggleLightbox(selectedIndex)}
        closeTimeoutMS={200}
        style={{ content: { top: 0, bottom: 0, left: 0, right: 0 } }}
      >
        <article className="projects">
          <img src={images[selectedIndex].source}/>
          <header>
            <h3>{images[selectedIndex].title}</h3>
            <p>{images[selectedIndex].tech}</p>
            <p>{images[selectedIndex].date}</p>
          </header>
          <hr/>
          <p>{images[selectedIndex].description}</p>
          <button class="button" onClick={() => toggleLightbox(selectedIndex)}>Close</button>
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
