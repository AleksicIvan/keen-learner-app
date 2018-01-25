import React, { Component } from 'react'

import { update } from 'ramda'

import '../css/style.css'
// import keenImage from '../assets/keen.png'
import {
  Grid,
  Table,
  Divider,
} from 'semantic-ui-react'

import VideoLink from './components/videoLink'
import VideoModal from './components/modals/videoModal'

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      videos: [],
      videoModal: {
        isOpen: false,
        src: '',
        videoId: null,
        watched: null
      },
      video: null
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.isWatchedHandler = this.isWatchedHandler.bind(this)
  }

  openModal (video) {
    this.setState({
      videoModal: {
        isOpen: !this.state.videoModal.isOpen,
        src: video.name ? video.name : '',
        videoId: video.id,
        watched: video.watched
      }
    })
  }

  closeModal () {
    this.setState({
      videoModal: {
        isOpen: !this.state.videoModal.isOpen,
        src: '',
        videoId: null,
        watched: null,
      }
    })
  }

  isWatchedHandler (v, id) {
    let idx = this.state.videos.findIndex(e => e.id === id)
    let foundElem = this.state.videos[idx]


    if (foundElem) {
      foundElem.watched = !foundElem.watched

      let data = {
        id,
        watched: foundElem.watched
      }

      if (idx !== -1) {
        this.setState({
          videos: update(idx, foundElem, this.state.videos),
          videoModal: {
            ...this.state.videoModal,
            watched: this.state.videoModal.watched !== null ? !this.state.videoModal.watched : null
          }
        }, () => {
          fetch('http://localhost:4321/update', {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: new Headers({
              'Content-Type': 'application/json'
            })
          })
            .then(res => {
              if (res.status === 200) {
                console.log('Succesful update')
              }
            })
            .catch(err => {
              console.error(err)
            })
        })
      }
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

        <Divider />

        <Grid centered>
          <Grid.Column mobile={ 16 } tablet={ 8 } computer={ 10 }>
            <Table celled>
              <Table.Header>
                <Table.Row textAlign='center'>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {videos.length !== 0
                  ? videos.map((video) => <VideoLink
                    video={ video }
                    isWatchedHandler={ this.isWatchedHandler }
                    openModal={ this.openModal }
                    key={ video.id } />
                  )
                  : null
                }
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid>


        <VideoModal
          videoModal={ this.state.videoModal }
          closeModal={ this.closeModal }
          isWatchedHandler={ this.isWatchedHandler }
        />
      </div>
    )
  }
}
