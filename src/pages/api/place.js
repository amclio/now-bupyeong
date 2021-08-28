import supabase from '../../lib/supabase'

const handleData = (data) => {
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

export default async function handler(req, res) {
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

    const id = req.query.id

    const { data, error } = !id
      ? await supabase.from('place').select(schemes)
      : await supabase.from('place').select(schemes).single()

    if (error) {
      res.status(400).json({ message: 'Bad Request' })
    }

    const serializedData = (!id ? data : [data]).map(handleData)

    res.status(200).json(serializedData)
  } catch (error) {
    console.log('~ error', error)
    res.status(400).json({ message: 'Bad Request' })
  }
}