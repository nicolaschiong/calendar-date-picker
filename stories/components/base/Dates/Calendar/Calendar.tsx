import React, { useState } from "react"
import "../../../../global.css"
import styled from "@emotion/styled"
import { CalendarProps, Calendar as MantineCalendar } from "@mantine/dates"

export interface CalendarComponentProps extends CalendarProps {}

const CalendarStyled = styled(MantineCalendar)`
  font-family: "DM Sans", sans-serif;

  .mantine-Calendar-day {
    color: #282e38;
    border-radius: 32px;
    :hover {
      border: 1px solid #003396;
      background-color: white;
    }
  }

  .mantine-Calendar-day[data-selected="true"] {
    color: white;
    background-color: #003396;
  }

  .mantine-Calendar-calendarHeaderControlIcon {
    color: #64748b;
  }

  .mantine-PickerControl-pickerControl,
  .mantine-Calendar-pickerControl {
    border-radius: 32px;

    :hover {
      color: white;
      background-color: #003396;
    }
  }

  .mantine-CalendarHeader-calendarHeaderLevel {
    justify-content: left;
    margin-left: 20px;
  }

  .mantine-CalendarHeader-calendarHeaderControl {
    order: 2;
  }
`

export const Calendar = ({ ...props }: CalendarComponentProps) => {
  return (
    <>
      <CalendarStyled firstDayOfWeek={0} hideOutsideDates={true} {...props} />
    </>
  )
}
