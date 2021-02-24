import styles from '../styles/components/Profile.module.css';

export function Profile(){
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/DaniloMirandaa.png" alt="Danilo Miranda"/>
      <div>
        <strong>Danilo Miranda</strong>
        <p>Level 1</p>
      </div>
    </div>
  )
}