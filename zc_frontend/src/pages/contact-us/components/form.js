import { Modal } from 'react-bootstrap'
import styles from '../styles/form.module.css'

function ContactForm(props){
    const {display, handleHide} = props
    return(
        <>
        <Modal show={display} onHide={handleHide} className={styles.modal}>
                            <Modal.Header closeButton>
                                
                            </Modal.Header>
                            <Modal.Body>
                            <Form />
                            </Modal.Body>
                        </Modal>
        </>
    )
}

export default ContactForm

function Form(){
    return(
        <form>
            <label>Topic <button>Change</button></label>
            <button>Notification</button>
            <label>Related Questions</label>
            <div>
                <div>Drop down menu</div>
                <div>Drop down menu</div>
                <div>Drop down menu</div>
                <div>Drop down menu</div>
            </div>
            <label>Related articles</label>
            <div>
                <div>Config 1</div>
                <div>Config 2</div>
                <div>Config 3</div>
            </div>
            <label>Can you give us more details?</label>
            <input type="text" />
            <label>Attach files (optional)</label>
            <div>Drag and drop</div>
            <button>SEND US A MESSAGE</button>
            <div>CHAT UNAVAILABLE</div>
            <div><a href=".">Privacy Policy</a></div>
        </form>
    )
}