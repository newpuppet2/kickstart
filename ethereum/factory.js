import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xC1Cb9939f677dE35eE26ddB71Ca403dBCBcfa4c9'
);

export default instance;
