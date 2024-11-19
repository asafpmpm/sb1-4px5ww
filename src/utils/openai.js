import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

const getContextualPrompt = (templateType, userPrompt) => {
  const contextMap = {
    'Project Initiation': 'Write a project initiation outline using the following information:',
    'Planning Phase': 'Write a planning phase outline using the following information:',
    'Monitoring and Control': 'Write a monitoring and control outline using the following information:',
    'Budget Management': 'Write a budget management outline using the following information:',
    'Risk Management': 'Write a risk management outline using the following information:',
    'Project Closure': 'Write a project closure outline using the following information:'
  };

  const context = contextMap[templateType] || `Write a ${templateType.toLowerCase()} outline using the following information:`;
  return `${context}\n\n${userPrompt}`;
};

const validateSlides = (slides) => {
  if (!Array.isArray(slides)) throw new Error('Invalid slides format');
  
  return slides.map(slide => {
    if (!slide.title || !Array.isArray(slide.content)) {
      throw new Error('Invalid slide structure');
    }
    return {
      title: slide.title,
      content: slide.content.map(item => item.toString())
    };
  });
};

export const generateTemplateContent = async (templateType, userPrompt) => {
  try {
    const contextualPrompt = getContextualPrompt(templateType, userPrompt);
    
    const systemPrompt = `You are a professional presentation generator specializing in project management presentations. Create a detailed ${templateType} presentation outline based on the user's requirements.
    
    Format your response as a valid JSON string with the following structure:
    {
      "slides": [
        {
          "title": "Slide Title",
          "content": ["Point 1", "Point 2", "Point 3", "Point 4"]
        }
      ]
    }

    Guidelines:
    - Include 3-5 slides
    - Each slide should have 4-6 bullet points
    - Content should be specific and actionable
    - Use professional project management terminology
    - Ensure all content is relevant to ${templateType}
    - Adapt the content to match the user's specific requirements`;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: systemPrompt
        },
        {
          role: "user",
          content: contextualPrompt
        }
      ],
      temperature: 0.7,
      max_tokens: 1500
    });

    const content = JSON.parse(response.choices[0].message.content);
    if (!content.slides) throw new Error('Invalid response format');
    
    return validateSlides(content.slides);
  } catch (error) {
    console.error('OpenAI API Error:', error);
    if (error.message.includes('JSON')) {
      throw new Error('Failed to generate presentation content. Please try again.');
    }
    throw new Error(error.message || 'Failed to generate presentation content');
  }
};