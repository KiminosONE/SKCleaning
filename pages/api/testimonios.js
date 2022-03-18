export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: "Kathleen",
      location: "Cheltenham",
      img: "/images/happyMan.jpg",
      testi: `Sandra´s cleaning service is by far the best one I have ever used. They always bring their own equipment and supplies. They show up on time. They work swiftly and efficiently. They see what needs to be done  and then do it. They are cheerful and pleasant. Other cleaners I have used have arrived late (or not at all), borrowed my equipment and supplies, wasted time talking on the phone, and even asked me for payment in advance. Not Sandra! Her crew is great -- very professional. My house always looks and smells great after they have done their work`,
    },
    {
      id: 2,
      name: "Andres",
      location: "Norhteast",
      img: "/images/happyMan.jpg",
      testi: `I am the envy of the Neighborhood, thanks to SK Cleaning`,
    },
    {
      id: 3,
      name: "Jhon",
      location: "Cherry Hill",
      img: "/images/happyMan.jpg",
      testi: `Now that SK cleaning comes, I feel like I am premiering my house`,
    },
  ])
}
