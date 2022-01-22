import DatePickerSearch from "carbon-components-react/lib/components/DatePickerInput"
import Search from "carbon-components-react/lib/components/Search"


function SearchBar(props){
return(<div>
    <form onSubmit={props.onSubmit}>
    <Search labelText="title"/>
    <input type="submit" value="search"/>
    </form>
</div>)
}

export default SearchBar