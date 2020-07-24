import React from 'react'
import './App.css'
import { useState } from 'react'

function App() {
  const [currentQuote, setCurrentQuote] = useState(`"Smart Dollar changed my life for the better!" - Douglas Harrison`)
  const [quoteID, setQuoteID] = useState(1)
  const [initialSavings, setInitialSavings] = useState('')
  const [monthlyDeposit, setMonthlyDeposit] = useState('')
  const [totalSavings, setTotalSavings] = useState('')
  const [totalAmountSaved, setTotalAmount] = useState('')

  const quotes = [
    `"Smart Dollar changed my life for the better!" - Douglas Harrison`,
    `"Thanks to Smart Dollar, I have a mortgage." - Sandra Keefe`,
    `"I have never had so much financial support - thank you Smart Dollar!" - Michael Norris`
  ]
  window.setTimeout(myCallback, 5000)

  function myCallback() {
    if (quoteID === 2) {
      setQuoteID(0)
      setCurrentQuote(quotes[quoteID])
    } else {
      setQuoteID(quoteID + 1)
      setCurrentQuote(quotes[quoteID])
    }
  }

  function initialSavingsChange(e) {
    const re = /^[0-9\b]+$/

    if (e.target.value === '' || re.test(e.target.value)) {
       setInitialSavings(e.target.value)
    }

    if (monthlyDeposit.length > 0) {
      let savings = (Number(monthlyDeposit) * 12) * 5

      savings = savings + Number(e.target.value)
      let totalAmout = savings

      savings = Number((savings / 100) * 7).toFixed(2)
      totalAmout = (Number(totalAmout) + Number(savings)).toFixed(2)

      setTotalSavings(savings)
      setTotalAmount(totalAmout)
    }
  }

  function monthlyDepositChange(e) {
    const re = /^[0-9\b]+$/

    if (e.target.value === '' || re.test(e.target.value)) {
       setMonthlyDeposit(e.target.value)
    }

    if (initialSavings.length > 0) {
      let savings = (Number(e.target.value) * 12) * 5

      savings = savings + Number(initialSavings)
      let totalAmout = savings

      savings = Number((savings / 100) * 7).toFixed(2)
      totalAmout = (Number(totalAmout) + Number(savings)).toFixed(2)

      setTotalSavings(savings)
      setTotalAmount(totalAmout)
    }
  }

  return (
      <div className='outerArea'>
        <div className='dashboardHousing'>
          <div className='centralArea'>
            <div>
              <img alt='bank-mini-logo' src={require('./5A872B20-3819-4789-ACC0-A670F1ACF8D3.PNG')} />
              <span>Smart Dollar</span>
              <p>Start your journey today</p>
              <p>for a stronger tomorrow</p>
              <p>Choose the plan which best suits your needs</p>
              <div>
                <div className='quoteSection'>
                  <p>{currentQuote}</p>
                </div>
              </div>
            </div>
            <div className='rowSplitter'>
              <div className='optionsGrid'>
                <div>
                  <p>Standard</p>
                  <p>Weekly Money Saving Tips</p>
                  <p>Yearly Finance Review</p>
                  <p>In App Support 24/7</p>
                  <p>$5<span>/PER MONTH</span></p>
                </div>
                <div>
                  <p>Exclusive</p>
                  <p>Monthly Money Saving Webinars</p>
                  <p>Quarterly Finance Review</p>
                  <p>Zoom Call Support</p>
                  <p>$10<span>/PER MONTH</span></p>
                </div>
              </div>
              <div className='moreInformation'>
                <p>See what you can save</p>
                <div className='calculatorArea'>
                  <p>Initial Savings Deposit: $</p>
                  <input value={initialSavings} onChange={e => initialSavingsChange(e)} pattern='[0-9]*' type='text' placeholder='0' />
                  <p>No symbols, commas or points.</p>

                  <p>Monthly Deposit: $</p>
                  <input value={monthlyDeposit} onChange={e => monthlyDepositChange(e)} pattern='[0-9]*' type='text' placeholder='0' />
                  <p>No symbols, commas or points.</p>
                </div>
                {(initialSavings.length > 0 && monthlyDeposit.length > 0) && 
                  <div>
                    <span><p>Your savings over 5 years would be worth</p><p> ${totalAmountSaved}</p><p>, after earning</p><p> ${totalSavings}</p><p> in interest.</p></span>
                    <p>$600 in fees paid with exclusive package, $300 in fees paid with the standard package.</p>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default App