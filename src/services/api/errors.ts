export class APIError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'APIError';
  }
}

export class RateLimitError extends APIError {
  constructor() {
    super('Rate limit exceeded. Please try again in a few moments.');
    this.name = 'RateLimitError';
  }
}

export class NetworkError extends APIError {
  constructor() {
    super('Network error occurred. Please check your connection.');
    this.name = 'NetworkError';
  }
}