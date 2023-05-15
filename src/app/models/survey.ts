export interface Survey {
  id: number
  nickname: string
  category: string
  rate: number
  sentiment_id: number
  surveyMessage: string
  translatedSurveyMessage: any
  sentiment_analysis: SentimentAnalysis
}

export interface SentimentAnalysis {
  id: number
  original_text: string
  sentiment: string
  sentence: Sentence[]
  confidence_scores: ConfidenceScore[]
}

export interface Sentence {
  id: number
  text: string
  sentiment: string
  length: number
  sentiment_analysis_id: number
  confidence_scores: ConfidenceScore[]
}

export interface ConfidenceScore {
  id: number
  positive: number
  negative: number
  neutral: number
}

