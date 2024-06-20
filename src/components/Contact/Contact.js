import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <div className='contact__link'>
        <a href={`mailto:${contact.email}`}>
          <span type='button' className='btn btn--outline'>
            jolymickael67340@gmail.com
          </span>
        </a>
        <a href={`tel:${contact.tel}`}>
          <span type='button' className='btn btn--outline'>
            06.46.19.06.92
          </span>
        </a>
        <p>
          <span type='button' className='btn btn--outline'>
            Haguenau
          </span>
        </p>
      </div>
    </section>
  )
}

export default Contact
