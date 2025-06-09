import Button from '../Button/Button';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <section className={styles.container}>

      <div className={styles.Contact_Form }>
        <Button/>
      </div>
      <div className={styles.contactImage}></div>

    </section>
  )
}

export default ContactForm