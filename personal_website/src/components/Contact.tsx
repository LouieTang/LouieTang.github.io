function Contact() {
    return (
        <>
            <h2 id="contact">Get In Touch</h2>
            <p>Thank you for visiting my website, feel free to reach me through LinkedIn, email, or through this form!</p>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default Contact;