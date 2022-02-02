var path = require("path");

/**
 * GET /_/proxy/tenants/diku/modules
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
 * referer: http://localhost:3001/settings/about
 * accept-encoding: gzip
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 02 Feb 2022 17:48:16 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "6709");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("WyB7CiAgImlkIiA6ICJlZGdlLWNhaWFzb2Z0LTEuMi4wLVNOQVBTSE9ULjE1Igp9LCB7CiAgImlkIiA6ICJlZGdlLWNvbm5leGlvbi0xLjEuMC1TTkFQU0hPVC4yMCIKfSwgewogICJpZCIgOiAiZWRnZS1kZW1hdGljLTEuNC4wLVNOQVBTSE9ULjQwIgp9LCB7CiAgImlkIiA6ICJlZGdlLWlubi1yZWFjaC0xLjAuNC1TTkFQU0hPVC4yMiIKfSwgewogICJpZCIgOiAiZWRnZS1uY2lwLTEuNy4wLVNOQVBTSE9ULjE5Igp9LCB7CiAgImlkIiA6ICJlZGdlLW9haS1wbWgtMi41LjAtU05BUFNIT1QuNzUiCn0sIHsKICAiaWQiIDogImVkZ2Utb3JkZXJzLTIuNS4wLVNOQVBTSE9ULjQ4Igp9LCB7CiAgImlkIiA6ICJlZGdlLXBhdHJvbi00LjguMC1TTkFQU0hPVC44MCIKfSwgewogICJpZCIgOiAiZWRnZS1ydGFjLTIuNC4wLVNOQVBTSE9ULjc0Igp9LCB7CiAgImlkIiA6ICJlZGdlLXNpcDItMi4yLjAtU05BUFNIT1QuNjgiCn0sIHsKICAiaWQiIDogImZvbGlvX2FjcXVpc2l0aW9uLXVuaXRzLTMuMC4xMDAwMTIxIgp9LCB7CiAgImlkIiA6ICJmb2xpb19hZ3JlZW1lbnRzLTguMS4xMDAwODYyIgp9LCB7CiAgImlkIiA6ICJmb2xpb19idWxrLWVkaXQtMS4wLjEwMDA0NiIKfSwgewogICJpZCIgOiAiZm9saW9fY2FsZW5kYXItNy4wLjEwMDAwMDkzIgp9LCB7CiAgImlkIiA6ICJmb2xpb19jaGVja2luLTYuMC4xMDAwMDAxMjkiCn0sIHsKICAiaWQiIDogImZvbGlvX2NoZWNrb3V0LTcuMS4xMDAwMDA4OSIKfSwgewogICJpZCIgOiAiZm9saW9fY2lyY3VsYXRpb24tNi4wLjEwMDAwMDI0NyIKfSwgewogICJpZCIgOiAiZm9saW9fY2lyY3VsYXRpb24tbG9nLTIuMC4xMDAwMTE0Igp9LCB7CiAgImlkIiA6ICJmb2xpb19jb3Vyc2VzLTUuMC4xMDAwMzgzIgp9LCB7CiAgImlkIiA6ICJmb2xpb19kYXNoYm9hcmQtMi4xLjEwMDAxMzUiCn0sIHsKICAiaWQiIDogImZvbGlvX2RhdGEtZXhwb3J0LTUuMC4xMDAwMjg5Igp9LCB7CiAgImlkIiA6ICJmb2xpb19kYXRhLWltcG9ydC01LjAuMzAwMDk4OSIKfSwgewogICJpZCIgOiAiZm9saW9fZGV2ZWxvcGVyLTYuMC4xMDAwMDAxMzEiCn0sIHsKICAiaWQiIDogImZvbGlvX2Vob2xkaW5ncy03LjAuMTAwMDEwNzYiCn0sIHsKICAiaWQiIDogImZvbGlvX2VybS1jb21wYXJpc29ucy00LjEuMTAwMDEwNSIKfSwgewogICJpZCIgOiAiZm9saW9fZXJtLXVzYWdlLTYuMC4xMDAwMzM3Igp9LCB7CiAgImlkIiA6ICJmb2xpb19leHBvcnQtbWFuYWdlci0yLjAuMTAwMDU1Igp9LCB7CiAgImlkIiA6ICJmb2xpb19maW5hbmNlLTMuMC4xMDAwNTU3Igp9LCB7CiAgImlkIiA6ICJmb2xpb19oYW5kbGVyLXN0cmlwZXMtcmVnaXN0cnktMS4wLjEwMDA5Igp9LCB7CiAgImlkIiA6ICJmb2xpb19pbm4tcmVhY2gtMS4yLjEwMDAxNTIiCn0sIHsKICAiaWQiIDogImZvbGlvX2ludmVudG9yeS05LjAuMTAwMDAwNzQ5Igp9LCB7CiAgImlkIiA6ICJmb2xpb19pbnZvaWNlLTMuMC4yMDAwNTI4Igp9LCB7CiAgImlkIiA6ICJmb2xpb19sZHAtMS41LjEwMDA0NSIKfSwgewogICJpZCIgOiAiZm9saW9fbGljZW5zZXMtOC4xLjEwMDA0NTAiCn0sIHsKICAiaWQiIDogImZvbGlvX2xvY2FsLWtiLWFkbWluLTUuMS4xMDAwMjE2Igp9LCB7CiAgImlkIiA6ICJmb2xpb19tYXJjLWF1dGhvcml0aWVzLTEuMC4xMDAwNTYiCn0sIHsKICAiaWQiIDogImZvbGlvX215cHJvZmlsZS02LjAuMTAwMDAwMyIKfSwgewogICJpZCIgOiAiZm9saW9fbm90ZXMtNi4wLjEwMDAxMDYiCn0sIHsKICAiaWQiIDogImZvbGlvX29hLTEuMC4xMDAwNzkiCn0sIHsKICAiaWQiIDogImZvbGlvX29haS1wbWgtMy4wLjEwMDAxMjAiCn0sIHsKICAiaWQiIDogImZvbGlvX29yZGVycy0zLjAuMzAwMDExODciCn0sIHsKICAiaWQiIDogImZvbGlvX29yZ2FuaXphdGlvbnMtMy4wLjEwMDA0MzEiCn0sIHsKICAiaWQiIDogImZvbGlvX3BsdWdpbi1idXJzYXItZXhwb3J0LTIuMC4xMDAwNTYiCn0sIHsKICAiaWQiIDogImZvbGlvX3BsdWdpbi1jcmVhdGUtaW52ZW50b3J5LXJlY29yZHMtMy4wLjEwMDAwMDQ1Igp9LCB7CiAgImlkIiA6ICJmb2xpb19wbHVnaW4tZXVzYWdlLXJlcG9ydHMtMi4yLjMwMDAxOTIiCn0sIHsKICAiaWQiIDogImZvbGlvX3BsdWdpbi1maW5kLWFncmVlbWVudC04LjAuMTAwMDExNyIKfSwgewogICJpZCIgOiAiZm9saW9fcGx1Z2luLWZpbmQtY29udGFjdC0zLjAuMTAwMDg5Igp9LCB7CiAgImlkIiA6ICJmb2xpb19wbHVnaW4tZmluZC1lcmVzb3VyY2UtNC4wLjEwMDA0OSIKfSwgewogICJpZCIgOiAiZm9saW9fcGx1Z2luLWZpbmQtZXJtLXVzYWdlLWRhdGEtcHJvdmlkZXItNC4wLjEwMDA2NiIKfSwgewogICJpZCIgOiAiZm9saW9fcGx1Z2luLWZpbmQtZnVuZC0xLjAuMTAwMDExIgp9LCB7CiAgImlkIiA6ICJmb2xpb19wbHVnaW4tZmluZC1pbXBvcnQtcHJvZmlsZS01LjAuMTAwMDEwMiIKfSwgewogICJpZCIgOiAiZm9saW9fcGx1Z2luLWZpbmQtaW5zdGFuY2UtNi4xLjIwMDAwMDgxIgp9LCB7CiAgImlkIiA6ICJmb2xpb19wbHVnaW4tZmluZC1pbnRlcmZhY2UtMy4wLjEwMDA4NCIKfSwgewogICJpZCIgOiAiZm9saW9fcGx1Z2luLWZpbmQtbGljZW5zZS04LjAuMTAwMDExNiIKfSwgewogICJpZCIgOiAiZm9saW9fcGx1Z2luLWZpbmQtb3JnYW5pemF0aW9uLTMuMC4xMDAwODMiCn0sIHsKICAiaWQiIDogImZvbGlvX3BsdWdpbi1maW5kLXBhY2thZ2UtdGl0bGUtNC4wLjEwMDA2MSIKfSwgewogICJpZCIgOiAiZm9saW9fcGx1Z2luLWZpbmQtcG8tbGluZS0zLjAuMTAwMDExOSIKfSwgewogICJpZCIgOiAiZm9saW9fcGx1Z2luLWZpbmQtdXNlci02LjAuMTAwMDAwMTAiCn0sIHsKICAiaWQiIDogImZvbGlvX3F1aWNrLW1hcmMtNC4wLjMwMDAyNTkiCn0sIHsKICAiaWQiIDogImZvbGlvX3JlY2VpdmluZy0yLjAuMzAwMDMyMiIKfSwgewogICJpZCIgOiAiZm9saW9fcmVtb3RlLXN0b3JhZ2UtMy4wLjEwMDAxMTAiCn0sIHsKICAiaWQiIDogImZvbGlvX3JlcXVlc3RzLTcuMC4xMDAwMDA0NjciCn0sIHsKICAiaWQiIDogImZvbGlvX3NlYXJjaC01LjAuMTAwMDAwMTgiCn0sIHsKICAiaWQiIDogImZvbGlvX3NlcnZpY2Vwb2ludHMtNi4wLjEwMDAwMDMiCn0sIHsKICAiaWQiIDogImZvbGlvX3N0cmlwZXMtY29yZS04LjEuMTAwMDAwMTU2Igp9LCB7CiAgImlkIiA6ICJmb2xpb19zdHJpcGVzLXNtYXJ0LWNvbXBvbmVudHMtNy4xLjEwMDAwMDI0OSIKfSwgewogICJpZCIgOiAiZm9saW9fdGFncy02LjAuMTAwMDAwMjkiCn0sIHsKICAiaWQiIDogImZvbGlvX3RlbmFudC1zZXR0aW5ncy03LjAuMTAwMDAwMTU5Igp9LCB7CiAgImlkIiA6ICJmb2xpb191c2Vycy03LjAuMTAwMDAwNzI2Igp9LCB7CiAgImlkIiA6ICJtb2QtYWdyZWVtZW50cy01LjEuMC1TTkFQU0hPVC40MzUiCn0sIHsKICAiaWQiIDogIm1vZC1hdWRpdC0yLjMuMC1TTkFQU0hPVC4xMTYiCn0sIHsKICAiaWQiIDogIm1vZC1hdXRodG9rZW4tMi4xMC4wLVNOQVBTSE9ULjEwNCIKfSwgewogICJpZCIgOiAibW9kLWNhbGVuZGFyLTEuMTQuMC1TTkFQU0hPVC4xMjUiCn0sIHsKICAiaWQiIDogIm1vZC1jaXJjdWxhdGlvbi0yMi4yLjAtU05BUFNIT1QuOTQ1Igp9LCB7CiAgImlkIiA6ICJtb2QtY2lyY3VsYXRpb24tc3RvcmFnZS0xMy4yLjAtU05BUFNIT1QuMzAwIgp9LCB7CiAgImlkIiA6ICJtb2QtY29kZXgtZWtiLTEuMTAuMC1TTkFQU0hPVC4xMTYiCn0sIHsKICAiaWQiIDogIm1vZC1jb2RleC1pbnZlbnRvcnktMi4yLjAtU05BUFNIT1QuOTIiCn0sIHsKICAiaWQiIDogIm1vZC1jb2RleC1tdXgtMi4xMi4wLVNOQVBTSE9ULjEwNSIKfSwgewogICJpZCIgOiAibW9kLWNvbmZpZ3VyYXRpb24tNS44LjAtU05BUFNIT1QuMTA0Igp9LCB7CiAgImlkIiA6ICJtb2QtY29weWNhdC0xLjIuMC1TTkFQU0hPVC43NiIKfSwgewogICJpZCIgOiAibW9kLWNvdXJzZXMtMS40LjQtU05BUFNIT1QuMTM0Igp9LCB7CiAgImlkIiA6ICJtb2QtZGF0YS1leHBvcnQtNC4zLjAtU05BUFNIT1QuMjkzIgp9LCB7CiAgImlkIiA6ICJtb2QtZGF0YS1leHBvcnQtc3ByaW5nLTEuMy4wLVNOQVBTSE9ULjE0MSIKfSwgewogICJpZCIgOiAibW9kLWRhdGEtZXhwb3J0LXdvcmtlci0xLjMuMC1TTkFQU0hPVC4xNDYiCn0sIHsKICAiaWQiIDogIm1vZC1kYXRhLWltcG9ydC0yLjMuMC1TTkFQU0hPVC4yMjQiCn0sIHsKICAiaWQiIDogIm1vZC1kYXRhLWltcG9ydC1jb252ZXJ0ZXItc3RvcmFnZS0xLjEzLjAtU05BUFNIT1QuMTg0Igp9LCB7CiAgImlkIiA6ICJtb2QtZWJzY29uZXQtMS4yLjAtU05BUFNIT1QuMzgiCn0sIHsKICAiaWQiIDogIm1vZC1lbWFpbC0xLjEzLjAtU05BUFNIT1QuNjEiCn0sIHsKICAiaWQiIDogIm1vZC1lcm0tdXNhZ2UtNC4zLjAtU05BUFNIT1QuMTU0Igp9LCB7CiAgImlkIiA6ICJtb2QtZXJtLXVzYWdlLWhhcnZlc3Rlci00LjAuMC1TTkFQU0hPVC4xMjAiCn0sIHsKICAiaWQiIDogIm1vZC1ldXNhZ2UtcmVwb3J0cy0xLjEuMC1TTkFQU0hPVC4xNDkiCn0sIHsKICAiaWQiIDogIm1vZC1ldmVudC1jb25maWctMi4yLjAtU05BUFNIT1QuNTEiCn0sIHsKICAiaWQiIDogIm1vZC1mZWVzZmluZXMtMTcuMS4wLVNOQVBTSE9ULjE3MCIKfSwgewogICJpZCIgOiAibW9kLWZpbmFuY2UtNC40LjAtU05BUFNIT1QuMTYyIgp9LCB7CiAgImlkIiA6ICJtb2QtZmluYW5jZS1zdG9yYWdlLTguMS4wLVNOQVBTSE9ULjIwMSIKfSwgewogICJpZCIgOiAibW9kLWdvYmktMi4zLjAtU05BUFNIT1QuMTYwIgp9LCB7CiAgImlkIiA6ICJtb2QtZ3JhcGhxbC0xLjkuMTAwMDI5MSIKfSwgewogICJpZCIgOiAibW9kLWlubi1yZWFjaC0xLjEuMC1TTkFQU0hPVC4xNzEiCn0sIHsKICAiaWQiIDogIm1vZC1pbnZlbnRvcnktMTguMS4wLVNOQVBTSE9ULjQ5MyIKfSwgewogICJpZCIgOiAibW9kLWludmVudG9yeS1zdG9yYWdlLTIzLjAuMC1TTkFQU0hPVC42NTciCn0sIHsKICAiaWQiIDogIm1vZC1pbnZlbnRvcnktdXBkYXRlLTIuMC4wLVNOQVBTSE9ULjcwIgp9LCB7CiAgImlkIiA6ICJtb2QtaW52b2ljZS01LjMuMC1TTkFQU0hPVC4yODQiCn0sIHsKICAiaWQiIDogIm1vZC1pbnZvaWNlLXN0b3JhZ2UtNS4zLjAtU05BUFNIT1QuMTA5Igp9LCB7CiAgImlkIiA6ICJtb2Qta2ItZWJzY28tamF2YS0zLjEwLjAtU05BUFNIT1QuMzExIgp9LCB7CiAgImlkIiA6ICJtb2QtbGRwLTEuMC4yLVNOQVBTSE9ULjE3Igp9LCB7CiAgImlkIiA6ICJtb2QtbGljZW5zZXMtNC4xLjAtU05BUFNIT1QuMTkwIgp9LCB7CiAgImlkIiA6ICJtb2QtbG9naW4tNy42LjAtU05BUFNIT1QuMTEyIgp9LCB7CiAgImlkIiA6ICJtb2QtbG9naW4tc2FtbC0yLjUuMC1TTkFQU0hPVC45MCIKfSwgewogICJpZCIgOiAibW9kLW5jaXAtMS4xMC4xLVNOQVBTSE9ULjQ5Igp9LCB7CiAgImlkIiA6ICJtb2Qtbm90ZXMtMy4wLjAtU05BUFNIT1QuMTg1Igp9LCB7CiAgImlkIiA6ICJtb2Qtbm90aWZ5LTIuMTAuMC1TTkFQU0hPVC4xMTAiCn0sIHsKICAiaWQiIDogIm1vZC1vYS0xLjAuMC1TTkFQU0hPVC42NSIKfSwgewogICJpZCIgOiAibW9kLW9haS1wbWgtMy43LjAtU05BUFNIT1QuMjE3Igp9LCB7CiAgImlkIiA6ICJtb2Qtb3JkZXJzLTEyLjMuMC1TTkFQU0hPVC41MDgiCn0sIHsKICAiaWQiIDogIm1vZC1vcmRlcnMtc3RvcmFnZS0xMy4yLjAtU05BUFNIT1QuMjU2Igp9LCB7CiAgImlkIiA6ICJtb2Qtb3JnYW5pemF0aW9ucy0xLjQuMC1TTkFQU0hPVC4yNyIKfSwgewogICJpZCIgOiAibW9kLW9yZ2FuaXphdGlvbnMtc3RvcmFnZS00LjIuMC1TTkFQU0hPVC42OCIKfSwgewogICJpZCIgOiAibW9kLXBhc3N3b3JkLXZhbGlkYXRvci0yLjMuMC1TTkFQU0hPVC41NSIKfSwgewogICJpZCIgOiAibW9kLXBhdHJvbi01LjIuMC1TTkFQU0hPVC45MSIKfSwgewogICJpZCIgOiAibW9kLXBhdHJvbi1ibG9ja3MtMS41LjAtU05BUFNIT1QuNjUiCn0sIHsKICAiaWQiIDogIm1vZC1wZXJtaXNzaW9ucy02LjAuMC1TTkFQU0hPVC4xMzQiCn0sIHsKICAiaWQiIDogIm1vZC1wdWJzdWItMi41LjAtU05BUFNIT1QuMTgyIgp9LCB7CiAgImlkIiA6ICJtb2QtcXVpY2stbWFyYy0yLjMuMC1TTkFQU0hPVC4xNDkiCn0sIHsKICAiaWQiIDogIm1vZC1yZW1vdGUtc3RvcmFnZS0xLjUuMC1TTkFQU0hPVC4xNTAiCn0sIHsKICAiaWQiIDogIm1vZC1ydGFjLTMuMi4wLVNOQVBTSE9ULjY2Igp9LCB7CiAgImlkIiA6ICJtb2Qtc2VhcmNoLTEuNi4wLVNOQVBTSE9ULjE5MyIKfSwgewogICJpZCIgOiAibW9kLXNlbmRlci0xLjcuMC1TTkFQU0hPVC4zMiIKfSwgewogICJpZCIgOiAibW9kLXNlcnZpY2UtaW50ZXJhY3Rpb24tMS4xLjAtU05BUFNIT1QuNDIiCn0sIHsKICAiaWQiIDogIm1vZC1zb3VyY2UtcmVjb3JkLW1hbmFnZXItMy4zLjAtU05BUFNIT1QuNTU2Igp9LCB7CiAgImlkIiA6ICJtb2Qtc291cmNlLXJlY29yZC1zdG9yYWdlLTUuMy4wLVNOQVBTSE9ULjM5NiIKfSwgewogICJpZCIgOiAibW9kLXRhZ3MtMS4wLjMtU05BUFNIT1QuNzMiCn0sIHsKICAiaWQiIDogIm1vZC10ZW1wbGF0ZS1lbmdpbmUtMS4xNi4wLVNOQVBTSE9ULjc1Igp9LCB7CiAgImlkIiA6ICJtb2QtdXNlci1pbXBvcnQtMy43LjAtU05BUFNIT1QuNjgiCn0sIHsKICAiaWQiIDogIm1vZC11c2Vycy0xOC4yLjAtU05BUFNIT1QuMTgxIgp9LCB7CiAgImlkIiA6ICJtb2QtdXNlcnMtYmwtNy4yLjAtU05BUFNIT1QuMTEwIgp9LCB7CiAgImlkIiA6ICJva2FwaS00LjEzLjAtU05BUFNIT1QiCn0gXQ==", "base64"));
  res.end();

  return __filename;
};
