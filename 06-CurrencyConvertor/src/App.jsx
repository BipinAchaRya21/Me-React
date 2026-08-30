import { useEffect, useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

const countryNames = {
  USD: 'United States',
  EUR: 'Eurozone',
  INR: 'India',
  NPR: 'Nepal',
  AUD: 'Australia',
  CAD: 'Canada',
  GBP: 'United Kingdom',
  JPY: 'Japan',
  CHF: 'Switzerland',
  CNY: 'China',
  SGD: 'Singapore',
  HKD: 'Hong Kong',
  AED: 'United Arab Emirates',
  BDT: 'Bangladesh',
  PKR: 'Pakistan',
  LKR: 'Sri Lanka',
  THB: 'Thailand',
  MYR: 'Malaysia',
  IDR: 'Indonesia',
  NZD: 'New Zealand',
  ZAR: 'South Africa',
  SEK: 'Sweden',
  NOK: 'Norway',
  DKK: 'Denmark',
  PLN: 'Poland',
  CZK: 'Czech Republic',
  HUF: 'Hungary',
  TRY: 'Turkey',
  BND: 'Brunei',
  KZT: 'Kazakhstan',
  UAH: 'Ukraine',
  RUB: 'Russia',
  EGP: 'Egypt',
  SAR: 'Saudi Arabia',
  QAR: 'Qatar',
  OMR: 'Oman',
  BHD: 'Bahrain',
  KWD: 'Kuwait',
  MAD: 'Morocco',
  TND: 'Tunisia',
  NGN: 'Nigeria',
  GHS: 'Ghana',
  KES: 'Kenya',
  UGX: 'Uganda',
  RON: 'Romania',
  BGN: 'Bulgaria',
  HRK: 'Croatia',
  ISK: 'Iceland',
  MXN: 'Mexico',
  BRL: 'Brazil',
  ARS: 'Argentina',
  CLP: 'Chile',
  COP: 'Colombia',
  PEN: 'Peru',
  UYU: 'Uruguay',
  PYG: 'Paraguay',
  BOB: 'Bolivia',
  VND: 'Vietnam',
  KRW: 'South Korea',
  PHP: 'Philippines',
} 

function App() {
  const [amount, setAmount] = useState("")
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('NPR')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo).map((currency) => ({
    value: currency,
    label: `${countryNames[currency] || currency} (${currency})`,
  }))

  useEffect(() => {
    const rate = currencyInfo[to] || 0
    setConvertedAmount(amount * rate)
  }, [amount, currencyInfo, to])

  const swap = () => {
    setFrom(to)
    setTo(from)
  }

  const convert = () => {
    setConvertedAmount(amount * (currencyInfo[to] || 0))
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency.toUpperCase())}
                selectCurrency={from}
                onAmountChange={(value) => setAmount(value)}
              />
            </div>

            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>

            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency.toUpperCase())}
                selectCurrency={to}
                amountDisable
              />
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from} to {to}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
