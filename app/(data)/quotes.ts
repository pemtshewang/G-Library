const quotes: {
  quote: string;
  author: string;
}[] = [
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      quote:
        "Success is not the key to happiness. Happiness is the key to success.",
      author: "Albert Schweitzer",
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
    {
      quote: "Opportunities don't happen, you create them.",
      author: "Chris Grosser",
    },
    {
      quote:
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      quote: "Don’t watch the clock; do what it does. Keep going.",
      author: "Sam Levenson",
    },
    {
      quote: "Dream big and dare to fail.",
      author: "Norman Vaughan",
    },
    {
      quote:
        "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
      author: "Ralph Waldo Emerson",
    },
    {
      quote: "The best way to predict the future is to create it.",
      author: "Peter Drucker",
    },
    {
      quote: "Life is 10% what happens to us and 90% how we react to it.",
      author: "Charles R. Swindoll",
    },
    {
      quote: "Do what you can, with what you have, where you are.",
      author: "Theodore Roosevelt",
    },
    {
      quote:
        "The only limit to our realization of tomorrow is our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      quote: "Don't let yesterday take up too much of today.",
      author: "Will Rogers",
    },
    {
      quote: "It’s not whether you get knocked down, it’s whether you get up.",
      author: "Vince Lombardi",
    },
    {
      quote: "We may encounter many defeats but we must not be defeated.",
      author: "Maya Angelou",
    },
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
    },
    {
      quote: "You miss 100% of the shots you don’t take.",
      author: "Wayne Gretzky",
    },
    {
      quote: "Your time is limited, don’t waste it living someone else’s life.",
      author: "Steve Jobs",
    },
    {
      quote: "You can’t use up creativity. The more you use, the more you have.",
      author: "Maya Angelou",
    },
  ];

export const getRandomQuote = () => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  return quotes[randomNumber];
};
