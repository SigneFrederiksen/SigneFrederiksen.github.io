// Imports data from the files into this file.
// Data from files can now be used in this file also. 
import Data from './data.js';
import ContentTemplate from './temp.js';


class MyContent {

    constructor() {
        this.bitcoinDataElement = document.querySelector(".bitcoin-list");
        this.listBitcoinData();

        this.updateDataElement = document.querySelector(".update-data");
        this.updateData();
    }

    async listBitcoinData() {
        let bitCoinData = await Data.getBitcoinData();

        for (let currency of Object.keys(bitCoinData.rates)) {

            let data = bitCoinData.rates[currency];
            //console.log(currency);

            let listElement = ContentTemplate.toDom(`
                <div class="bitcoin-item">
                    <h4>"${currency}": <span class="curl">&#123;</span></h4>
                    <div class="bitcoin-content">
                        <p>"rate": ${data.rate}</p>
                        <p>"name": ${data.name}</p>
                    </div>
                </div>
                <h4><span class="curl">&#125;,</span></h4>
            `);
            this.bitcoinDataElement.appendChild(listElement);
        }
    }

    updateData() {
        this.updateDataElement.addEventListener("click", () => {
            //alert("Success");
            //console.log("It worked!");
            location.reload(true)
        });
    }

}
export default MyContent;
