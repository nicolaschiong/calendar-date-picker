import React from "react"
import { useQuery } from "@apollo/client"
import { gql } from "@apollo/client"

import style from "./PDFLink.module.css"

interface PDFLinkProps {
  children: string
  url: string
  labReportId: string
}

const MobileGetLabOrder = gql`
  query MobileGetLabOrder($id: MongoID!) {
    mobileGetLabOrder(id: $id) {
      order_documents {
        ... on ReqFormPdf {
          url
          short_id
        }
        ... on AbnFormPdf {
          url
          short_id
        }
        ... on AoeUrl {
          url
          short_id
        }
      }
      result_documents_base64 {
        last_update
        pdf_base64
      }
    }
  }
`

export default function PDFLink({ url, children, labReportId }: PDFLinkProps) {
  // Fetch Lab Order
  const { data: labOrderData, loading: labOrderLoading } = useQuery(
    MobileGetLabOrder,
    {
      variables: { id: labReportId },
    }
  )

  const showQuestResults = (data) => {
    const byteCharacters = atob(data)
    const byteNumbers = new Array(byteCharacters.length)
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i)
    }
    const byteArray = new Uint8Array(byteNumbers)
    const file = new Blob([byteArray], { type: "application/pdf;base64" })
    const fileURL = URL.createObjectURL(file)
    window.open(fileURL)
  }

  return (
    <>
      {!labOrderData?.mobileGetLabOrder?.result_documents_base64?.pdf_base64 ? (
        <a
          href={url}
          target="_blank"
          rel="noreferrer noopener"
          className={style.resultReportLink}
        >
          {children}
        </a>
      ) : (
        <a
          className={style.resultReportLink}
          onClick={() =>
            showQuestResults(
              labOrderData?.mobileGetLabOrder?.result_documents_base64
                ?.pdf_base64
            )
          }
        >
          {children}
        </a>
      )}
    </>
  )
}
