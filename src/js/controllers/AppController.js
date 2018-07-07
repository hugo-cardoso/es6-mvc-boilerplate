import YouService from '../services/YouService';

import Model from '../models/Model';

class AppController {

  constructor() {
    
    this.youtService = new YouService();
    this.init();
  }

  init() {

    console.log("init...");
  }  
}

export default AppController;