import React from "react";
const Contact = () => {
    return (
        <div>
            <section class="contact">
                <h2>Contact Us</h2>
                <p>Have questions? Feel free to reach out to us.</p>

                <form>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label for="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>

                    <button type="submit">Send Message</button>
                </form>

                <h3>Contact Information</h3>
                <p>Email: support@learnhub.com</p>
                <p>Phone: +1 234 567 890</p>
                <p>Address: 123 Learning Street, Knowledge City</p>
            </section>

            <footer>
                <p>&copy; 2025 LearnHub. All Rights Reserved.</p>
            </footer>
        </div>
    );
};
export default Contact; 