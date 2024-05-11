# Security Policy

The security of our project is of the utmost importance to us. This document outlines how to report security vulnerabilities, the measures we take to ensure the security of our project, and best practices for developers.

## Reporting a Vulnerability

We appreciate the efforts of security researchers and the community who help us keep our projects safe. If you believe you've discovered a security vulnerability in one of our projects, please send an email to security@callgent.com.

In your report, please include:

- A brief description of the vulnerability.
- Steps to reproduce the issue.
- The impact of the vulnerability.
- Any potential remediation.

We will acknowledge receipt of your report within 3 business days and aim to triage the issue within 10 business days. We'll keep you informed of our progress and any actions we take.

Please act in good faith towards our users' privacy and data during your disclosure. We won't take legal action against you or administrative action against your account if you act accordingly.

Note that this policy does not extend to third-party services or applications that integrate with our project.

## Disclosure Policy

We believe that security research is a valuable contribution to our project and the wider community, and we encourage responsible reporting of security vulnerabilities. We will publicly disclose significant vulnerabilities in our software 90 days after the report, or sooner if a fix is available.

## Security Measures

We take several measures to ensure the security of our project:

1. **Dependency Management**: We regularly update our dependencies and use tools like `npm audit` and `snyk` to identify and fix known vulnerabilities.
2. **Code Reviews**: All code changes undergo a thorough review process before being merged into the main branch.
3. **Secure Configuration**: We follow best practices for securing our Next.js application, such as enabling HTTPS, setting appropriate security headers, and disabling unnecessary features.
4. **Authentication and Authorization**: We use industry-standard authentication and authorization mechanisms to protect sensitive data and functionality.
5. **Input Validation**: We validate and sanitize user input to prevent common attacks like SQL injection and cross-site scripting (XSS).
6. **Error Handling**: We implement proper error handling to ensure that sensitive information is not leaked in error messages.

## Best Practices for Developers

Developers contributing to our project should follow these best practices to maintain a high level of security:

1. Keep your local environment and dependencies up to date.
2. Use strong, unique passwords and enable two-factor authentication for your GitHub account.
3. Follow the principle of least privilege when working with sensitive data or functionality.
4. Be cautious when using third-party libraries, and ensure they are well-maintained and secure.
5. Always validate and sanitize user input, and output data properly.
6. Write secure code by following guidelines like the OWASP Top 10 and the Next.js Security Checklist.
