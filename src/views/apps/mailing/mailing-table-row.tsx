export const MailingTableRow = ({ success, error, blocked }: { success: number; error: number; blocked: number }) => {
  return (
    <tr>
      <td>{success}</td>
      <td>{error}</td>
      <td>{blocked}</td>
    </tr>
  )
}
