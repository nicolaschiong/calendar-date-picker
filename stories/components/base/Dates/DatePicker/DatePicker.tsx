import React from "react"
import styled from "@emotion/styled"
import { DatePicker as DatePickerBase, DatePickerBaseProps, DatePickerProps, DatePickerType, DatesProvider, DayOfWeek } from "@mantine/dates"

export interface DatePickerComponentProps extends DatePickerBaseProps {}

const DatePickerStyled = styled(DatePickerBase)`
  font-family: "DM Sans", sans-serif;

  .mantine-DatePicker-day {
    color: #282e38;
    border-radius: 32px;
    margin: 0px;

    :hover {
      border: 1px solid #003396;
      background-color: white;
    }
    :disabled {
      color: #adb5bd;
    }
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
    background-image: url('data:image/svg+xml,<svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="36" height="36" fill="%231E1E1E"/><rect x="17.122" width="18.878" height="36" fill="%23D9E0ED"/><rect width="18.878" height="36" fill="white"/><circle cx="18" cy="18" r="18" fill="%23003396"/></svg>');
    background-size: auto;
    background-repeat: no-repeat;
  }

  .mantine-DatePicker-day[data-last-in-range="true"] {
    color: white;
    background-image: url('data:image/svg+xml,<svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="36" height="36" fill="%231E1E1E"/><rect x="18.878" y="36" width="18.878" height="36" transform="rotate(-180 18.878 36)" fill="%23D9E0ED"/><rect x="36" y="36" width="18.878" height="36" transform="rotate(-180 36 36)" fill="white"/><circle cx="18" cy="18" r="18" transform="rotate(-180 18 18)" fill="%23003396"/></svg>');
    background-size: auto;
    background-repeat: no-repeat;
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
  return <DatePickerStyled {...props} type={type} firstDayOfWeek={0} hideOutsideDates={true} withCellSpacing={false} />
}
