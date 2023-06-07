// components
import ProfileCard from '../../components/ProfileCard/ProfileCard'
// css
import styles from './Profiles.module.css'

// types
import { Profile } from '../../types/models'
import { VoteManagerFormData } from '../../types/forms'

interface ProfilesProps {
	profiles: Profile[];
  handleVote: (formData: VoteManagerFormData) => Promise<void>;
}

const Profiles = (props: ProfilesProps): JSX.Element => {
  const { profiles } = props
  if (!profiles.length) {
    return <main className={styles.container}><h1>Loading...</h1></main>
  }

  return (
    <main className='list'>
      {profiles.map((profile: Profile) =>
        <ProfileCard
          key={profile.id}
          profile={profile}
          handleVote={props.handleVote}
        />
      )}
    </main>
  )
}

export default Profiles
