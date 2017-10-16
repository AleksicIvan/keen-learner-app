import React, { Component } from 'react'
import { render } from 'react-dom'
const uuidv1 = require('uuid')

import '../css/style.css'
import keenImage from '../assets/keen.png'

import Modal from 'react-modal'
import Video from './components/video'

const VideoLink = ({ video, videoModal, modalHandler, isWatchedHandler }) => <tr>
  <td>
    <button onClick={_ => modalHandler(video.name)}>{video.name}</button>
  </td>
  <td>
   <Checkbox isWatched={video.watched} isWatchedHandler={isWatchedHandler} id={video.id}/>
  </td>
</tr>

const Checkbox = ({ isWatched, isWatchedHandler, id }) => (
  <input type="checkbox" value={isWatched} onChange={v => isWatchedHandler(v, id)} />
)

const VideoModal = ({ videoModal, modalHandler }) => {
  return <Modal isOpen={videoModal.isOpen}>
          <Video videoModal={videoModal}/>
          <div>
            <button onClick={_ => modalHandler()}>CLOSE</button>
          </div>
  </Modal>
}

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      videos: [],
      videoModal: {
        isOpen: false,
        src: ''
      }
    }
    this.modalHandler = this.modalHandler.bind(this)
    this.isWatchedHandler = this.isWatchedHandler.bind(this)
  }

  modalHandler (name) {
    this.setState({
      videoModal: {
        isOpen: !this.state.videoModal.isOpen,
        src: name ? name : ''
      }
    })
  }

  isWatchedHandler (v, id) {
    let idx = this.state.videos.findIndex(e => e.id === id)
    let foundElem = this.state.videos[idx]
    let changeWatched = foundElem ? foundElem.watched = !foundElem.watched : {}

    if (idx !== -1) {
      this.setState({
       videos: [...this.state.videos]
      })
    }
  }

  componentDidMount() {
    fetch('http://localhost:4321/')
    .then(response => {
      return response.json()
    })
    .then(res => {
      this.setState({
        videos: res.data
      })
    })
  }

  render() {
    let videos = this.state.videos
    return (
      <div>
        <h1>Keen on learning?</h1>
        <img src={ keenImage } alt='Commander Keen' />

        <VideoModal videoModal={this.state.videoModal} modalHandler={this.modalHandler} />

        <table>
          <thead>
            <tr>
              <th>
                Name
              </th>
              <th>
                Watched
              </th>
            </tr>
          </thead>
          <tbody>

              {videos.length !== 0
                ? videos.map((video, i) => <VideoLink  video={video} isWatchedHandler={this.isWatchedHandler} modalHandler={this.modalHandler} key={video.id} />)
                : null
              }

          </tbody>
        </table>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
