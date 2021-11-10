class ExampleEncryptionOptionalAction extends baseAction {
  async executeMethod() {
    /*
    ENCRYPTION OPTIONAL MODE EXAMPLE

    Prerequisites:
    ? encryption mode

    Steps:
    1. In config/config.json, set the following:
       "ENCRYPTION_MODE": "optional",
       "ENCRYPTION_KEY": "8VUK2RFKZUbbpXPhWYXGSvZzixsD9kec",
       "ENCRYPTION_IV": "Jx7wyKi67LBICY1w"
    2. This will work in two modes:

        i) ENCRYPTION DISABLE MODE:
            (1) Run command in terminal: njs2 run express;
            (2) Pass argument as name=user123 from postman/browser
            (3) The response will be plain text.
                "Hai user123, welcome to Njs2 Demo project (Optional Encryption)"

        ii) ENCRYPTION ENABLE MODE:
            (1) Run command in terminal: njs2 run express;
            (2) In postman under the header section, pass enc_state = 1
            (3) Pass the following argument under params:
              data = 6iAx7g%2BIwBXaDF3hJ8EXj8Ef3BLXqZJVC%2FbJy%2FN6BPI%3D 
            (4) You will get the following response:
                S7sBFm5KvNq+WSyorwmciKV03DxEEQpElG77I86w8NOZoUPEAEGDu8An7YaeYuShNWysnbiBi1DwL0xuzaWLhPtvfqeuDwlcFVu5PRiXjvI=
            (5) If you decrypt the above response, you will get the following:
                "Hai user123, welcome to Njs2 Demo project (Optional Encryption)"
    */

    let { name } = this;

    this.setResponse("SUCCESS");
    return `Hai ${name}, welcome to Njs2 Demo project (Optional Encryption)`;
  }
}
module.exports = ExampleEncryptionOptionalAction;
