// css
import styles from './Profiles.module.css'

// types
import { Profile } from '../../types/models'

const Profiles = (props): JSX.Element => {
  if (!profiles.length) {
    return <main className={styles.container}><h1>Loading...</h1></main>
  }

  return (
    <main className={styles.container}>
      <h1>Hello. This is a list of all the profiles.</h1>
      {profiles.map((profile: Profile) => (
        <p key={profile.id}>{profile.name}</p>
      ))}
    </main>
  )
}

export default Profiles
