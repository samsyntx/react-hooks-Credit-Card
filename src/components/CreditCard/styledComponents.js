import styled from 'styled-components'

export const MainCreditCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 100vh;
`

export const LeftContainerToShow = styled.div`
  background-color: #3b4b69;
  width: 50%;
  padding: 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LineHeadContainer = styled.div`
  width: 250px;
`

export const CreditCardHeading = styled.h1``

export const HorizontalLine = styled.hr`
  border: 1px solid #ffd773;
  width: 150px;
`

export const CardImageChange = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  height: 250px;
  width: 400px;
  background-size: cover;
  background-attachment: center center;
  border-radius: 15px;
  padding: 25px;
  margin-top: 200px;
  display: flex;
  align-items: flex-end;
`

export const CardHolderNameText = styled.div`
  font-size: 15px;
  margin-bottom: 10px;
  color: #c3cad9;
`

export const CardHolderNumber = styled.p`
  color: #fff;
  font-size: 25px;
  margin-bottom: 20px;
  font-weight: bold;
`

export const CardHolderNameHere = styled.p`
  margin-top: 15px;

  color: #fff;
`
export const CardHolderNameCard = styled.p``
// Right Container Starting

export const RightContainerToType = styled.div`
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PaymentMethodContainer = styled.div`
  box-shadow: 2px 2px 5px #c3cad9;
  padding: 20px;
  border-radius: 10px;
  width: 60%;
  text-align: center;
`

export const PaymentMethodHeading = styled.h1`
  color: #475569;
  font-size: 20px;
  margin-bottom: 35px;
`
export const CardInputElements = styled.input`
  width: 90%;
  box-shadow: 1px 1px 3px #c3cad9;
  border: none;
  height: 45px;
  border-radius: 5px;
  padding: 10px;
  outline: none;
  margin: 15px 0px 15px 0px;
`
