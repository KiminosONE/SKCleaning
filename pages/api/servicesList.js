export default function handler(req, res) {
  res.status(200).json({
    Kitchen: [
      `Clean counters, sinks, faucets
      Clean appliance exteriors
      Clean inside microwaves
      Clean stove top
      Wash floor
      Windows
      Baseboards`,
      `Clean inside cabinets
      Clean inside refrigerator
      Inside oven`,
    ],
    Bathrooms: [
      `Scour sink, tub and toilet
      Clean tile
      Clean mirrors
      Vacuum throw rugs
      Wash floor
      Windows
      Baseboards`,
      `Clean inside cabinets`,
    ],
    LivingSpaces: [
      `Dust
      Wash floors
      Vacuum carpets
      Change beds
      Windows
      Baseboards`,
    ],
  })
}
