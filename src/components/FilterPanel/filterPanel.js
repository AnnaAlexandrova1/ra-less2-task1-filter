import './filterPanel.css'

const FilterPanel =(props) => {
  const buttonsData = [
    {name:'all', label:'All'},
    {name:'websites', label:'Websites'},
    {name:'flayers', label:'Flayers'},
    {name:'businesscards', label:'Businesscards'},
  ]
  
  // Надо реализовать props.onFilterSelect и  props.filter
  const buttons = buttonsData.map(({name, label}) => {
    const active = props.filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light'
    return (
        <button type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => props.onFilterSelect(name)}> 
                    {label}
            </button>
    )
  })
  
  return(
    <div className="filter-panel">
        {buttons}
    </div>
  )

}

export default FilterPanel;