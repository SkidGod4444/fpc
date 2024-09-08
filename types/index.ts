export interface Currency {
    code: string;
    name: string;
    symbol: string;
  }
  
  export const currencies: Currency[] = [
    { code: "USD", name: "US Dollar", symbol: "$" },
    { code: "EUR", name: "Euro", symbol: "€" },
    { code: "GBP", name: "British Pound", symbol: "£" },
    { code: "JPY", name: "Japanese Yen", symbol: "¥" },
    { code: "AUD", name: "Australian Dollar", symbol: "A$" },
    { code: "CAD", name: "Canadian Dollar", symbol: "C$" },
    { code: "CHF", name: "Swiss Franc", symbol: "Fr" },
    { code: "CNY", name: "Chinese Yuan", symbol: "¥" },
    { code: "INR", name: "Indian Rupee", symbol: "₹" },
    { code: "MXN", name: "Mexican Peso", symbol: "$" },
    { code: "BRL", name: "Brazilian Real", symbol: "R$" },
    { code: "RUB", name: "Russian Ruble", symbol: "₽" },
    { code: "ZAR", name: "South African Rand", symbol: "R" },
    { code: "KRW", name: "South Korean Won", symbol: "₩" },
    { code: "IDR", name: "Indonesian Rupiah", symbol: "Rp" },
    { code: "TRY", name: "Turkish Lira", symbol: "₺" },
    { code: "SAR", name: "Saudi Riyal", symbol: "﷼" },
    { code: "SEK", name: "Swedish Krona", symbol: "kr" },
    { code: "NOK", name: "Norwegian Krone", symbol: "kr" },
    { code: "DKK", name: "Danish Krone", symbol: "kr" },
    { code: "PLN", name: "Polish Zloty", symbol: "zł" },
    { code: "THB", name: "Thai Baht", symbol: "฿" },
    { code: "SGD", name: "Singapore Dollar", symbol: "S$" },
    { code: "NZD", name: "New Zealand Dollar", symbol: "NZ$" },
    { code: "MYR", name: "Malaysian Ringgit", symbol: "RM" },
    { code: "PHP", name: "Philippine Peso", symbol: "₱" },
    { code: "AED", name: "UAE Dirham", symbol: "د.إ" },
    { code: "HKD", name: "Hong Kong Dollar", symbol: "HK$" },
    { code: "EGP", name: "Egyptian Pound", symbol: "£" },
    { code: "ILS", name: "Israeli Shekel", symbol: "₪" },
    { code: "VND", name: "Vietnamese Dong", symbol: "₫" },
    { code: "PKR", name: "Pakistani Rupee", symbol: "₨" },
    { code: "COP", name: "Colombian Peso", symbol: "$" },
    { code: "NGN", name: "Nigerian Naira", symbol: "₦" },
    { code: "KES", name: "Kenyan Shilling", symbol: "KSh" },
    { code: "TZS", name: "Tanzanian Shilling", symbol: "TSh" },
    { code: "UGX", name: "Ugandan Shilling", symbol: "USh" },
    { code: "GHS", name: "Ghanaian Cedi", symbol: "GH₵" },
    { code: "BDT", name: "Bangladeshi Taka", symbol: "৳" },
    { code: "LKR", name: "Sri Lankan Rupee", symbol: "₨" },
    { code: "CZK", name: "Czech Koruna", symbol: "Kč" },
    { code: "HUF", name: "Hungarian Forint", symbol: "Ft" },
    { code: "RON", name: "Romanian Leu", symbol: "lei" },
    { code: "PEN", name: "Peruvian Sol", symbol: "S/." },
    { code: "MAD", name: "Moroccan Dirham", symbol: "د.م." },
    { code: "DZD", name: "Algerian Dinar", symbol: "دج" },
    { code: "TND", name: "Tunisian Dinar", symbol: "د.ت" },
    { code: "XOF", name: "West African CFA Franc", symbol: "Fr" },
    { code: "XAF", name: "Central African CFA Franc", symbol: "Fr" },
    { code: "BHD", name: "Bahraini Dinar", symbol: "ب.د" },
    { code: "QAR", name: "Qatari Riyal", symbol: "﷼" },
    { code: "OMR", name: "Omani Rial", symbol: "﷼" },
    { code: "KWD", name: "Kuwaiti Dinar", symbol: "د.ك" },
    { code: "JOD", name: "Jordanian Dinar", symbol: "د.ا" },
    { code: "LBP", name: "Lebanese Pound", symbol: "ل.ل" },
    { code: "BND", name: "Brunei Dollar", symbol: "B$" },
    { code: "MNT", name: "Mongolian Tugrik", symbol: "₮" },
    { code: "MMK", name: "Myanmar Kyat", symbol: "K" },
    { code: "LAK", name: "Lao Kip", symbol: "₭" },
    { code: "KHR", name: "Cambodian Riel", symbol: "៛" },
    { code: "KZT", name: "Kazakhstani Tenge", symbol: "₸" },
    { code: "UZS", name: "Uzbekistani Som", symbol: "лв" },
    { code: "AFN", name: "Afghan Afghani", symbol: "؋" },
    { code: "IRR", name: "Iranian Rial", symbol: "﷼" },
    { code: "MVR", name: "Maldivian Rufiyaa", symbol: "ރ" },
    { code: "NPR", name: "Nepalese Rupee", symbol: "₨" },
    { code: "BAM", name: "Bosnia-Herzegovina Convertible Mark", symbol: "KM" },
    { code: "ALL", name: "Albanian Lek", symbol: "L" },
    { code: "MKD", name: "Macedonian Denar", symbol: "ден" },
    { code: "GEL", name: "Georgian Lari", symbol: "₾" },
    { code: "AMD", name: "Armenian Dram", symbol: "֏" },
    { code: "AZN", name: "Azerbaijani Manat", symbol: "₼" },
    { code: "KGS", name: "Kyrgyzstani Som", symbol: "лв" },
    { code: "TJS", name: "Tajikistani Somoni", symbol: "ЅМ" },
    { code: "SYP", name: "Syrian Pound", symbol: "£" },
    { code: "BZD", name: "Belize Dollar", symbol: "BZ$" },
    { code: "PAB", name: "Panamanian Balboa", symbol: "B/." },
    { code: "CRC", name: "Costa Rican Colón", symbol: "₡" },
    { code: "NIO", name: "Nicaraguan Córdoba", symbol: "C$" },
    { code: "GTQ", name: "Guatemalan Quetzal", symbol: "Q" },
    { code: "HNL", name: "Honduran Lempira", symbol: "L" },
    { code: "PYG", name: "Paraguayan Guarani", symbol: "₲" },
    { code: "UYU", name: "Uruguayan Peso", symbol: "$U" },
    { code: "BBD", name: "Barbadian Dollar", symbol: "Bds$" },
    { code: "TTD", name: "Trinidad and Tobago Dollar", symbol: "TT$" },
    { code: "JMD", name: "Jamaican Dollar", symbol: "J$" },
    { code: "BSD", name: "Bahamian Dollar", symbol: "B$" },
    { code: "XCD", name: "East Caribbean Dollar", symbol: "$" },
    { code: "CUP", name: "Cuban Peso", symbol: "$" },
    { code: "DOP", name: "Dominican Peso", symbol: "RD$" },
    { code: "BWP", name: "Botswana Pula", symbol: "P" },
    { code: "ZMW", name: "Zambian Kwacha", symbol: "ZK" },
    { code: "MZN", name: "Mozambican Metical", symbol: "MT" },
    { code: "SZL", name: "Eswatini Lilangeni", symbol: "L" },
    { code: "MWK", name: "Malawian Kwacha", symbol: "MK" },
    { code: "SLL", name: "Sierra Leonean Leone", symbol: "Le" }
  ];
  