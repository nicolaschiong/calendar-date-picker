import React from "react"
import "../../../../global.css"
import styled from "@emotion/styled"
import { DateTimePickerProps, DateTimePicker as MyDateTimePicker } from "@mantine/dates"

export interface DateTimePickerComponentProps extends DateTimePickerProps {}

const DateTimePickerStyled = styled(MyDateTimePicker)`
  .mantine-DateTimePicker-day {
    color: #282e38;

    border-radius: 32px;
    :hover {
      border: 1px solid #003396;
      background-color: white;
    }

    :active {
    }
  }
`

export const DateTimePicker = ({ ...props }: DateTimePickerComponentProps) => {
  return <DateTimePickerStyled label="Pick date and time" firstDayOfWeek={0} hideOutsideDates={true} {...props} />
}
