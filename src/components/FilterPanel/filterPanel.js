import './filterPanel.css'

const FilterPanel =(props) => {
  const buttonsData = [
    {name:'All', label:'All'},
    {name:'Websites', label:'Websites'},
    {name:'Flayers', label:'Flayers'},
    {name:'Businesscards', label:'Businesscards'},
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