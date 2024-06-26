import React from 'react';
import Button from '../../../../img/button.jpg';
import Display from '../../../../img/display.jpg';
import Pager from '../../../../img/pager.jpg';
import './style.css';

function Catalog() {
  return (
    <div>
      <div className="catalog">
        <section>
          <div className="catalog_block">
            <h4>CALL BUTTONS FOR WAITERS AND STAFF</h4>
            <img src={Button} alt="Button" />
          </div>
          <ul>
            <li>Transmission distance: up to 150 meters (without obstacles)</li>
            <li>Power supply: 2 x CR2016 button cell (included)</li>
            <li>The battery in the button will last you from 1 to 3 years.</li>
            <li>Operating Temperature: -20°C~+55°C</li>
            <li>Material: ABS Plastic</li>
            <li>Size: 59 x 59 x 13 mm</li>
            <li>Color: Black</li>
            <li>Weight: 27 gram</li>
            <li>Operating frequency: 433MHz</li>
            <li>Compatible with all BELFIX receivers.</li>
            <li>Note! To call the staff you will need a receiver signal: pager or scoreboard.</li>
          </ul>
        </section>
        <section>
          <div className="catalog_block">
            <h4>CALL DISPLAY BOARD</h4>
            <img src={Display} alt="Display" />
          </div>
          <ul>
            <li>The degree of moisture resistance corresponds to the IPX7 standard.</li>
            <li>Displays 10 calls in scroll mode.</li>
            <li>The pager can be programmed for a maximum of 500 wireless transmitters (buttons).</li>
            <li>You can edit transmitter names and set functions to buttons.</li>
            <li>Battery life in different conditions: Up to 7 days.</li>
            <li>Built-in rechargeable lithium battery with high capacity.</li>
            <li>Improved power saving mode.</li>
            <li>The type of alert is vibration.</li>
            <li>Operating frequency: 433MHz</li>
            <li>Compatible with all BELFIX transmitters.</li>
            <li>Included: charger and setup instructions.</li>
          </ul>
        </section>
        <section>
          <div className="catalog_block">
            <h4>PAGERS FOR WAITERS AND STAFF</h4>
            <img src={Pager} alt="Pagers" />
          </div>
          <ul>
            <li>The degree of moisture resistance corresponds to the IPX7 standard.</li>
            <li>Displays 10 calls in scroll mode.</li>
            <li>The pager can be programmed for a maximum of 500 wireless transmitters (buttons).</li>
            <li>You can edit transmitter names and set functions to buttons.</li>
            <li>Battery life in different conditions: Up to 7 days.</li>
            <li>Built-in rechargeable lithium battery with high capacity.</li>
            <li>Improved power saving mode.</li>
            <li>The type of alert is vibration.</li>
            <li>Operating frequency: 433MHz</li>
            <li>Compatible with all BELFIX transmitters.</li>
            <li>Included: charger and setup instructions.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Catalog;
