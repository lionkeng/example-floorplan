import styles from '../styles/InteractiveSiteplanPage.module.css'

export default function InteractiveSiteplanPage(): JSX.Element {
  return (
    <div className={styles.root}>
      <iframe
        className={styles.iframe}
        src={
          'https://gazebo.anewgo.com/interactive-siteplan/client/little_bear_creek/community/2'
        }
      />
    </div>
  )
}
