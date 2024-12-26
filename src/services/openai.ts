const API_KEY = "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";

export async function generateMessage(prompt: string, category: string, tone: string): Promise<string> {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{
          role: 'system',
          content: `You are a helpful assistant that generates ${tone} messages for ${category}. Include appropriate emojis in the response.`
        }, {
          role: 'user',
          content: prompt
        }],
        temperature: 0.7,
        max_tokens: 150,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate message');
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    throw new Error('Failed to generate message. Please try again.');
  }
}