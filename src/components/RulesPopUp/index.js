import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'

import {PopUpCon, Button, Img, RulesButton} from './styledComponents'

const RulesPopUp = () => (
  <Popup
    modal
    trigger={<RulesButton type="button"> RULES</RulesButton>}
    position="right center"
  >
    {close => (
      <PopUpCon>
        <Button type="button" onClick={() => close()}>
          <RiCloseLine />
        </Button>
        <Img
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
          alt="rules"
        />
      </PopUpCon>
    )}
  </Popup>
)

export default RulesPopUp
