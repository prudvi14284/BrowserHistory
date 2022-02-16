import './index.css'

const BrowserHistory = props => {
  const {searchDetails, onDeleteSearch, searchResults} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = searchDetails

  const onDelete = () => {
    onDeleteSearch(id)
  }

  const emptyHistory = () => {
    if (searchResults === '') {
      return <p className="empty-history">There is no history to show</p>
    }
    return searchResults
  }

  return (
    <li className="search-card-container">
      <div className="search-details-container">
        <p className="time-accessed">{timeAccessed}</p>
        <img src={logoUrl} className="logo-url" alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button
        type="button"
        className="delete-button"
        onClick={onDelete}
        testId="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-image"
        />
      </button>
      {emptyHistory()}
    </li>
  )
}
export default BrowserHistory
