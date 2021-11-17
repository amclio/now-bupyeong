import supabase from '../../../lib/supabase'
import { handleData, schemes } from '.'

export default async function handler(req, res) {
  const id = req.query.placeId

  try {
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
    res.status(400).json({ message: 'Bad Request' })
  }
}
