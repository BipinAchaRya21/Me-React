import { useEffect, useState } from 'react'

function useCurrencyInfo(currency) {
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const baseCurrency = currency?.toUpperCase?.() || 'USD'
        const response = await fetch(`https://open.er-api.com/v6/latest/${baseCurrency}`)
        const result = await response.json()

        const rates = {
          ...(result.rates || {}),
          [baseCurrency]: 1,
        }

        const normalizedRates = Object.fromEntries(
          Object.entries(rates).map(([key, value]) => [key.toUpperCase(), value])
        )

        setData(normalizedRates)
      } catch (error) {
        console.error('Currency fetch failed:', error)
        setData({})
      }
    }

    if (currency) {
      fetchCurrencyData()
    }
  }, [currency])

  return data
}

export default useCurrencyInfo