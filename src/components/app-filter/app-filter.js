import { ButtonGroup, Button } from '@mui/material'
import "./app-filter.css";

const AppFilter = (props) => {
    const buttonsData = [
        { name: 'all', label: 'Все сотрудники' },
        { name: 'rise', label: 'На повышение' },
        { name: 'moreThen1000', label: 'З/П больше 1000$' }
    ]

    const buttons = buttonsData.map(({ name, label }) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light-active' : 'btn-outline-light'
        return (
            <Button type="button"
                style={{
                    color: 'white', borderColor: 'white'
                }}
                className={`btn ${clazz}`}
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                {label}
            </Button >
        )
    })

    return (
        <ButtonGroup className="btn-group" variant="outlined" aria-label="outlined button group">
            {buttons}
        </ButtonGroup>
    )
}

export default AppFilter;