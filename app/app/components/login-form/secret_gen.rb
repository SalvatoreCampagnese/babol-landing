require "jwt"

key_file = "/Users/salva/Downloads/AuthKey_ZN53G6LRH3.p8"
team_id = "FN4NXB4BZ7"
client_id = "service.babol.app"
key_id = "ZN53G6LRH3"
validity_period = 180 # In days. Max 180 (6 months) according to Apple docs.

private_key = OpenSSL::PKey::EC.new IO.read key_file

token = JWT.encode(
	{
		iss: team_id,
		iat: Time.now.to_i,
		exp: Time.now.to_i + 86400 * validity_period,
		aud: "https://appleid.apple.com",
		sub: client_id
	},
	private_key,
	"ES256",
	header_fields=
	{
		kid: key_id 
	}
)
puts token