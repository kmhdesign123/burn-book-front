// assets
import logo from '../../assets/logo_spalsh.svg'

// css
import styles from './Landing.module.css'

// types
import { User } from '../../types/models'

interface LandingProps {
  user: User | null;
}

const Landing = (props: LandingProps): JSX.Element => {
  const { user } = props
  const handleDeleteAccount = async(): Promise<void> => {

  }
  return (
    <main className={styles.container}>
      <img src={logo} alt="A meow meow bean" />
      
      { user && 
        <button onClick={handleDeleteAccount}>
          DELETE ACCOUNT
        </button>
      }
    </main>
  )
}

export default Landing
