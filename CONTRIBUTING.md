# Contributing to WorkFamilyAI

Thank you for considering contributing to WorkFamilyAI! We welcome contributions from the community and are grateful for your support.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Issue Reporting](#issue-reporting)

---

## 🤝 Code of Conduct

This project adheres to a Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to conduct@workfamilyai.com.

### Our Standards

- ✅ Be respectful and inclusive
- ✅ Welcome diverse perspectives
- ✅ Accept constructive criticism gracefully
- ✅ Focus on what's best for the community
- ❌ No harassment, trolling, or discriminatory language
- ❌ No personal or political attacks
- ❌ No publishing others' private information

---

## 🎯 How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates.

**Good bug reports include:**
- Clear, descriptive title
- Steps to reproduce the issue
- Expected vs actual behavior
- Screenshots or error messages
- Environment details (browser, OS, Node version)

### 💡 Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- Use a clear, descriptive title
- Provide detailed explanation of the proposed feature
- Explain why this enhancement would be useful
- Include mockups or examples if applicable

### 🔧 Code Contributions

1. **Fork the repository**
2. **Create a feature branch** from `main`
3. **Make your changes** following our coding standards
4. **Write or update tests** if applicable
5. **Update documentation** as needed
6. **Submit a pull request**

---

## 🚀 Development Setup

### Prerequisites

- Node.js 18.0 or higher
- npm or bun package manager
- Git

### Setup Steps

```bash
# Fork and clone the repository
git clone https://github.com/your-username/workfamily-ai.git
cd workfamily-ai

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env
# Edit .env with your Supabase credentials

# Start development server
npm run dev
```

### Project Structure

Familiarize yourself with the project structure:

```
src/
├── components/     # React components (organized by feature)
├── hooks/          # Custom React hooks
├── pages/          # Route pages
├── utils/          # Utility functions
├── data/           # Static data
├── i18n/           # Internationalization
└── integrations/   # Third-party integrations (Supabase)

supabase/
├── functions/      # Edge Functions
└── migrations/     # Database migrations
```

---

## 📝 Coding Standards

### TypeScript

- ✅ Use TypeScript for all new files
- ✅ Define explicit types (avoid `any`)
- ✅ Use interfaces for object shapes
- ✅ Enable strict mode in tsconfig

```typescript
// ✅ Good
interface UserProfile {
  id: string;
  name: string;
  email: string;
}

function updateUser(user: UserProfile): void {
  // implementation
}

// ❌ Bad
function updateUser(user: any) {
  // implementation
}
```

### React Components

- ✅ Use functional components with hooks
- ✅ Keep components small and focused
- ✅ Extract reusable logic into custom hooks
- ✅ Use proper prop typing

```typescript
// ✅ Good
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button = ({ label, onClick, variant = 'primary' }: ButtonProps) => {
  return <button onClick={onClick}>{label}</button>;
};

// ❌ Bad
export const Button = (props: any) => {
  return <button>{props.label}</button>;
};
```

### Styling

- ✅ Use Tailwind CSS utility classes
- ✅ Use design tokens from `index.css` (e.g., `text-primary`, `bg-background`)
- ✅ Use HSL colors only (no direct color values)
- ❌ Avoid inline styles
- ❌ Don't use arbitrary color values like `text-white`, `bg-black`

```tsx
// ✅ Good
<div className="bg-background text-foreground p-4 rounded-lg">
  <h1 className="text-2xl font-bold text-primary">Title</h1>
</div>

// ❌ Bad
<div style={{ backgroundColor: 'white', color: 'black' }}>
  <h1 className="text-white">Title</h1>
</div>
```

### File Naming

- ✅ Components: `PascalCase.tsx` (e.g., `UserProfile.tsx`)
- ✅ Hooks: `camelCase.ts` with `use` prefix (e.g., `useUserData.ts`)
- ✅ Utilities: `kebab-case.ts` (e.g., `format-date.ts`)
- ✅ Types: `PascalCase.ts` or `kebab-case.ts`

### Imports

- ✅ Use absolute imports with `@/` prefix
- ✅ Group imports: React, third-party, local
- ✅ Sort imports alphabetically within groups

```typescript
// ✅ Good
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useUserData } from '@/hooks/useUserData';

// ❌ Bad
import { Button } from '../../components/ui/button';
import { useState, useEffect } from 'react';
```

---

## 📝 Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Commit Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```bash
# Good commits
feat(chat): add voice recording support
fix(auth): resolve token expiration issue
docs(readme): update installation instructions
refactor(components): extract reusable Button variants

# Bad commits
update stuff
fix bug
changes
```

---

## 🔄 Pull Request Process

### Before Submitting

1. ✅ Ensure all tests pass (`npm run test`)
2. ✅ Run linting (`npm run lint`)
3. ✅ Update documentation if needed
4. ✅ Add yourself to CONTRIBUTORS.md (optional)

### PR Template

When creating a pull request, include:

```markdown
## Description
[Brief description of changes]

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
[How was this tested?]

## Screenshots (if applicable)
[Add screenshots]

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings generated
```

### Review Process

1. At least one maintainer review required
2. All CI checks must pass
3. No merge conflicts
4. Approval from code owner (for sensitive areas)

### After Approval

- Squash and merge (preferred)
- Maintainers will merge your PR
- Delete your branch after merge

---

## 🐛 Issue Reporting

### Bug Report Template

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- Browser: [e.g., Chrome 120]
- OS: [e.g., macOS 14.0]
- Node version: [e.g., 18.17.0]

**Additional context**
Any other relevant information.
```

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
A clear description of the problem.

**Describe the solution you'd like**
What you want to happen.

**Describe alternatives you've considered**
Other solutions you've thought about.

**Additional context**
Mockups, examples, or references.
```

---

## 🔒 Security Issues

**Do NOT** create public issues for security vulnerabilities.

Instead, please email: security@workfamilyai.com

See [SECURITY.md](./SECURITY.md) for our security policy.

---

## 🌐 Internationalization

When adding new UI text:

1. ✅ Add translation keys to `src/i18n/locales/en.json`
2. ✅ Translate to all supported languages (or mark as TODO)
3. ✅ Use `useTranslation()` hook in components

```typescript
// ✅ Good
import { useTranslation } from 'react-i18next';

export const MyComponent = () => {
  const { t } = useTranslation();
  return <h1>{t('myComponent.title')}</h1>;
};

// ❌ Bad
export const MyComponent = () => {
  return <h1>My Title</h1>;
};
```

---

## 📚 Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn-ui Components](https://ui.shadcn.com/)
- [Supabase Documentation](https://supabase.com/docs)
- [Lovable Documentation](https://docs.lovable.dev/)

---

## 🙏 Recognition

Contributors will be recognized in:
- CONTRIBUTORS.md file
- Release notes
- Project README

---

## 📞 Getting Help

- 💬 [GitHub Discussions](https://github.com/your-username/workfamily-ai/discussions)
- 🐛 [GitHub Issues](https://github.com/your-username/workfamily-ai/issues)
- 📧 Email: support@workfamilyai.com

---

**Thank you for contributing to WorkFamilyAI! 💜**
