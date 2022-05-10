import SvgClock from "public/svg/Icons/contactUs/SvgClock"
import SvgEmail from "public/svg/Icons/contactUs/SvgEmail"
import SvgPhone from "public/svg/Icons/contactUs/SvgPhone"

export default function ContactCards() {
  const refireccion = (route) => {
    window.location.href = route
  }

  const itemsDataCU = (props) => {
    return (
      <>
        <li onClick={props.onClick}>
          <div>{props.imgIcon}</div>
          <h3>{props.title}</h3>
          <p>{props.data}</p>
        </li>

        <style jsx>{`
          li {
            width: 36%;
            height: 150px;
            background: white;
            box-shadow: 1px 6px 35px #e8e8e8;
            border-radius: 8px;
            cursor: pointer;

            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            padding: 4% 3%;
            margin: 0 3% 0 0;
          }

          li:hover div {
            width: 22%;
          }

          li div {
            transition: all 0.2s linear;
            width: 20%;
          }

          li div img {
            object-fit: contain;
          }

          li h3 {
          }

          li p {
            color: #000;
            font-size: 13px;
          }
        `}</style>
      </>
    )
  }

  return (
    <>
      <ul className="list_data_contact">
        {itemsDataCU({
          onClick: () => refireccion("tel:+12159541997"),
          imgIcon: <SvgPhone fill="var(--color-primary)" />,
          title: "Phone",
          data: "215 954 1997",
        })}
        {itemsDataCU({
          onClick: () => refireccion("mailto:sandra@skcleaningllc.com"),
          imgIcon: <SvgEmail fill="var(--color-primary)" />,
          title: "Email",
          data: "sandra@skcleaningllc.com",
        })}
        {itemsDataCU({
          imgIcon: <SvgClock fill="var(--color-primary)" />,
          title: "Opening Hours",
          data: "7.am - 8.pm",
        })}
      </ul>

      <style jsx>{`
        .list_data_contact {
          display: -webkit-inline-box;
          /* flex-direction: row;
          justify-content: space-between; */
          margin: 5% 0 0 0;
        }
      `}</style>
    </>
  )
}
