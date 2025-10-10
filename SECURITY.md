# Security Documentation

## Overview
This document outlines the security measures, policies, and procedures for the Work Family AI platform.

**Last Updated:** 2025-10-10  
**Security Contact:** [Admin Email]

---

## 1. Database Security (Row-Level Security Policies)

### Critical Tables with RLS

#### **contact_submissions**
- **Purpose:** Store contact form submissions
- **Access Control:**
  - ✅ Public INSERT: Anyone can submit contact forms (intentional)
  - ✅ Admin FULL ACCESS: Only admins can view submissions
- **Rationale:** Contact forms need public access, but submissions contain PII and should only be viewable by admins

#### **work_package_quote_requests**
- **Purpose:** Store work package quote requests
- **Access Control:**
  - ✅ Public INSERT: Anyone can request quotes (intentional)
  - ✅ Admin FULL ACCESS: Only admins can view quote requests
- **Rationale:** Quote forms need public access, but contain business-sensitive information

#### **email_subscribers** (SECURED 2025-10-10)
- **Purpose:** Store email subscription list
- **Access Control:**
  - ✅ Public INSERT ONLY: Anyone can subscribe
  - ✅ Admin FULL ACCESS: Only admins can view/manage subscribers
  - ❌ REMOVED: Previous "all_access" policy that allowed public DELETE/UPDATE
- **Security Fix:** Removed over-permissive policy that allowed anyone to view/delete/modify subscriber emails

#### **newsletter_subscriptions** (SECURED 2025-10-10)
- **Purpose:** Store newsletter subscriptions with preferences
- **Access Control:**
  - ✅ Public INSERT ONLY: Anyone can subscribe
  - ✅ Admin FULL ACCESS: Only admins can view/manage subscriptions
  - ❌ REMOVED: Broken admin policy and public all-access policy
- **Security Fix:** Fixed broken policies that blocked admins and allowed public full access

#### **subscribers** (SECURED 2025-10-10)
- **Purpose:** General subscriber list
- **Access Control:**
  - ✅ Admin FULL ACCESS: Only admins can view/manage subscribers
  - ❌ REMOVED: Previous "all_access" policy that allowed public full access
- **Security Fix:** Removed over-permissive policy that exposed all subscriber data

#### **user_roles**
- **Purpose:** Store user role assignments (admin, user, etc.)
- **Access Control:**
  - ✅ Admin FULL ACCESS: Only admins can assign roles
  - ✅ Users can VIEW OWN: Users can see their own roles
- **Rationale:** Prevents privilege escalation attacks. Roles must never be stored in profiles table or client-side.

#### **profiles**
- **Purpose:** Store additional user profile information
- **Access Control:**
  - ✅ Public SELECT: Anyone can view profiles (intentional for network features)
  - ✅ Users UPDATE OWN: Users can update their own profile
  - ✅ Users INSERT OWN: Users can create their own profile
- **Rationale:** Public profiles support the professional networking features

---

## 2. Edge Function Security

### Rate Limiting (Implemented 2025-10-10)

All public edge functions implement IP-based rate limiting to prevent abuse:

| Function | Rate Limit | Window | Purpose |
|----------|------------|--------|---------|
| `chat-with-agent` | 10 req/min | Per IP | Prevent AI API abuse |
| `voice-to-text` | 5 req/min | Per IP | Prevent OpenAI Whisper API abuse |
| `submit-work-package-quote` | 3 req/hour | Per IP | Prevent spam submissions |
| `submit-contact-form` | 5 req/hour | Per IP | Prevent spam |
| `subscribe-newsletter` | 5 req/hour | Per IP | Prevent spam |

### Authentication Requirements

| Function | Auth Required | JWT Verification | Notes |
|----------|---------------|------------------|-------|
| `chat-with-agent` | No | Disabled | Rate limited |
| `voice-to-text` | No | Disabled | Rate limited |
| `create-donation` | No | Disabled | Public donation form |
| `submit-contact-form` | No | Disabled | Public contact form |
| `subscribe-newsletter` | No | Disabled | Public newsletter |
| `submit-work-package-quote` | No | Disabled | Public quote form |

### API Key Management

- **OpenAI API Key:** Used in `chat-with-agent` and `voice-to-text` functions
  - Stored as Supabase secret: `OPENAI_API_KEY`
  - Protected by rate limiting
  - Usage logged for monitoring
  - **Action Item:** Set spending limits in OpenAI dashboard

---

## 3. Admin Access Procedures

### How to Grant Admin Access

1. User must sign up through normal authentication flow
2. Admin manually grants role using SQL:

```sql
-- Add admin role to user
INSERT INTO public.user_roles (user_id, role)
VALUES ('<user-uuid>', 'admin');
```

3. User must log out and log back in for role to take effect

### Admin Capabilities

Admins can:
- View all contact submissions
- View all quote requests
- View all email subscribers
- View all newsletter subscriptions
- Manage user roles
- Access protected `/admin` routes

### Verifying Admin Access

```sql
-- Check if user has admin role
SELECT * FROM public.user_roles 
WHERE user_id = '<user-uuid>' AND role = 'admin';
```

---

## 4. Security Incidents & Response

### Monitoring

**Implemented:**
- Rate limit logging in edge functions
- Failed authentication tracking
- Usage metrics per IP address

**To Implement:**
- OpenAI API usage dashboard
- Cost alerts for unusual usage
- Failed RLS policy attempts logging

### Incident Response Checklist

If a security incident is detected:

1. **Immediate Actions:**
   - [ ] Identify affected systems/data
   - [ ] Block malicious IPs (add to rate limiter blacklist)
   - [ ] Rotate API keys if compromised
   - [ ] Review edge function logs
   - [ ] Check database audit logs

2. **Assessment:**
   - [ ] Determine scope of breach
   - [ ] Identify compromised data
   - [ ] Review RLS policy violations
   - [ ] Check for privilege escalation attempts

3. **Remediation:**
   - [ ] Patch vulnerabilities
   - [ ] Update RLS policies if needed
   - [ ] Reset affected user credentials
   - [ ] Deploy security updates

4. **Post-Incident:**
   - [ ] Document incident details
   - [ ] Update security procedures
   - [ ] Notify affected users (if required by law)
   - [ ] Review and improve monitoring

### Known Security Considerations

**Security Definer Views (169 views):**
- Multiple views use `SECURITY DEFINER` property
- These bypass RLS and use creator's permissions
- Required for complex data aggregations
- Regularly audit these views for unintended data exposure
- Reference: https://supabase.com/docs/guides/database/database-linter?lint=0010_security_definer_view

---

## 5. Regular Security Audit Checklist

Perform these checks monthly:

### Database Security
- [ ] Review all RLS policies for over-permissive access
- [ ] Check for new tables without RLS enabled
- [ ] Audit security definer functions and views
- [ ] Verify user_roles table integrity
- [ ] Check for hardcoded credentials in database

### Edge Function Security
- [ ] Review rate limiting effectiveness
- [ ] Check OpenAI API usage patterns
- [ ] Verify no secrets in code (use Supabase secrets)
- [ ] Review edge function logs for abuse
- [ ] Test authentication flows

### Access Control
- [ ] Review admin user list
- [ ] Verify no unauthorized role assignments
- [ ] Check profile data exposure
- [ ] Test RLS policies with different user roles
- [ ] Verify protected routes require authentication

### Monitoring & Logging
- [ ] Review rate limit violations
- [ ] Check for unusual API usage patterns
- [ ] Review failed authentication attempts
- [ ] Monitor OpenAI API costs
- [ ] Check for SQL injection attempts

---

## 6. Security Best Practices for Developers

### DO ✅

1. **Always use RLS policies** for tables containing user data
2. **Use the `has_role()` function** for role checks in RLS policies
3. **Store roles in `user_roles` table** (never in profiles or auth.users)
4. **Rate limit all public edge functions**
5. **Log security-relevant events** (auth failures, rate limits, etc.)
6. **Use Supabase secrets** for API keys (never hardcode)
7. **Validate all user inputs** server-side
8. **Use `SECURITY DEFINER` carefully** and audit regularly

### DON'T ❌

1. **Never check admin status client-side** (localStorage, hardcoded, etc.)
2. **Never store roles in profiles table** (privilege escalation risk)
3. **Never make PII tables publicly readable** without explicit reason
4. **Never use `all_access` RLS policies** on sensitive tables
5. **Never skip rate limiting** on public edge functions
6. **Never expose auth.users table** in public API
7. **Never reference managed schemas** (auth, storage) in foreign keys
8. **Never trust client-side validation alone**

---

## 7. Compliance & Data Privacy

### GDPR Considerations

This platform may process personal data including:
- Email addresses (subscribers, contact forms)
- Names and contact information (quote requests)
- Usage analytics (IP addresses)

**Required Actions:**
- [ ] Implement data export functionality (user data portability)
- [ ] Implement data deletion functionality (right to be forgotten)
- [ ] Add privacy policy link to all data collection forms
- [ ] Implement consent tracking for newsletter subscriptions
- [ ] Add opt-out mechanism for analytics

### Data Retention

- Contact submissions: Retained indefinitely (review annually)
- Quote requests: Retained indefinitely (review annually)
- Email subscribers: Retained until unsubscribe
- Logs: 90 days (edge function logs, rate limit logs)

---

## 8. Emergency Contacts

**Security Issues:** [Admin Email]  
**Supabase Dashboard:** https://supabase.com/dashboard/project/lzfgigiyqpuuxslsygjt  
**Edge Function Logs:** https://supabase.com/dashboard/project/lzfgigiyqpuuxslsygjt/functions

---

## Change Log

| Date | Change | Author |
|------|--------|--------|
| 2025-10-10 | Initial security documentation created | System |
| 2025-10-10 | Fixed critical RLS policies (email_subscribers, newsletter_subscriptions, subscribers) | System |
| 2025-10-10 | Added rate limiting to voice-to-text function | System |
| 2025-10-10 | Removed redundant contact_submissions policy | System |
