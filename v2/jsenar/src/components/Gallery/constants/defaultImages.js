import smartalbum from '../../../assets/images/thumbs/smartalbum.png'
import autodue from '../../../assets/images/thumbs/autodue.png'
import selfcheckout from '../../../assets/images/thumbs/selfcheckout.jpg'
import aporhopi from '../../../assets/images/thumbs/aporhopi.png'


export const DEFAULT_IMAGES = [
    {
      id: 'smartalbum',
      source: smartalbum,
      thumbnail: smartalbum,
      title: 'Smart Album',
      date: 'Jan 2017 - Mar 2017',
      tech: 'JavaScript, Node.js, Firebase, Microsoft Azure',
      description: 'Smart Album is a mobile web application prototype that uses Artificial Intelligence to automatically tag photos and identify faces in uploaded photos. Users can easily search through different tags through text input or voice commands to select a subset of their photos to share with their friends. I developed the backend system for uploading images. I also used AJAX to implement computer vision and face recognition functionality from Microsoft Cognitive Services into our app.',
    },
    {
      id: 'aporhopi',
      source: aporhopi,
      thumbnail: aporhopi,
      title: 'Alpha Phi Omega Website',
      date: 'May 2016 - Nov 2016',
      tech: 'Ruby on Rails',
      description: 'This is a Ruby on Rails web app for Alpha Phi Omega, a community service student organization at UC San Diego. My contributions included creating a responsive mobile view for the event calendar and adding a feature to mark users who attend service events late in order to efficiently keep track of membership requirements.',
    },
    {
      id: 'autodue',
      source: autodue,
      thumbnail: autodue,
      date: 'Oct 2015 - Dec 2015',
      title: 'Autodue',
      tech: 'Android, Java',
      description: "Autodue is a native Android application that allows users to create a prioritized to-do list. Tasks are automatically sorted based on their desired date of completion and their priority, and then they are added into free spots in the user's device calendar.",
    },
    {
      id: 'selfcheckout',
      source: selfcheckout,
      thumbnail: selfcheckout,
      title: 'Self Checkout',
      date: 'Oct 2015',
      tech: 'Android, Java, Android Pay',
      description: "Self Checkout is a native Android app created during SD Hacks 2015. It uses Google's Mobile Vision API to scan product barcodes and then purchase them with Android Pay. My focus was implementing the barcode scanning and on the design work.",
    },
  ]