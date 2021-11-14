import supabase from '../../../lib/supabase'
import { handleData } from '.'

export default async function handler(req, res) {
  const id = req.query.placeId

  try {
    const schemes = `
      id,
      type,
      lat,
      lon,
      _name: place_name (
        language,
        name
      ),
      _description: place_description (
        language,
        description
      ),
      photo: place_photo (
        url: photo_url
      )
    `

    const { data, error } = await supabase
      .from('place')
      .select(schemes)
      .match({ id })
      .single()

    if (error) {
      res.status(400).json({ message: 'Bad Request' })
    }

    const serializedData = handleData(data)

    res.status(200).json(serializedData)
  } catch (error) {
    console.log('~ error', error)
    res.status(400).json({ message: 'Bad Request' })
  }
}
