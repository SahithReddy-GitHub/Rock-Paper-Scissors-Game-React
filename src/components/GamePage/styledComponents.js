import styled from 'styled-components'

export const Bg = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #223a5f;
`
export const Con = styled.div`
  height: 100vh;
  width: 1000px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`
export const Nav = styled.div`
  width: 70%;
  padding: 10px 20px 10px 20px;
  border: 1px solid #ffffff;
  border-radius: 5px;
  background-color: transparent;
  display: flex;
  align-items: center;
`
export const NavCard1 = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
export const NavPara = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 2px;
  width: 50px;
`
export const NavCard2 = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100%;
`
export const Score = styled.p`
  font-size: 16px;
  color: #223a5f;
`
export const ScorePara = styled(Score)`
  font-size: 22px;
  font-weight: 700;
  font-family: 'Roboto';
`
export const PlayArea = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`
export const SymButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 15px;
`
export const SymCard = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
export const SymImg = styled.img`
  width: 150px;
  height: 150px;
`
export const ResultCon = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
`
export const ResultCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ResultHead = styled.p`
  font-size: 22px;
  color: #ffffff;
  font-family: 'Roboto';
  margin-top: 20px;
`
export const PlayAgainButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background-color: #ffffff;
  border-radius: 7px;
  width: 120px;
  padding: 7px;
  margin-top: 10px;
`
