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

  return (
    <section>
      {ratingOptions.map((rating: number): JSX.Element => (
        <img
          id={rating.toString()}
          key={rating}
          src={noLipstick}
					alt="Lipstick Print"
        />
      ))}
    </section>
  )
}

export default VoteManager