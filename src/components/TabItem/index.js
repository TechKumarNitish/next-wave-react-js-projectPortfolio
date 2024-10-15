import './index.css'

const TabItem = props => {
  const {tabDetails, isActiveTab, updateTabId} = props
  const {displayText, tabId} = tabDetails
  const isActiveTabClass = isActiveTab ? 'active-tab-btn' : ''
  const onTabClick = () => {
    updateTabId(tabId)
  }
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${isActiveTabClass}`}
        onClick={onTabClick}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
