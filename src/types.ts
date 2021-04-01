
export type PointOfInterest = {
  // id: number
  title: string
  position: {lat: number, lng: number}
}

export type Probe = {
  title: string
  icon: string
  description?: string
  bullets: string[]
}
