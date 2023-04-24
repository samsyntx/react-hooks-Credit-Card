import {useState} from 'react'

import {
  MainCreditCardContainer,
  LeftContainerToShow,
  CreditCardHeading,
  RightContainerToType,
  PaymentMethodContainer,
  PaymentMethodHeading,
  CardInputElements,
  HorizontalLine,
  LineHeadContainer,
  CardImageChange,
  CardHolderNameText,
  CardHolderNumber,
  CardHolderNameHere,
  CardHolderNameCard,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [holderName, setCardHolderName] = useState('')

  const cardNumberChange = event => {
    setCardNumber(event.target.value)
  }

  const cardNameChange = event => {
    setCardHolderName(event.target.value)
  }

  return (
    <MainCreditCardContainer>
      <LeftContainerToShow>
        <LineHeadContainer>
          <CreditCardHeading>CREDIT CARD</CreditCardHeading>
          <HorizontalLine />
        </LineHeadContainer>
        <CardImageChange data-testid="creditCard">
          <CardHolderNameText>
            <CardHolderNumber>{cardNumber}</CardHolderNumber>
            <CardHolderNameCard>CARDHOLDER NAME</CardHolderNameCard>
            <CardHolderNameHere>{holderName.toUpperCase()}</CardHolderNameHere>
          </CardHolderNameText>
        </CardImageChange>
      </LeftContainerToShow>
      <RightContainerToType>
        <PaymentMethodContainer>
          <PaymentMethodHeading>Payment Method</PaymentMethodHeading>
          <CardInputElements
            onChange={cardNumberChange}
            type="text"
            placeholder="Card Number"
            value={cardNumber}
          />
          <CardInputElements
            onChange={cardNameChange}
            type="text"
            placeholder="Cardholder Name"
            value={holderName}
          />
        </PaymentMethodContainer>
      </RightContainerToType>
    </MainCreditCardContainer>
  )
}

export default CreditCard
