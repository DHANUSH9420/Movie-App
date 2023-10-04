import './index.css'

const NotFound = props => {
  const onClickButton = () => {
    const {history} = props
    history.replace('/')
  }
  return (
    <div className="not-found-container">
      <img
        src="https://res.cloudinary.com/dv0wkaiuj/image/upload/v1696237417/Background-Complete_nug9sz.png"
        alt="not found"
        className="not-found-img"
      />
      <h1 className="not-found-heading">Lost Your Way ?</h1>
      <p className="not-found-para">
        we are sorry the page you requested could not be found Please go back to
        the homepage.
      </p>
      <button
        className="not-found-button"
        type="button"
        onClick={onClickButton}
      >
        go to Home
      </button>
    </div>
  )
}
export default NotFound
