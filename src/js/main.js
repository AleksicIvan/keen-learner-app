import React, { Component } from 'react'

import { update } from 'ramda'

import '../css/style.css'
import keenImage from '../assets/keen.png'

import VideoLink from './components/videoLink'
import VideoModal from './components/modals/videoModal'


export default class Main extends Component {
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
    // let changeWatched = foundElem ? foundElem.watched = !foundElem.watched : {}

    if (idx !== -1) {
      this.setState({
        videos: update(idx, foundElem , this.state.videos)
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

        <VideoModal videoModal={ this.state.videoModal } modalHandler={ this.modalHandler } />

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
              ? videos.map((video) => <VideoLink  video={ video } isWatchedHandler={ this.isWatchedHandler } modalHandler={ this.modalHandler } key={ video.id } />)
              : null
            }

          </tbody>
        </table>
      </div>
    )
  }
}
