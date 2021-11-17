import axios from 'axios'
import { createFeedback } from '../../../utils/slack-scheme'

const sendWebhook = async ({ email, content }) => {
  return await axios.post(
    process.env.SLACK_WEBHOOK_URL,
    createFeedback({ email, content })
  )
}

export default async function handler(req, res) {
  const { method, body } = req

  try {
    switch (method) {
      case 'POST': {
        await sendWebhook({
          email: body.email,
          content: body.content,
        })
        break
      }
    }

    res.status(200).json({ status: 'success' })
  } catch (err) {
    res.status(500)
  }
}
