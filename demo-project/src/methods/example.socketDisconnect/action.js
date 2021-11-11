const { sockets } = require("@njs2/base");
class ExampleSocketDisconnectAction extends baseAction {
  async executeMethod() {
    let { socket_id } = this;

    let index = GLB.SOCKET_ID_ARRAY.indexOf(socket_id);
    GLB.SOCKET_ID_ARRAY.splice(index, 1);

    GLB.SOCKET_ID_ARRAY.map((s_id) => {
      sockets.emit(s_id, "Remaining Users are " + GLB.SOCKET_ID_ARRAY);
    });

    this.setResponse("SUCCESS");
    return {};
  }
}
module.exports = ExampleSocketDisconnectAction;
