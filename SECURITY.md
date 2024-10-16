## SECURITY REQUIREMENTS

* Coding security practices: Express security best practices https://expressjs.com/en/advanced/best-practice-security.html
* Security mindset: OWASP Secure coding practices: https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/stable-en/01-introduction/05-introduction
* Connection: Use HTTPS
* Rate limiting: Implement rate limiting
* Data flow: validate all input, format all output
* Data:
  * Sensitive data: Store sensitive data environment variables or Key Management service
  * User data: comply with GDPR
* Error handling:
  * Avoid printing too detailed error/leaking stack traces
  * Avoid leaking sensitive/user data
* Dependencies: Keep npm dependencies up-to-date (as newest as possible)
* Logging and monitoring: 
  * Setup logging, monitoring and alert system as a separated service
  * Avoid logging sensitive/user data