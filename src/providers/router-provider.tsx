import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router'

import { DashboardLayout } from '@/@layouts/DashboardLayout'
import { AccessActionGuard } from '@/hocs/access-action-guard'
import { AccessRouteGuard } from '@/hocs/access-route-guard'
import { GuestBlankLayout } from '@/hocs/guest-blank-layout'
import GuestOnlyRoute from '@/hocs/GuestOnlyRoute'
import { ACTION_ACCESS } from '@/utils/accessActions'
import { NAVIGATION_LINKS } from '@/utils/constants'
import DashboardPage from '@/views/apps/dashboard/daschboard'
import { EditLayout } from '@/views/apps/edit/edit-layout'
import { Hot } from '@/views/apps/edit/hot'
import { New } from '@/views/apps/edit/new'
import { Trends } from '@/views/apps/edit/trends'
import { ReferralsLayout } from '@/views/apps/referrals'
import { LinksPage } from '@/views/apps/referrals/links-page'
import { TablePage } from '@/views/apps/referrals/table-page'
import { Security } from '@/views/apps/security/security'
import SecurityAdminTable from '@/views/apps/security/SecurityAdminTable'
import SecurityLoginsTable from '@/views/apps/security/SecurityLoginsTable'
import Days from '@/views/apps/statistic/days'
import Months from '@/views/apps/statistic/months'
import { StatisticLayout } from '@/views/apps/statistic/StatisticLayout'
import Traders from '@/views/apps/statistic/traders'
import BlockedUsersTable from '@/views/apps/users/BlockedUsersTable/BlockedUsersTable'
import DeletedUsers from '@/views/apps/users/DeletedUsersTable/DeletedUsersTable'
import FakeUsers from '@/views/apps/users/FakeUsers/FakeUsers'
import { PartnersLinks } from '@/views/apps/users/user/partners-links'
import { UserPnl } from '@/views/apps/users/user/user-pnl'
import { UserLayout } from '@/views/apps/users/user/UserLayout'
import { UserTransaction } from '@/views/apps/users/user/UserTransaction'
import UserTransactionsTable from '@/views/apps/users/user/UserTransactionsTable'
import { UserWithdrawals } from '@/views/apps/users/user/UserWithdrawals'
import { Users } from '@/views/apps/users/Users'
import UsersCustomTable from '@/views/apps/users/UsersTable/UsersTable'
import { Wallets } from '@/views/apps/wallets'
import { ReferralsWithdrawalHistory } from '@/views/apps/withdrawals/referrals-withdrawal-history/referrals-withdrawal-history'
import { ReferralsWithdrawalPending } from '@/views/apps/withdrawals/referrals-withdrawal-pending/referrals-withdrawal-pending'
import { WithdrawalsLayout } from '@/views/apps/withdrawals/WithdrawalsLayout'
import Login from '@/views/Login'

const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <GuestBlankLayout>
        <GuestOnlyRoute>
          <Login />
        </GuestOnlyRoute>
      </GuestBlankLayout>
    )
  },
  {
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={NAVIGATION_LINKS.DASHBOARD} />
      },
      {
        path: NAVIGATION_LINKS.DASHBOARD,
        element: (
          <AccessRouteGuard route={NAVIGATION_LINKS.DASHBOARD}>
            <DashboardPage />
          </AccessRouteGuard>
        )
      },
      {
        path: NAVIGATION_LINKS.EDIT,
        element: <EditLayout />,
        children: [
          {
            index: true,
            element: <Trends />
          },
          {
            path: NAVIGATION_LINKS.EDIT_NEW,
            element: <New />
          },
          {
            path: NAVIGATION_LINKS.EDIT_HOT,
            element: <Hot />
          }
        ]
      },
      {
        path: NAVIGATION_LINKS.REFERRALS,
        element: <ReferralsLayout />,
        children: [
          {
            index: true,
            element: (
              <AccessActionGuard action={ACTION_ACCESS.VIEW_REFERRAL_LEVELS}>
                <LinksPage />
              </AccessActionGuard>
            )
          },
          {
            path: 'table',
            element: (
              <AccessActionGuard action={ACTION_ACCESS.VIEW_REFERRAL_LEVELS}>
                <TablePage />
              </AccessActionGuard>
            )
          }
        ]
      },
      {
        path: NAVIGATION_LINKS.SECURITY,
        element: (
          <AccessActionGuard action={ACTION_ACCESS.VIEW_SECURITY}>
            <Security />
          </AccessActionGuard>
        ),
        children: [
          {
            index: true,
            element: <SecurityAdminTable />
          },
          {
            path: NAVIGATION_LINKS.SECURITY_LOGINS,
            element: <SecurityLoginsTable />
          }
        ]
      },
      {
        path: NAVIGATION_LINKS.STATISTIC,
        element: <StatisticLayout />,
        children: [
          {
            index: true,
            element: <Days />
          },
          {
            path: 'traders',
            element: <Traders />
          },
          {
            path: 'months',
            element: <Months />
          }
        ]
      },
      {
        path: NAVIGATION_LINKS.USERS,
        element: (
          <AccessActionGuard action={ACTION_ACCESS.VIEW_USERS}>
            <Users />
          </AccessActionGuard>
        ),
        children: [
          {
            index: true,
            element: <UsersCustomTable />
          },
          {
            path: 'deleted',
            element: <DeletedUsers />
          },
          {
            path: 'blocked',
            element: <BlockedUsersTable />
          },
          {
            path: 'advertisement',
            element: <FakeUsers />
          },
          {
            path: ':id',
            element: (
              <AccessActionGuard action={ACTION_ACCESS.VIEW_USER_DETAIL}>
                <UserLayout>
                  <Outlet />
                </UserLayout>
              </AccessActionGuard>
            ),
            children: [
              {
                index: true,
                element: <UserTransactionsTable />
              },
              {
                path: 'withdrawal',
                element: <UserWithdrawals />
              },
              {
                path: 'transaction',
                element: <UserTransaction />
              },
              {
                path: 'pnl',
                element: <UserPnl />
              },
              {
                path: 'links',
                element: <PartnersLinks />
              }
            ]
          }
        ]
      },
      {
        path: NAVIGATION_LINKS.WALLETS,
        element: (
          <AccessActionGuard action={ACTION_ACCESS.VIEW_WALLETS}>
            <Wallets />
          </AccessActionGuard>
        )
      },
      {
        path: NAVIGATION_LINKS.WITHDRAWALS,
        element: <WithdrawalsLayout />,
        children: [
          {
            index: true,
            element: <ReferralsWithdrawalPending />
          },
          {
            path: 'history',
            element: <ReferralsWithdrawalHistory />
          }
        ]
      }
    ]
  },

  {
    path: '*',
    element: <Navigate to='dashboard' replace />
  }
])

export const ReactRouterProvider = () => {
  return <RouterProvider router={router} />
}
