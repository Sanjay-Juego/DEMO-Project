
class ExampleHelloWorldAction extends baseAction {

  async executeMethod() {
    //You can set other response types as well.For custom response, you have to deifine it in global/i18n/response.js
    this.setResponse('SUCCESS');  
    return "Hellow World!..";
  };

}
module.exports = ExampleHelloWorldAction;