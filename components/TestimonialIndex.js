import Carousel from "./Carousel"

export default function TestimonialIndex() {
  return (
    <>
      <section>
        <div className="container">
          <div>
            <Carousel />
          </div>
          <article>
            <span>Testimonials</span>

            <h2>Professional Cleaning Service</h2>
          </article>
        </div>
      </section>

      <style jsx>{`
        span {
          color: var(--color-primary);
          font-size: 24px;
          font-weight: 500;
        }
      `}</style>
    </>
  )
}
