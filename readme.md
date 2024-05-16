# IP info app

This is a small application which was built using Honojs and deployed to Cloudflare workers.

The main goal is to return information about the IP address of the visiter depending on Cloudflare network.

### Output

The output will be something like

```json
{
	"ip": "xxx.xxx.xxx.xxx",
	"country": "Turkey",
	"code": "TR",
	"city": "Istanbul",
	"continent": "AS",
	"region": "Istanbul",
	"regionCode": "34",
	"timezone": "Europe/Istanbul",
	"all": {
		"clientTcpRtt": 57,
		"longitude": "28.93450",
		"httpProtocol": "HTTP/2",
		"tlsCipher": "AEAD-AES128-GCM-SHA256",
		"continent": "AS",
		"asn": 34984,
		"clientAcceptEncoding": "gzip, deflate, br, zstd",
		"country": "TR",
		"tlsClientExtensionsSha1": "4RNGRyhu+faFBARNeiWRgT7iJtM=",
		"verifiedBotCategory": "",
		"tlsClientAuth": {
			"certIssuerDNLegacy": "",
			"certIssuerSKI": "",
			"certSubjectDNRFC2253": "",
			"certSubjectDNLegacy": "",
			"certFingerprintSHA256": "",
			"certNotBefore": "",
			"certSKI": "",
			"certSerial": "",
			"certIssuerDN": "",
			"certVerified": "NONE",
			"certNotAfter": "",
			"certSubjectDN": "",
			"certPresented": "0",
			"certRevoked": "0",
			"certIssuerSerial": "",
			"certIssuerDNRFC2253": "",
			"certFingerprintSHA1": ""
		},
		"tlsExportedAuthenticator": {
			"clientFinished": "2153f281184e99dab8e86786d881f5c978b512b207519eebd9fd6fc461f76556",
			"clientHandshake": "c59b9a33b73f145f7ebee8c6664e89be5f0a65eea3dee255ed6c7b253845f5f4",
			"serverHandshake": "a7c7c00a273db5e1b8b9c965baa9b366fed3945d2bf6302c3e194d3cf6ff4987",
			"serverFinished": "892247b188a7f6668526f2ebcde6ee429e130a786fba0773e6682c6dd3015b32"
		},
		"tlsVersion": "TLSv1.3",
		"city": "Istanbul",
		"timezone": "Europe/Istanbul",
		"colo": "FRA",
		"tlsClientHelloLength": "1716",
		"edgeRequestKeepAliveStatus": 1,
		"postalCode": "34104",
		"region": "Istanbul",
		"latitude": "41.01070",
		"requestPriority": "weight=256;exclusive=1",
		"regionCode": "34",
		"asOrganization": "Turkcell Superonline",
		"tlsClientRandom": "NrXeH1DIInH3DMYoWzeE9yCBKvUzsh+lP/qCBn2qRzE=",
		"botManagement": {
			"corporateProxy": false,
			"verifiedBot": false,
			"jsDetection": { "passed": false },
			"staticResource": false,
			"detectionIds": {},
			"score": 99
		}
	}
}
```
