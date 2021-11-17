import supabase from '../../../lib/supabase'

export const handleData = (data) => {
  data.name = {}
  data.description = {}

  data._name.forEach(({ language, name }) => {
    data.name[language] = name
  })

  data._description.forEach(({ language, description }) => {
    if (!data.description[language]) {
      data.description[language] = []
    }

    data.description[language].push(description)
  })

  data.photo = data.photo.map((element) => element.url)

  delete data._name
  delete data._description

  return data
}

export const schemes = `
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

export default async function handler(req, res) {
  try {
    const { data, error } = await supabase.from('place').select(schemes)

    if (error) {
      res.status(400).json({ message: 'Bad Request' })
    }

    const serializedData = data.map(handleData)

    res.status(200).json(serializedData)
  } catch (error) {
    res.status(400).json({ message: 'Bad Request' })
  }
}
