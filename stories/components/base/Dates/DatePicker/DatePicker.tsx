import React from "react"
import styled from "@emotion/styled"
import { DatePicker as DatePickerBase, DatePickerBaseProps, DatePickerProps, DatePickerType } from "@mantine/dates"

export interface DatePickerComponentProps extends DatePickerBaseProps {}

const DatePickerStyled = styled(DatePickerBase)`
  font-family: "DM Sans", sans-serif;

  .mantine-DatePicker-day {
    color: #282e38;
    border-radius: 32px;
    :hover {
      border: 1px solid #003396;
      background-color: white;
    }
    margin: 0px;
  }

  .mantine-DatePicker-day[data-selected="true"] {
    color: white;
    background-color: #003396;
  }

  .mantine-DatePicker-day[data-in-range="true"] {
    color: black;
    background-color: #d9e0ed;
    border-radius: 0px;
  }

  .mantine-DatePicker-day[data-first-in-range="true"] {
    color: white;
    background-color: #003396;
    border-radius: 32px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  .mantine-DatePicker-day[data-last-in-range="true"] {
    color: white;
    background-color: #003396;
    border-radius: 32px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }

  .mantine-DatePicker-calendarHeaderControlIcon {
    color: #64748b;
  }

  .mantine-PickerControl-pickerControl,
  .mantine-DatePicker-pickerControl {
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

export const DatePicker = ({ type, ...props }: DatePickerComponentProps) => {
  return (
    <>
      <DatePickerStyled type={type} firstDayOfWeek={0} hideOutsideDates={true} withCellSpacing={false} {...props} />
    </>
  )
}
