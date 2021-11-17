export const createFeedback = ({ email, content }) => {
  return {
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: '새 피드백이 도착했습니다!',
          emoji: true,
        },
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*이메일:*\n${email}`,
          },
        ],
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*내용*\n${content}`,
          },
        ],
      },
    ],
  }
}
