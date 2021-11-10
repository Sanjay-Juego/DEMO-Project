class ExampleEncryptionStrictAction extends baseAction {
  async executeMethod() {
    /*
    ENCRYPTION STRICT MODE EXAMPLE

    Prerequisites:
    ? encryption mode know about encryption and decryption from

    Steps:
    1. In config/config.json, set the following:
       "ENCRYPTION_MODE": "strict",
       "ENCRYPTION_KEY": "8VUK2RFKZUbbpXPhWYXGSvZzixsD9kec",
       "ENCRYPTION_IV": "Jx7wyKi67LBICY1w"
    2. Run command in terminal: njs2 run express;
    3. In postman under the header section, pass enc_state = 1
    4. Pass the following argument under params:
        data = 6iAx7g%2BIwBXaDF3hJ8EXj8Ef3BLXqZJVC%2FbJy%2FN6BPI%3D 
    5. You will get the following response:
        S7sBFm5KvNq+WSyorwmciKV03DxEEQpElG77I86w8NMNZP8JwhdsCmNnIRybztPZULgW790T8/xbCQibKVq6TQ==
    6. If you decrypt the above response, you will get the following:
        "Hai user123, welcome to Njs2 Demo project (Strict Encryption)"
    */

    let { name } = this;

    this.setResponse("SUCCESS");
    return `Hai ${name}, welcome to Njs2 Demo project (Strict Encryption)`;
  }
}
module.exports = ExampleEncryptionStrictAction;
