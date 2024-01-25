import React, { useState } from "react"
import { FileButton as FileUploadButton, Group, Text } from "@mantine/core"

import "./FileButton.css"
import { Button, LoadingIcon } from "../../Buttons"

export interface FileButtonProps {
  type: any
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  variant: "filled" | "light" | "outline" | "default" | "subtle" | "secondary" | "basic"
  display: any
  radius: "xs" | "sm" | "md" | "lg" | "xl"
  disabled: boolean
  uppercase: boolean
  compact: boolean
  loading: boolean
  onClick?: () => void
  children: any
}

export const FileButton = ({ type, size, variant, display, radius, disabled, uppercase, compact, onClick, children, loading, ...props }: FileButtonProps) => {
  const [file, setFile] = useState<File | null>(null)

  return (
    <>
      <Group position="center">
        <FileUploadButton onChange={setFile} accept="image/png,image/jpeg">
          {(props) => (
            <Button radius={radius} size={size} uppercase variant={variant} type={type} disabled={disabled} display={display} compact={compact} loading={loading} {...props}>
              {loading ? <LoadingIcon /> : <> {children}</>}
            </Button>
          )}
        </FileUploadButton>
      </Group>

      {file && (
        <Text size="sm" align="center" mt="sm">
          Picked file: {file.name}
        </Text>
      )}
    </>
  )
}
