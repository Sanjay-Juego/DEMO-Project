
class ExampleStrictEncryptionAction extends baseAction {

  async executeMethod() {
    //NOTE: For this endpoint ENCRYPTION_MODE is set to strict in config.json. 
    //Also set ENCRPTION_KEY and ENCRYPTION_IV in config (Any key is valid).
    //NOTE: In http/https request, encrypted text should be sent in a parameter called data (ex: data=hsjdhsjdhfrtwikaj).
    
    let { user_name } = this;
    
    this.setResponse('SUCCESS');
    return `Hai ${user_name}, welcome to Njs2 Demo project (Strict Encryption)`
  };

}
module.exports = ExampleStrictEncryptionAction;