class ExampleSocketConnectAction extends baseAction {
  async executeMethod() {
    let { socket_id } = this;
    GLB.SOCKET_ID_ARRAY.push(socket_id);

    this.setResponse("SUCCESS");
    return {};
  }
}
module.exports = ExampleSocketConnectAction;
