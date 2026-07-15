# GOFLOW Database Schema

## Tables

### users
- id (UUID)
- email (String, unique)
- name (String)
- role (ENUM: admin, investor, partner, user)
- created_at (DateTime)

### organizations
- id (UUID)
- name (String)
- website (String)
- industry (String)
- users (Relationship)

### visitor_stats
- id (UUID)
- session_id (String)
- page (String)
- timestamp (DateTime)
- user_agent (String)

### leads
- id (UUID)
- email (String)
- name (String)
- company (String)
- interest (String)
- source (String)
- created_at (DateTime)

### products
- id (UUID)
- name (String)
- description (String)
- status (ENUM: available, beta, development)
- features (JSON)

## Relationships

```
users
  ├─ organizations (1:many)
  ├─ leads (1:many)
  └─ sessions (1:many)

organizations
  ├─ users (1:many)
  └─ subscriptions (1:many)

products
  ├─ features (1:many)
  └─ pricing (1:many)
```
