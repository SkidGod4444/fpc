# Freelance Price Calculator

![Freelance Price Calculator](https://i.imgur.com/1zeZewW.png)

A powerful and intuitive tool for freelancers to calculate project prices and convert currencies, built with Next.js and Bun.

## Features

- 🧮 Calculate project earnings based on total amount, duration, and work schedule
- 💱 Real-time currency conversion
- 📅 Date range selection for project duration
- 🌐 Support for multiple currencies

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine
- A free API key from [CurrencyAPI](https://app.currencyapi.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SkidGod4444/fpc.git
   cd fpc
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Create a `.env.local` file in the root directory and add your CurrencyAPI key:
   ```
   CURRENCY_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Usage

1. Enter the total project amount
2. Select the project duration using the date picker
3. Adjust work hours per day and days per week if needed
4. View the calculated hourly rate and other project metrics
5. Use the currency converter tab to convert between different currencies

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework for the Web
- [Bun](https://bun.sh/) - A fast all-in-one JavaScript runtime
- [CurrencyAPI](https://currencyapi.com/) - Real-time currency conversion rates

---

Built with ❤️ by [Saidev Dhal](https://devwtf.in/)
