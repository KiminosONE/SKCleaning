export default function FormOnBanner() {
  return (
    <>
      <div className="form_on_banner">
        <h2>Request a free quote. Best rate guaranteed!</h2>
        <form action="/action_page.php">
          <div>
            <input
              placeholder="Name*"
              type="text"
              id="nameContact"
              name="nameContact"
              required
              title="Password should be digits (0 to 9) or alphabets (a to z)."
            />

            <input
              placeholder="Email*"
              type="email"
              id="emailContact"
              name="emailContact"
              required
              pattern="/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;"
              title="Password should be digits (0 to 9) or alphabets (a to z)."
            />
          </div>

          <input
            placeholder="Your message subject"
            type="text"
            id="subjectContact"
            name="subjectContact"
            title="Password should be digits (0 to 9) or alphabets (a to z)."
          />

          <textarea
            type="textarea"
            name="message"
            id="message404725b4"
            rows="5"
            placeholder="Your Message*"
            required
          ></textarea>

          <button className="ButtonPrimary" type="submit">
            Submit
          </button>
        </form>
      </div>

      <style jsx>
        {`
          .form_on_banner {
            width: 40%;
            height: 480px;
            border-radius: 20px;
            overflow: hidden;
            background: white;
            padding: 3%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-shadow: 1px 6px 35px #e8e8e8;
          }

          h2 {
            margin: 0 0 10% 0;
          }

          form {
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: space-between;
          }

          form > div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }

          form > div > input {
            width: 48%;
          }
        `}
      </style>
    </>
  )
}
