import {Component} from 'react'
import {BiSearch} from 'react-icons/bi'

import PlayList from '../PlayList'
import './index.css'

class MusicPlayList extends Component {
  state = {inputText: '', songsLists: []}

  componentDidMount() {
    const {initialTracksList} = this.props
    this.setState({songsLists: initialTracksList})
  }

  onchangeInput = event => {
    this.setState({inputText: event.target.value})
  }

  deletebtn = id => {
    const {songsLists} = this.state
    const updated = songsLists.filter(eachitem => eachitem.id !== id)
    this.setState({songsLists: updated})
  }

  getfilteredmusic = () => {
    const {inputText, songsLists} = this.state

    const fliterList = songsLists.filter(each =>
      each.name.toLowerCase().includes(inputText.toLowerCase()),
    )
    return fliterList
  }

  render() {
    const {inputText} = this.state
    const songsList = this.getfilteredmusic()

    return (
      <div className="appContainer">
        <div className="firstHalf">
          <h1 className="heading">Ed Sheeran</h1>
          <p className="para">Singer</p>
        </div>
        <div className="secondHalf">
          <div className="search-content">
            <h1 className="songsHeading">Songs PlayList</h1>
            <div className="inputText">
              <input
                type="search"
                placeholder="Search"
                className="input"
                value={inputText}
                onChange={this.onchangeInput}
              />
              <BiSearch className="search-icon" />
            </div>
          </div>
          {songsList.length === 0 ? <p>No Songs Found</p> : null}
          <ul className="listItems">
            {songsList.map(each => (
              <PlayList
                songsDetsils={each}
                key={each.id}
                deletebtn={this.deletebtn}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MusicPlayList
