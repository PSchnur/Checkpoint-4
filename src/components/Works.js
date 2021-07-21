import React from 'react';

export default function Works() {
  return (
    <div>
      <h1>Works</h1>

      <div className="contact">
        <div>
          <h2>Contact Me</h2>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <form>
            <label htmlFor="firstname">
              Prénom
              <input type="text" placeholder="Prénom" />
            </label>
            <label htmlFor="lastname">
              Nom
              <input type="text" placeholder="Nom" />
            </label>

            <label htmlFor="email-address">
              Adresse Email
              <input
                name="email"
                type="email"
                placeholder="email@exemple.com"
              />
            </label>

            <label htmlFor="message">
              <textarea name="message" placeholder="message" />
            </label>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
