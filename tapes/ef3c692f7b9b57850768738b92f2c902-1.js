var path = require("path");

/**
 * POST /ldp/db/query
 *
 * connection: keep-alive
 * host: folio-snapshot-load-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * content-length: 190
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6IjU4M2MwMzdmLTY4OGUtNTU0Ni04MDMwLTg5MTViNzdhOTI0NiIsImlhdCI6MTYzNTg2NTg3NSwidGVuYW50IjoiZGlrdSJ9.94g7mSBDWRz_vNwb94GSdfo3382tsrfhp1OyFbpkZKE
 * user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/7.7.0 Chrome/89.0.4328.0 Electron/12.0.0-beta.14 Safari/537.36
 * content-type: application/json
 * accept: * / *
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/ldp
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 02 Nov 2021 15:11:27 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("WyB7CiAgImlkIiA6ICI1ODNjMDM3Zi02ODhlLTU1NDYtODAzMC04OTE1Yjc3YTkyNDYiLAogICJhY3RpdmUiIDogdHJ1ZSwKICAiYmFyY29kZSIgOiBudWxsLAogICJjcmVhdGVkX2RhdGUiIDogIjIwMjEtMTEtMDJUMDI6Mzc6MTIuNDQ0KzAwOjAwIiwKICAiZW5yb2xsbWVudF9kYXRlIiA6IG51bGwsCiAgImV4cGlyYXRpb25fZGF0ZSIgOiBudWxsLAogICJwYXRyb25fZ3JvdXAiIDogIjM2ODRhNzg2LTY2NzEtNDI2OC04ZWQwLTlkYjgyZWJjYTYwYiIsCiAgInR5cGUiIDogbnVsbCwKICAidXBkYXRlZF9kYXRlIiA6ICIyMDIxLTExLTAyVDAyOjM3OjEyLjQ0NCswMDowMCIsCiAgInVzZXJuYW1lIiA6ICJkaWt1X2FkbWluIgp9IF0=", "base64"));
  res.end();

  return __filename;
};
