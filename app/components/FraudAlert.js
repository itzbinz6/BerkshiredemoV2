export default function FraudAlert() {
  return (
    <div className="fraud-alert">
      <div className="fraud-alert-inner">
        <i className="fa-solid fa-triangle-exclamation"></i>
        <p>
          <strong>Fraud Alert:</strong> Berkshire Hathaway and Warren Buffett do not 
          endorse any investment opportunity not described at berkshirehathaway.com. 
          If you have been scammed, please report it.{' '}
          <a href="https://www.berkshirehathaway.com/webfraud.pdf" target="_blank" rel="noreferrer">
            Read our full fraud alert →
          </a>
        </p>
      </div>
    </div>
  )
}