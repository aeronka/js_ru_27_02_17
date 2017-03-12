import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class Calendar extends Component {
    constructor() {
        super()
        this.handleDayClick = this.handleDayClick.bind(this);
    }

    state = {
        from: null,
        to: null
    }

    render() {
        const { from, to } = this.state;
        return (
            <div>
                <DayPicker onDayClick={ this.handleDayClick } selectedDays={ [from, { from, to }] }/>
                <p>
                    <span>Отмеченный диапазон: </span>
                    {from? from.toLocaleDateString() : 'начало периода' } - { to? to.toLocaleDateString() : 'окончание периода' }
                </p>
            </div>
        )
    }

    handleDayClick(day) {
        const dateRange = DateUtils.addDayToRange(day, this.state);
        this.setState(dateRange);
    }
}

export default Calendar
