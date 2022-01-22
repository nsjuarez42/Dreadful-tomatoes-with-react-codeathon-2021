import DatePicker from "carbon-components-react/lib/components/DatePicker"
import DatePickerInput from "carbon-components-react/lib/components/DatePickerInput"

function DatePickerSearch(props){
return(
<form onSubmit={props.onSubmit}>
<DatePicker datePickerType="single">
    <DatePickerInput
    placeholder="mm/dd/yyyy"
    labelText="Date"
    id="date-picker-single"
    />
    </DatePicker>
    <input type="submit" value="search by date"/>
    </form>)
}

export default DatePickerSearch