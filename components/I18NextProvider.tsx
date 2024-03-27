"use client"
import i18n from '@/18n'
import React, { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'

const I18NextProvider = ({children}: {children: ReactNode}) => {
  return (
    <I18nextProvider i18n={i18n}>
        {children}
    </I18nextProvider>
  )
}

export default I18NextProvider