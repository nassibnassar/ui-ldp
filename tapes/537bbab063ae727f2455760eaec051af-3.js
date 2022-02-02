var path = require("path");

/**
 * GET /configurations/entries?query=(module==LDP and configName==recordLimits)
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * accept-language: en-US
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijk4ZTU0MjA1LTNiZWQtNWVmNy1iMjJmLTk3MTAyOGMyNWNiMyIsInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2NDM4MjQwNzEsInRlbmFudCI6ImRpa3UifQ.kXV7Vk3ZcxaT6BH1xjAuuNnYTDc7Cqlblb4twp6ptPc
 * user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/7.7.0 Chrome/89.0.4328.0 Electron/12.0.0-beta.14 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/settings/ldp/tables
 * accept-encoding: gzip
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 02 Feb 2022 17:48:19 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKrmAgAAAP//", "base64"));
  res.write(new Buffer("UlBQSs7PS8tML1ayUojmAgAAAP//lJBBT8MwDIX/S64sk5O2a5ojGgekCSFtnCgHt3ZFpZaONB1D0/47CUUVFw5IkaV8fnnPzkW0JKxQBZo8KUCSIiPTFLU0BdVS15XCNN9kWimxEv1AU8dBv9s+huts9IB9RI7rwdGu7Vs/hh6/YdVx8PZu4pU4YTdF1aUUxA1Ond+/Dh+lsKVQAKVYlaLH82+2wLvzcXB+wTOndvz2P8Q6hubzS6DvE7uWxz2emAKDa5yZPRJ6FPYiasfombahhFk0aC0hnoPaWJVbSNcFJDcAFiCuN6tvP59GdvfxmwrDWaohk0nFJDNucllp3cgiV6BNrbO6SsLD6Uh/xOQ2NVaZNRizxPyo/xtzvX4BAAD//w==", "base64"));
  res.write(new Buffer("itXhAgAAAP//AsZmSX5JYk4QOPBBUWqowwUAAAD//w==", "base64"));
  res.write(new Buffer("AgoWpRYDg9gzLy0fKFSNpsZQRyktMTkVGE2gUAMGZWJ6Xn5xSWYyWKCWqxYAAAD//wMAd2ShJiYCAAA=", "base64"));
  res.end();

  return __filename;
};
