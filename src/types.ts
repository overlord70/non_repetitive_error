export type Item = {
    id: number
    title: string
    description: string
    price: number
    rating: number
    type: string
    media:Array<String>
    colors:Array<String>
    salePercentage: number
    isBlackFriday: boolean
}

export type Reload = {
    arr: Array<Item>
    place: HTMLDivElement
}