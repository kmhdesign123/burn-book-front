// assets
import lipstick from '../../assets/icons/lipstick_print.png'
import noLipstick from '../../assets/icons/no_lipstick_print.png'

// types
import { Profile } from '../../types/models'

interface VoteManagerProps {
	profile: Profile;
}

const VoteManager = (props: VoteManagerProps): JSX.Element => {
	const { profile } = props

  const ratingOptions = [ 1, 2, 3, 4, 5 ]
  const voteCount = profile.votesReceived.length

  const voteSum: number = profile.votesReceived.reduce(
    (sum: number, v: { value: number }): number => {
      return sum + v.value
    },
    0
  )
  const profileRating = voteCount ? voteSum / voteCount : 1

  const handleClick = (evt: React.MouseEvent<HTMLImageElement>): void => {
    const newValue = parseInt(evt.currentTarget.id)
  }
  
  return (
    <section>
      {ratingOptions.map((rating: number): JSX.Element => (
        <img
          id={rating.toString()}
          key={rating}
          src={rating <= profileRating ? lipstick : noLipstick}
					alt="Lipstick Print"
        />
      ))}
    </section>
  )
}

export default VoteManager