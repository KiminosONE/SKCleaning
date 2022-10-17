export default function MapOffice() {
  return (
    <>
      <section>
        <section className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3053.593562003071!2d-75.09435108532206!3d40.06217028505172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b6cf1a7ba955%3A0xfa9054dbc8224d9c!2s308%20Ryers%20Ave%2C%20Cheltenham%2C%20PA%2019012!5e0!3m2!1ses-419!2sus!4v1649213723155!5m2!1ses-419!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>

      <style jsx>{`
        section section {
          padding: 5% 0;
        }

        iframe {
          width: 100%;
          border-radius: 8px;
        }
      `}</style>
    </>
  )
}
