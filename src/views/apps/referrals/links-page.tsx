'use client'

import { LinksHeader, LinksTable } from '../links'

import { EditReferralsPercent } from './edit-referrals-percent'

export const LinksPage = () => {
  return (
    <>
      <EditReferralsPercent />
      <LinksHeader />
      <LinksTable />
    </>
  )
}
