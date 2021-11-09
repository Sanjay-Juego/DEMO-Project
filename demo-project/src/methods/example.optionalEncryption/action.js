
class ExampleOptionalEncryptionAction extends baseAction {

  async executeMethod() {
    //NOTE: For this endpoint ENCRYPTION_MODE is set to optional in config.json. 
    //It means that the endpoint will work in both cases (enc_state=1 or 0).
    let { name } = this;
    
    this.setResponse('SUCCESS');
    return `Hai ${name}, welcome to Njs2 Demo project (Optional Encryption)`;
  };

}
module.exports = ExampleOptionalEncryptionAction;