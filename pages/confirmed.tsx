import BackLink from '../components/BackLink'
import Confirmed from '../components/Confirmed'
import PageHeading from '../components/PageHeading'

export default function ConfirmedPage() {
  return (
    <div className="gap-u flex flex-col items-center">
      <BackLink href="/">Home</BackLink>
      <PageHeading>Thankyou, enjoy your cookies!</PageHeading>
      <div className="h-80 w-80">
        <Confirmed />
      </div>
    </div>
  )
}
