import React, { ReactNode } from "react"
import { CalendarAriaLabels, CalendarLevel, DateValue, DayOfWeek, DayProps, DateInput as MantineDateInput, PickerControlProps } from "@mantine/dates"
import styled from "@emotion/styled"
import { MantineSize } from "@mantine/core"

export interface DateInputProps {
  allowDeselect?: boolean
  ariaLabels?: CalendarAriaLabels
  clearButtonProps?: React.ComponentPropsWithoutRef<"button">
  clearable?: boolean
  columnsToScroll?: number
  date?: Date
  dateParser?: (value: string) => Date | null
  decadeLabelFormat?: string | ((startOfDecade: Date, endOfDecade: Date) => ReactNode)
  defaultDate?: Date
  defaultLevel?: CalendarLevel
  defaultValue?: DateValue
  description?: React.ReactNode
  descriptionProps?: Record<string, any>
  disabled?: boolean
  error?: React.ReactNode
  errorProps?: Record<string, any>
  excludeDate?: (date: Date) => boolean
  firstDayOfWeek?: DayOfWeek
  fixOnBlur?: boolean
  getDayAriaLabel?: (date: Date) => string
  getDayProps?: (date: Date) => Omit<Partial<DayProps>, "classNames" | "styles" | "vars">
  getMonthControlProps?: (date: Date) => Partial<PickerControlProps>
  getYearControlProps?: (date: Date) => Partial<PickerControlProps>
  hasNextLevel: boolean
  hideOutsideDates: boolean
  hideWeekdays: boolean
  inputContainer: (children: ReactNode) => ReactNode
  inputWrapperOrder: ("input" | "label" | "description" | "error")[]
  label: React.ReactNode
  labelProps: Record<string, any>
  leftSection: React.ReactNode
  leftSectionPointerEvents: React.CSSProperties["pointerEvents"]
  leftSectionProps: React.ComponentPropsWithoutRef<"div">
  leftSectionWidth: React.CSSProperties["width"]
  level: CalendarLevel
  locale: string
  maxDate: Date
  maxLevel: CalendarLevel
  placeholder: string
  data: any
  size: MantineSize
}

const DateInputStyled = styled(MantineDateInput)`
  input {
    transition: none;
    font-family: "Avenir", "sans-serif";

    &:focus-within {
      outline: 1px solid #594a9b;
      border-color: transparent;
    }

    &[data-invalid] {
      background-color: #fff6f6;
      border-color: #e0b4b4;
      color: #9f3a38;
      box-shadow: none;
    }
  }
`

export const DateInput = ({
  allowDeselect,
  ariaLabels,
  clearButtonProps,
  clearable,
  columnsToScroll,
  date,
  dateParser,
  decadeLabelFormat,
  defaultDate,
  defaultLevel,
  defaultValue,
  placeholder,
  description,
  descriptionProps,
  disabled,
  error,
  errorProps,
  excludeDate,
  firstDayOfWeek,
  fixOnBlur,
  getDayAriaLabel,
  getDayProps,
  getMonthControlProps,
  getYearControlProps,
  hasNextLevel,
  hideOutsideDates,
  hideWeekdays,
  inputContainer,
  inputWrapperOrder,
  label,
  labelProps,
  leftSection,
  leftSectionPointerEvents,
  leftSectionProps,
  leftSectionWidth,
  level,
  locale,
  maxDate,
  maxLevel,
  data,
  ...props
}: DateInputProps) => {
  return (
    <DateInputStyled
      allowDeselect={allowDeselect}
      ariaLabels={ariaLabels}
      clearButtonProps={clearButtonProps}
      clearable={clearable}
      columnsToScroll={columnsToScroll}
      date={date}
      dateParser={dateParser}
      decadeLabelFormat={decadeLabelFormat}
      defaultDate={defaultDate}
      defaultLevel={defaultLevel}
      defaultValue={defaultValue}
      placeholder={placeholder}
      description={description}
      descriptionProps={descriptionProps}
      disabled={disabled}
      error={error}
      errorProps={errorProps}
      excludeDate={excludeDate}
      firstDayOfWeek={firstDayOfWeek}
      fixOnBlur={fixOnBlur}
      getDayAriaLabel={getDayAriaLabel}
      getDayProps={getDayProps}
      getMonthControlProps={getMonthControlProps}
      getYearControlProps={getYearControlProps}
      hasNextLevel={hasNextLevel}
      hideOutsideDates={hideOutsideDates}
      hideWeekdays={hideWeekdays}
      inputContainer={inputContainer}
      inputWrapperOrder={inputWrapperOrder}
      label={label}
      labelProps={labelProps}
      level={level}
      locale={locale}
      maxDate={maxDate}
      maxLevel={maxLevel}
      {...props}
    />
  )
}
