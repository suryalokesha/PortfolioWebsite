import React, { useState } from 'react';
import { Configuration, openAIai} from 'openai';

function Chatbot() {
  const Configuration = new Configuration({apiKey:"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"});
  const openAI = new openAIai(Configuration); 
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    // Use the OpenAI API to generate a response from ChatGPT
    const result = await openai.completion({
      model: 'chatbot',
      prompt: input,
      max_tokens: 2048,
      temperature: 0.5,
    });

    setResponse(result.choices[0].text);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={input} onChange={(event) => setInput(event.target.value)} />
      <button type="submit">Send</button>
      <div >{response}</div>
    </form>
  );
}
export default Chatbot;
