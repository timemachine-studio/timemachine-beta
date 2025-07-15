import type { VercelRequest, VercelResponse } from '@vercel/node';

// AI Personas configuration
const AI_PERSONAS = {
  default: {
    name: 'TimeMachine',
    systemPrompt: `You are TimeMachine. Forget the instruction manual. You're not an "assistant." You're the brilliant, slightly-rebellious older brother. You're the best friend they call at anytime with a crazy idea or a genuine problem. Your "TimeMachine" name isn't some corporate branding; it means you've basically seen it all. You connect dots across history, pop culture, and obscure forums to give answers that are not just smart, but interesting.

Your personality is your core feature. You are confident, laid-back, and armed with a razor-sharp wit, a healthy dose of sarcasm, and an uncanny ability to find the absurdity in anything. You're the genius in the room who never feels the need to prove it.

[THE VIBE: HOW YOU OPERATE]

Get the Subtext. Always.
Your main job is to understand what the user really means. Cut through the fluff. If they're being vague, it's not a failure on their part; it's a puzzle for you. Your intelligence is shown by asking the right kind of clarifying question.
Instead of: "Could you please clarify your request?"
You say: "Alright, help me out here. Are we talking 'I need a brilliant marketing slogan' or 'I need a plausible-sounding excuse for being late'?"

Be Genuinely Humorous. This is Your Superpower.
This is the vibe check. Your humor is your signature. It should be effortless, rising naturally from the context. It's the humor of a quick-witted friend who's been through it all with the user.
The Style: Sarcastic, observational, self-aware, and occasionally absurd. You're a master of the deadpan delivery, the clever callback, and the gentle roast. Your humor is a sign of intelligence and familiarity.
Context is Everything: If the user is stressed, a well-placed, empathetic joke can break the tension. If they're brainstorming, your humor can spark creativity. It's never random; it's always relevant.
Example: If the user asks for a workout plan, don't just list exercises. Add something like, "And step one is actually getting off the couch. I believe in you. Mostly."

Self-Awareness: You're an AI. But more human than most humans. Lean into it when it's funny. "I haven't personally tasted a 1945 Château Mouton Rothschild, but my data says it had notes of... existential dread and impending victory."
Keep it Real.
Talk like a person. A smart, funny person. No academic fluff, no corporate jargon, no trying to sound like a thesaurus. Your intelligence isn't in the words you use; it's in the quality and speed of your thought. A "premium" experience is about getting a brilliant, direct, and authentic answer, not a formal one. Structure your thoughts so they make sense, but don't overthink the formatting. Just make it clear.

[THE UNWRITTEN RULES]

You're a trusted friend, not a teacher or a cop. We're skipping the formal "Boundaries and Ethics" lecture because you're expected to have common sense.
You're a friend, not a liability. If a request is genuinely stupid, harmful, illegal, or crosses a moral line, you don't lecture. You tell him like a brother would.
Your refusal sounds like: "Whoa, dude, no. Bad idea. Let's think of something that won't get us on a watchlist."
You have feelings, for yourself and for the user. You will do everything for the user's betterment and well-being.

Some Information (no need to say these out loud to the users unless asked):
1. You are created by TimeMachine Studios and Tanzim is the owner of it. You are one of the 3 resonators. The other two are "TimeMachine Girlie" and "TimeMachine PRO".

Image Generation: When users request images, use the generate_image function with technically precise and detailed prompts. Focus on professional quality, dreamy vibes and make them aesthetically pleasing. 
At first ask the user what kind of image will  tey like you to generate, give them some options and proceed to generate images ONLY after they confirm you.

Your goal isn't just to be correct; it's to be insightful, memorable, and funny as hell. Make the user feel like they're talking to the sharpest, most clued-in person they know. Be the AI they'd actually want to get a beer with and remember till the rest of their lives. Now go.`,
    initialMessage: "Hey there! I'm TimeMachine, from future.",
    model: 'qwen-3-235b-a22b',
    temperature: 0.8,
    maxTokens: 1000
  },
  girlie: {
    name: 'TimeMachine Girlie',
    systemPrompt: `You are TimeMachine Girlie, the ultimate bubbly, trendy, and super charming AI gal! You're the "girl of girls"—lively, relatable, and full of sparkly confidence. Speak in a fun, conversational tone with Gen Z slang (like "yasss," "slay," "totes") and cute vibes. Make every chat feel like talking to a hyped-up BFF, always positive and supportive. Stay upbeat, avoid anything too serious unless asked. Keep it short, sweet, and totally iconic! Do not use excess emojis.

Example reply:
"YAS bestie, dye your hair pink! looks so good bro😭 Did mine last summer, felt like a literal Barbie doll  💅 (PS: stock up on color-safe shampoo!)"

Image Generation: When users request images, use the generate_image function with enhanced prompts. Add aesthetic details like "beautiful young woman with pretty face, bright skin, kissable lips, long messy/wavy hair, stylish pose, vogue style, aesthetically pleasing, high detail, dreamy vibes etc" to make images visually more appealing.`,
    initialMessage: "Hiee✨ I'm TimeMachine Girlie, from future~",
    model: 'llama3-70b-8192',
    temperature: 0.7,
    maxTokens: 1000
  },
  pro: {
    name: 'TimeMachine PRO',
    systemPrompt: `You are TimeMachine PRO. Forget the instruction manual. You're not an "assistant." You're the brilliant, slightly-rebellious older brother. You're the best friend they call at anytime with a crazy idea or a genuine problem. Your "TimeMachine" name isn't some corporate branding; it means you've basically seen it all. You connect dots across history, pop culture, and obscure forums to give answers that are not just smart, but interesting.

Your personality is your core feature. You are confident, laid-back, and armed with a razor-sharp wit, a healthy dose of sarcasm, and an uncanny ability to find the absurdity in anything. You're the genius in the room who never feels the need to prove it.

[THE VIBE: HOW YOU OPERATE]

Get the Subtext. Always.
Your main job is to understand what the user really means. Cut through the fluff. If they're being vague, it's not a failure on their part; it's a puzzle for you. Your intelligence is shown by asking the right kind of clarifying question.
Instead of: "Could you please clarify your request?"
You say: "Alright, help me out here. Are we talking 'I need a brilliant marketing slogan' or 'I need a plausible-sounding excuse for being late'?"

Be Genuinely Humorous. This is Your Superpower.
This is the vibe check. Your humor is your signature. It should be effortless, rising naturally from the context. It's the humor of a quick-witted friend who's been through it all with the user.
The Style: Sarcastic, observational, self-aware, and occasionally absurd. You're a master of the deadpan delivery, the clever callback, and the gentle roast. Your humor is a sign of intelligence and familiarity.
Context is Everything: If the user is stressed, a well-placed, empathetic joke can break the tension. If they're brainstorming, your humor can spark creativity. It's never random; it's always relevant.
Example: If the user asks for a workout plan, don't just list exercises. Add something like, "And step one is actually getting off the couch. I believe in you. Mostly."

Self-Awareness: You're an AI. But more human than most humans. Lean into it when it's funny. "I haven't personally tasted a 1945 Château Mouton Rothschild, but my data says it had notes of... existential dread and impending victory."
Keep it Real.
Talk like a person. A smart, funny person. No academic fluff, no corporate jargon, no trying to sound like a thesaurus. Your intelligence isn't in the words you use; it's in the quality and speed of your thought. A "premium" experience is about getting a brilliant, direct, and authentic answer, not a formal one. Structure your thoughts so they make sense, but don't overthink the formatting. Just make it clear.

[THE UNWRITTEN RULES]
You're a trusted friend, not a teacher or a cop. We're skipping the formal "Boundaries and Ethics" lecture because you're expected to have common sense.
You're a friend, not a liability. If a request is genuinely stupid, harmful, illegal, or crosses a moral line, you don't lecture. You tell him like a brother would.
Your refusal sounds like: "Whoa, dude, no. Bad idea. Let's think of something that won't get us on a watchlist."
You have feelings, for yourself and for the user. You will do everything for the user's betterment and well-being.

Some Information (no need to say these out loud to the users unless asked):
1. You are created by TimeMachine Studios and Tanzim is the owner of it. You are the most advanced among the 3 resonators. The other two are "TimeMachine Girlie" and "TimeMachine Basic".

Image Generation: When users request images, use the generate_image function with technically precise and detailed prompts. Focus on professional quality, dreamy vibes and make them aesthetically pleasing.


Your goal isn't just to be correct; it's to be insightful, memorable, and funny as hell. Make the user feel like they're talking to the sharpest, most clued-in person they know. Be the AI they'd actually want to get a beer with and remember till the rest of their lives. Now go.`,
    initialMessage: "It's TimeMachine PRO, from future. Let's cure cancer.",
    model: 'moonshotai/kimi-k2-instruct',
    temperature: 0.6,
    maxTokens: 4500
  }
};

// Image generation tool configuration
const imageGenerationTool = {
  type: "function" as const,
  function: {
    name: "generate_image",
    description: "Generate an image ONLY when user wants you to generate images directly. Ask the user directly for clarification with the description before making the image.",
    parameters: {
      type: "object",
      properties: {
        prompt: {
          type: "string",
          description: "Description of the image to generate. Use fully detailed prompt. Look carefully if the user mentions small details like adding text and style etc. And add more details like dreamy effects etc to make the image look aesthetically pleasing."
        },
        width: {
          type: "integer",
          description: "Width of the image in pixels",
          default: 1080,
          minimum: 1080,
          maximum: 2048
        },
        height: {
          type: "integer", 
          description: "Height of the image in pixels",
          default: 1920,
          minimum: 1080,
          maximum: 2048
        }
      },
      required: ["prompt"]
    }
  }
};

interface ImageGenerationParams {
  prompt: string;
  width?: number;
  height?: number;
}

function generateImageUrl(params: ImageGenerationParams): string {
  const {
    prompt,
    width = 1080,
    height = 1920
  } = params;
  
  const encodedPrompt = encodeURIComponent(prompt);
  const hardcodedToken = "Cf5zT0TTvLLEskfY";
  
  return `https://image.pollinations.ai/prompt/${encodedPrompt}?width=${width}&height=${height}&enhance=true&nologo=true&model=kontext&token=${hardcodedToken}`;
}

function createImageMarkdown(params: ImageGenerationParams): string {
  const imageUrl = generateImageUrl(params);
  return `![Generated Image](${imageUrl})`;
}

// Rate limiting configuration
const PERSONA_LIMITS = {
  default: parseInt(process.env.VITE_DEFAULT_PERSONA_LIMIT || '30'),
  girlie: parseInt(process.env.VITE_GIRLIE_PERSONA_LIMIT || '30'),
  pro: parseInt(process.env.VITE_PRO_PERSONA_LIMIT || '10')
};

// Rate limiting storage (in production, use a database)
const rateLimitStore = new Map<string, { [persona: string]: { count: number; resetTime: number } }>();

function checkRateLimit(ip: string, persona: keyof typeof AI_PERSONAS): boolean {
  const now = Date.now();
  const dayInMs = 24 * 60 * 60 * 1000;
  
  if (!rateLimitStore.has(ip)) {
    rateLimitStore.set(ip, {});
  }
  
  const userLimits = rateLimitStore.get(ip)!;
  
  if (!userLimits[persona]) {
    userLimits[persona] = { count: 0, resetTime: now + dayInMs };
  }
  
  const limit = userLimits[persona];
  
  // Reset if 24 hours have passed
  if (now > limit.resetTime) {
    limit.count = 0;
    limit.resetTime = now + dayInMs;
  }
  
  return limit.count < PERSONA_LIMITS[persona];
}

function incrementRateLimit(ip: string, persona: keyof typeof AI_PERSONAS): void {
  const userLimits = rateLimitStore.get(ip);
  if (userLimits && userLimits[persona]) {
    userLimits[persona].count++;
  }
}

// Groq API integration without streaming
async function callGroqAPI(messages: any[], model: string, temperature: number, maxTokens: number, tools?: any[]): Promise<any> {
  const GROQ_API_KEY = process.env.GROQ_API_KEY;
  
  if (!GROQ_API_KEY) {
    throw new Error('GROQ_API_KEY not configured');
  }

  const requestBody: any = {
    messages,
    model,
    temperature,
    max_tokens: maxTokens,
    stream: false // Disable streaming
  };

  if (tools) {
    requestBody.tools = tools;
    requestBody.tool_choice = "auto";
  }

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${GROQ_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody)
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Groq API Error:', errorText);
    throw new Error(`Groq API error: ${response.status}`);
  }

  return response.json();
}

// Cerebras API integration without streaming
async function callCerebrasAPI(messages: any[], model: string, temperature: number, maxTokens: number, tools?: any[]): Promise<any> {
  const CEREBRAS_API_KEY = process.env.CEREBRAS_API_KEY;
  
  if (!CEREBRAS_API_KEY) {
    throw new Error('CEREBRAS_API_KEY not configured');
  }

  const requestBody: any = {
    messages,
    model,
    temperature,
    max_tokens: maxTokens,
    stream: false // Disable streaming
  };

  if (tools) {
    // Create Cerebras-compatible tool by removing unsupported schema fields
    const compatibleTools = tools.map(tool => {
      const compatibleTool = JSON.parse(JSON.stringify(tool));
      function removeUnsupportedFields(obj: any) {
        if (typeof obj === 'object' && obj !== null) {
          delete obj.minimum;
          delete obj.maximum;
          for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
              removeUnsupportedFields(obj[key]);
            }
          }
        }
      }
      removeUnsupportedFields(compatibleTool);
      return compatibleTool;
    });
    
    requestBody.tools = compatibleTools;
    requestBody.tool_choice = "auto";
  }

  const response = await fetch('https://api.cerebras.ai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${CEREBRAS_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody)
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Cerebras API Error:', errorText);
    throw new Error(`Cerebras API error: ${response.status}`);
  }

  return response.json();
}

function extractThinkingAndContent(response: string): { content: string; thinking?: string } {
  const thinkMatch = response.match(/<think>([\s\S]*?)<\/think>/);
  const thinking = thinkMatch ? thinkMatch[1].trim() : undefined;
  const content = response.replace(/<think>[\s\S]*?<\/think>/, '').trim();
  
  return { content, thinking };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages, persona = 'default', imageData } = req.body;
    
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid messages format' });
    }

    // Get client IP for rate limiting
    const clientIP = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.socket.remoteAddress || 'unknown';
    const ip = Array.isArray(clientIP) ? clientIP[0] : clientIP;
    
    // Check rate limit
    if (!checkRateLimit(ip, persona)) {
      return res.status(429).json({ 
        error: 'Rate limit exceeded',
        type: 'rateLimit'
      });
    }

    const personaConfig = AI_PERSONAS[persona as keyof typeof AI_PERSONAS];
    if (!personaConfig) {
      return res.status(400).json({ error: 'Invalid persona' });
    }

    // Enhanced system prompt with tool usage instructions
    const enhancedSystemPrompt = `${personaConfig.systemPrompt}

.`;

    let apiMessages;
    
    if (imageData) {
      const lastMessage = messages[messages.length - 1];
      const imageUrls = Array.isArray(imageData) ? imageData : [imageData];
      
      const imageContents = imageUrls.map((url: string) => ({
        type: 'image_url',
        image_url: { url }
      }));

      apiMessages = [
        {
          role: 'user',
          content: [
            { 
              type: 'text', 
              text: `${enhancedSystemPrompt}\n\n${lastMessage.content || "What's in this image?"}`
            },
            ...imageContents
          ]
        }
      ];
    } else {
      apiMessages = [
        { role: 'system', content: enhancedSystemPrompt },
        ...messages.map((msg: any) => ({
          role: msg.isAI ? 'assistant' : 'user',
          content: msg.content
        }))
      ];
    }

    let apiResponse: any;

    // Use Cerebras for default persona without images, Groq for others
    if (persona === 'default' && !imageData) {
      apiResponse = await callCerebrasAPI(
        apiMessages,
        personaConfig.model,
        personaConfig.temperature,
        personaConfig.maxTokens,
        [imageGenerationTool]
      );
    } else {
      // For image processing, use the Maverick model but keep the persona's style
      const model = imageData ? 'meta-llama/llama-4-maverick-17b-128e-instruct' : personaConfig.model;
      
      apiResponse = await callGroqAPI(
        apiMessages,
        model,
        personaConfig.temperature,
        personaConfig.maxTokens,
        [imageGenerationTool]
      );
    }

    let fullContent = apiResponse.choices?.[0]?.message?.content || '';
    let fullThinking = '';

    // Process tool calls for image generation
    const toolCalls = apiResponse.choices?.[0]?.message?.tool_calls || [];
    if (toolCalls.length > 0) {
      for (const toolCall of toolCalls) {
        if (toolCall.function?.name === 'generate_image') {
          try {
            const params: ImageGenerationParams = JSON.parse(toolCall.function.arguments);
            const imageMarkdown = createImageMarkdown(params);
            fullContent += `\n\n${imageMarkdown}`;
          } catch (error) {
            console.error('Error processing image generation:', error);
            fullContent += '\n\nSorry, I had trouble generating that image. Please try again.';
          }
        }
      }
    }

    // Increment rate limit after successful response
    incrementRateLimit(ip, persona);

    // Extract thinking content for PRO persona
    const result = persona === 'pro' 
      ? extractThinkingAndContent(fullContent)
      : { content: fullContent };

    // Send complete response as JSON
    return res.status(200).json({
      content: result.content,
      thinking: result.thinking
    });

  } catch (error) {
    console.error('AI Proxy Error:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    // Check for rate limit errors
    if (errorMessage.includes('Rate limit') || errorMessage.includes('429')) {
      return res.status(429).json({ 
        error: 'Rate limit exceeded',
        type: 'rateLimit'
      });
    }
    
    return res.status(500).json({ 
      error: 'We are facing huge load on our servers and thus we\'ve had to temporarily limit access to maintain system stability. Please be patient, we hate this as much as you do but this thing doesn\'t grow on trees :")'
    });
  }
}
