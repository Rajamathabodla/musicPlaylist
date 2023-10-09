import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const PlayList = props => {
  const {songsDetsils, deletebtn} = props

  const onclickdeletebtn = () => {
    deletebtn(songsDetsils.id)
  }

  return (
    <li className="unoreder-list">
      <div className="unlist">
        <img src={songsDetsils.imageUrl} alt="track" className="imgsize" />
        <div className="name-content">
          <p className="heading-songs">{songsDetsils.name}</p>
          <p className="genre">{songsDetsils.genre}</p>
        </div>
      </div>
      <div className="timing">
        <p className="heading-songs">{songsDetsils.duration}</p>
        <button type="button" data-testid="delete" onClick={onclickdeletebtn}>
          <AiOutlineDelete color="white" size="20px" />
        </button>
      </div>
    </li>
  )
}
export default PlayList
